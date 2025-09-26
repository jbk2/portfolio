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
      <div className='my-18 page-width px-4 sm:px-10'>
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
        <section ref={coursesRef} className='flex flex-wrap
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