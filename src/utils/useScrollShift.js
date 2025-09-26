import { useRef, useEffect } from "react";

export function useScrollShift(ref, options = {}) {
  const {
    endVH = 2 / 3,
    maxShift = 50,
    cssVar = '--scroll-shift',
    enabled = true
  } = options

  const tickingRef = useRef(false);
  const rafIdRef = useRef(null);
  const maxShiftRef = useRef(maxShift);

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
  // const handleOnScroll = () => onScroll(el);

  function getShiftVal(el) {
    const startHeight = window.innerHeight;
    const finishHeight = startHeight - (startHeight / 3);
    const range = startHeight - finishHeight;

    const currentShift = parseFloat(
      getComputedStyle(el).getPropertyValue('--scroll-shift')
    ) || 0;

    const elTop = el.getBoundingClientRect().top;
    const elTopUnshifted = elTop - currentShift;

    const progress = 1 - (startHeight - elTopUnshifted) / range
    const shift = maxShiftRef.current * progress;
    return shift;
  }

  function setShift(el, px) {
    el.style.setProperty('--scroll-shift', `${Math.round(px)}px`);
  }

  function onScroll() {
    const el = ref.current;
    if (!el) return;
    if (tickingRef.current) return;
    tickingRef.current = true;

    rafIdRef.current = requestAnimationFrame(() => {
      tickingRef.current = false;
      const shiftVal = getShiftVal(el)

      if (shiftVal <= 0) {
        setShift(el, 0)
        return;
      }

      setShift(el, getShiftVal(el));
    });
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!enabled || reduced) {
      el.style.setProperty(cssVar, "0px");
      return;
    }

    const elObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
          onScroll();
          console.log('started listener for scroll event')
        } else {
          window.removeEventListener('scroll', onScroll);
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
          tickingRef.current = false;
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    )

    elObserver.observe(el);

    return () => {
      window.removeEventListener("scroll", onScroll);
      elObserver.disconnect();
    }
  }, [])
}