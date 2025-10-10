import { courses } from '../data/courses'
import Course from './Course'
import { useRef } from 'react'
import { useScrollShift } from '../utils/useScrollShift';

export default function Courses() {
  const coursesRef = useRef(null);
  
  useScrollShift(coursesRef, {
    maxShift: 70,
    startVH: 4 / 4, // e.g. 3/4 of view height - from from top of page!
    endVH: 3 / 5,   // e.g. 1/2 of view height - from from top of page!
    cssVar: "--scroll-shift",
  });

  return(
    <>
      <div className='my-18 page-width'>
        {/* <hr className="mx-auto border-[var(--color-border-primary)]"></hr> */}
        <hr className="section-hr"></hr>
        <div className="pl-20 lg:pl-30 xl:pl-40 mt-14">
          <h2 className="text-lg font-extrabold tracking-wider text-[var(--color-text-header-secondary)]
          underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)] ">COURSES / TUTORIALS / BOOKS</h2>
        </div>
        {/* <section className="flex justify-center gap-20">
          <h2>Studied:</h2>
          <ul>

            <li><a href="https://deploymentfromscratch.com/">Deployment from Scratch</a></li>
            <li>AWS Cert</li>
            <li>Hotwire</li>
            <li><a href="https://www.learnui.design/">Learn UI</a></li>
            <li>Attend conferences - Brighton Ruby</li>
            <li>React docs </li>
            <li>Hotwire Docs </li>
            <li>Rails guides </li>
          </ul>
        </section> */}
      </div>
      <section ref={coursesRef} className='grid mx-auto justify-center mt-10 max-w-[2000px] gap-6
        [grid-template-columns:repeat(auto-fit,minmax(18rem,18rem))]
        translate-y-[var(--scroll-shift,0px)]'>
        {
          courses.map(course => (
            <Course key={course.id} {...course} />
          ))
        }
      </section>
      <hr className="section-hr my-14 pb-6"></hr>
    </>
  )
}