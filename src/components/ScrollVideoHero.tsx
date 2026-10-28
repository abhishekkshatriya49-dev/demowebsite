import React, { useEffect, useRef } from 'react';

interface ScrollVideoHeroProps {
  onExploreMenu: () => void;
  onFindCafe: () => void;
}

export const ScrollVideoHero: React.FC<ScrollVideoHeroProps> = ({
  onExploreMenu,
  onFindCafe,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBackdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const heroContent = heroContentRef.current;
    const heroBackdrop = heroBackdropRef.current;

    if (!section || !video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    try {
      video.pause();
    } catch {
      // ignore
    }

    const preventPlay = () => {
      video.pause();
    };
    video.addEventListener('play', preventPlay);

    let isVideoReady = false;
    let targetProgress = 0;
    let currentProgress = 0;
    let targetTime = 0;
    let interpolatedTime = 0;
    let pendingSeekTime: number | null = null;
    let lastSeekTime = 0;
    let isDisposed = false;
    let animFrameId: number;

    let sectionTop = 0;
    let scrollRange = 1;

    const measureLayout = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      scrollRange = Math.max(1, section.offsetHeight - window.innerHeight);
    };

    const getNormalizedProgress = () => {
      const relativeScroll = window.scrollY - sectionTop;
      if (relativeScroll <= 0) return 0;
      if (relativeScroll >= scrollRange) return 1;
      return relativeScroll / scrollRange;
    };

    const onScroll = () => {
      targetProgress = getNormalizedProgress();
      if (isVideoReady && video.duration > 0) {
        if (targetProgress <= 0.0005) {
          targetTime = 0;
        } else if (targetProgress >= 0.9995) {
          targetTime = video.duration;
        } else {
          targetTime = targetProgress * video.duration;
        }
      }
    };

    const performSeek = (time: number) => {
      if (!video.duration || isNaN(video.duration)) return;

      let safeTime = time;
      if (targetProgress <= 0.001) {
        safeTime = 0;
      } else if (targetProgress >= 0.999) {
        safeTime = video.duration;
      } else {
        safeTime = Math.max(0, Math.min(video.duration, time));
      }

      if (video.seeking) {
        pendingSeekTime = safeTime;
        return;
      }

      const now = performance.now();
      const delta = Math.abs(video.currentTime - safeTime);

      if ((delta > 0.012 && now - lastSeekTime > 30) || safeTime === 0 || safeTime === video.duration) {
        try {
          lastSeekTime = now;
          video.currentTime = safeTime;
          pendingSeekTime = null;
        } catch {
          pendingSeekTime = safeTime;
        }
      }
    };

    const handleSeeked = () => {
      if (pendingSeekTime !== null) {
        const next = pendingSeekTime;
        pendingSeekTime = null;
        performSeek(next);
      }
    };
    video.addEventListener('seeked', handleSeeked);

    let lastHeroState = -1;
    let lastHeroOpacity = -1;
    let lastHeroLift = -1;

    const updateHeroText = (progress: number) => {
      if (!heroContent) return;

      if (progress <= 0.10) {
        if (lastHeroState !== 0) {
          heroContent.style.opacity = '1';
          heroContent.style.transform = 'translate3d(0, -50%, 0)';
          heroContent.style.pointerEvents = 'auto';
          if (heroBackdrop) heroBackdrop.style.opacity = '1';
          lastHeroState = 0;
          lastHeroOpacity = 1;
          lastHeroLift = 0;
        }
      } else if (progress >= 0.36) {
        if (lastHeroState !== 2) {
          heroContent.style.opacity = '0';
          heroContent.style.transform = 'translate3d(0, calc(-50% - 35px), 0)';
          heroContent.style.pointerEvents = 'none';
          if (heroBackdrop) heroBackdrop.style.opacity = '0';
          lastHeroState = 2;
          lastHeroOpacity = 0;
          lastHeroLift = 35;
        }
      } else {
        lastHeroState = 1;
        const t = (progress - 0.10) / 0.26;
        const opacity = Math.round((1 - t) * 100) / 100;
        const lift = Math.round(t * 35);

        if (opacity !== lastHeroOpacity) {
          heroContent.style.opacity = String(opacity);
          if (heroBackdrop) heroBackdrop.style.opacity = String(opacity);
          lastHeroOpacity = opacity;
        }

        if (lift !== lastHeroLift) {
          heroContent.style.transform = `translate3d(0, calc(-50% - ${lift}px), 0)`;
          lastHeroLift = lift;
        }

        heroContent.style.pointerEvents = t > 0.8 ? 'none' : 'auto';
      }
    };

    const LERP_FACTOR = 0.16;

    const animationLoop = () => {
      if (isDisposed) return;

      if (isVideoReady && video.duration > 0) {
        const timeDiff = targetTime - interpolatedTime;

        if (Math.abs(timeDiff) > 0.001) {
          interpolatedTime += timeDiff * LERP_FACTOR;
        } else {
          interpolatedTime = targetTime;
        }

        if (targetProgress === 0 && Math.abs(interpolatedTime) < 0.02) {
          interpolatedTime = 0;
        } else if (targetProgress === 1 && Math.abs(interpolatedTime - video.duration) < 0.02) {
          interpolatedTime = video.duration;
        }

        const progDiff = targetProgress - currentProgress;
        if (Math.abs(progDiff) > 0.0001) {
          currentProgress += progDiff * LERP_FACTOR;
        } else {
          currentProgress = targetProgress;
        }

        performSeek(interpolatedTime);
        updateHeroText(currentProgress);
      }

      animFrameId = requestAnimationFrame(animationLoop);
    };

    const onVideoReady = () => {
      if (isVideoReady || isDisposed) return;
      isVideoReady = true;

      try {
        video.pause();
      } catch {
        // ignore
      }
      measureLayout();
      onScroll();

      currentProgress = targetProgress;
      interpolatedTime = targetTime;

      performSeek(interpolatedTime);
      updateHeroText(currentProgress);
    };

    let isPrimed = false;
    const primeMobileVideo = () => {
      if (isPrimed || !video) return;
      isPrimed = true;

      video.muted = true;
      video.defaultMuted = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.pause();
            onVideoReady();
          })
          .catch(() => {
            onVideoReady();
          });
      } else {
        video.pause();
        onVideoReady();
      }
    };

    window.addEventListener('touchstart', primeMobileVideo, { passive: true, once: true });
    window.addEventListener('touchmove', primeMobileVideo, { passive: true, once: true });
    window.addEventListener('scroll', primeMobileVideo, { passive: true, once: true });
    window.addEventListener('click', primeMobileVideo, { passive: true, once: true });

    video.addEventListener('loadedmetadata', onVideoReady);
    video.addEventListener('canplay', onVideoReady);
    video.addEventListener('loadeddata', onVideoReady);
    video.addEventListener('durationchange', onVideoReady);

    if (video.readyState >= 1) {
      onVideoReady();
    }

    try {
      video.load();
    } catch {
      // ignore
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    const handleResize = () => {
      measureLayout();
      onScroll();
    };
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        measureLayout();
        onScroll();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    measureLayout();
    onScroll();
    animFrameId = requestAnimationFrame(animationLoop);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animFrameId);
      video.removeEventListener('play', preventPlay);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadedmetadata', onVideoReady);
      video.removeEventListener('canplay', onVideoReady);
      video.removeEventListener('loadeddata', onVideoReady);
      video.removeEventListener('durationchange', onVideoReady);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="coffee-scroll-section"
      id="home"
      aria-label="Velvet Bean Café - Fresh Handcrafted Coffee"
    >
      <div className="coffee-scroll-fade-top" />

      <div className="coffee-scroll-sticky">
        <div className="coffee-scroll-viewport">
          <video
            ref={videoRef}
            id="coffee-scroll-video"
            className="coffee-scroll-video"
            src="/1018.mp4"
            poster="/images/hero-poster.webp"
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden="true"
          />

          <div ref={heroBackdropRef} className="coffee-hero-backdrop" />

          <div ref={heroContentRef} className="coffee-hero-content container">
            <div className="eyebrow">
              <span />
              Freshly Brewed • Every Day
            </div>

            <h1>
              Coffee that makes
              <br />
              ordinary moments <em>special.</em>
            </h1>

            <p className="hero-description">
              Welcome to Velvet Bean Café — your cozy neighborhood café for handcrafted coffee,
              delicious bites and conversations worth remembering.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={onExploreMenu}
                className="primary-btn"
              >
                Explore Our Menu →
              </button>

              <button
                type="button"
                onClick={onFindCafe}
                className="secondary-btn"
              >
                Find Our Café
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="coffee-scroll-fade-bottom" />
    </section>
  );
};
