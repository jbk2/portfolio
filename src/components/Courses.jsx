import { courses } from '../data/courses'
import Course from './Course'
import { useEffect, useRef } from 'react'

export default function Courses() {
  const coursesRef = useRef(null);
  const tickingRef = useRef(false);
  const rafIdRef = useRef(null);
  const maxShiftRef = useRef(50);
  
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

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
    const el = coursesRef.current;
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
    if (!coursesRef.current) return;

    const coursesObserver = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
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
    
    coursesObserver.observe(coursesRef.current)

    return () => {
      window.removeEventListener("scroll", onScroll);
      coursesObserver.disconnect();
    }
  }, [])

  return(
      <div className='my-18 page-width'>
        <hr className="mx-auto border-[var(--color-border-primary)]"></hr>
        <div className="px-4 sm:px-10 lg:pl-[88px] xl:pl-40 my-16">
          <h2 className="text-lg self-center font-extrabold font-inter tracking-wider text-blue-900
          underline underline-offset-4 decoration-4 decoration-emerald-200 ">COURSES / TUTORIALS / BOOKS</h2>
        </div>
        {/* <section className="flex justify-center gap-20">
          <h2>Studied:</h2>
          <ul>
            <li>The Odin Project - Completed full sylabus</li>
            <li>Hartls' Rails Tutorial (x3)</li>
            <li>Makers Academy</li>
            <li>Prag Prog books;
              <ul>
                <li>Agile Web Development</li>
                <li>Effective tesing with Rspec</li>
                <li>Javascrip the best bits</li>
                <li>Ruby the best bits</li>
              </ul>
            </li>
            <li>AWS Cert</li>
            <li><a href="https://deploymentfromscratch.com/">Deployment from Scratch</a></li>
          </ul>
          <ul>
            <li>Hotwire</li>
            <li><a href="https://www.learnui.design/">Learn UI</a></li>
            <li>Many Linda </li>
            <li>Attend conferences - Brighton Ruby</li>
            <li>Add Socials </li>
            <li>React docs </li>
            <li>Hotwire Docs </li>
            <li>Rails guides </li>
            <li>Add Socials </li>
          </ul>
        </section> */}
        <section ref={coursesRef} className='grid grid-rows-2 grid-cols-4 justify-center
          gap-6 mt-10 max-w-[80vw] mx-auto translate-y-[var(--scroll-shift,0px)]'>
          {
            courses.map(course => (
              <div key={course.id} className=''>
                <Course {...course} />
              </div>
              )
            )
          }
        </section>
      </div>
  )
}