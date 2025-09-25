import fakebook from '/src/assets/images/project-images/fakebook.png';
import chess from '/src/assets/images/project-images/chess.png';
import waldo from '/src/assets/images/project-images/waldo.png';
// import flightBooker from '/src/assets/images/project-images/flight-booker.png';
import forhm from '/src/assets/images/project-images/forhm.png';
import ubuntu from '/src/assets/images/project-images/ubuntu.png';
import { useState, useRef, useEffect } from 'react';

export default function ProjectCarousel() {

  const projectsRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);
  
  useEffect(() => {
    const el = projectsRef.current;
    if(!el) return;
    
    const intersectionOptions = {
      root: null,
      rootMargin: "0px",
      scrollMargin: "0px",
      threshold: 0.1,
    };  
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('animateIn callback received entry', entry);
          setProjectsInView(true);
          observer.unobserve(el);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        scrollMargin: "0px",
        // threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [])

  return(
    <div className='my-14'>
      <div className="page-width pl-40 sm:pl-10 lg:pl-[88px] xl:pl-40">
        <h2 className="text-lg self-center font-extrabold font-inter tracking-wider text-blue-900
        underline underline-offset-4 decor4tion-4 decoration-emerald-200 mb-10">PROJECTS</h2>
      </div>
    
      {/* Project card carousel */}
      <div ref={projectsRef} className='flex justify-center px-10 py-2'>
        <div className={`carousel carousel-center max-w-fit bg-white rounded-box
          ${projectsInView ? `animate-projects-in` : ``}`}>
          <div id="slide1" className="carousel-item flex flex-col">
            <div className='rotate-1 p-1'>
              <a href="https://fakebook.bibble.com">
                <img src={fakebook} className="rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 font-inter text-cyan-800">
              <h1 className="font-bold">Facebook clone SPA type app</h1>
              <ul className="list-inside list-disc font-light text-sm text-gray-700">
                <li className="">Rails</li>
                <li>Hotwire</li>
                <li>Websockets</li>
              </ul>
            </div>
          </div>
          <div id="slide2" className="carousel-item flex flex-col">
            <div className='-rotate-1 p-1'>
              <a href="https://waldo.bibble.com">
                <img src={waldo} className="rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 font-inter text-cyan-800">
              <h1 className="font-bold">Wheres Waldo toy game app</h1>
              <ul className="list-inside list-disc font-light text-sm text-gray-700">
                <li className="">React</li>
                <li>Rails API</li>
              </ul>
            </div>
          </div>
          <div id="slide3" className="carousel-item flex flex-col">
            <div className='rotate-1 p-1'>
              <a href="https://replit.com/@jbk1/Chess">
                <img src={chess} className="h-[280px] rounded drop-shadow-lg
                transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 font-inter text-cyan-800">
              <h1 className="font-bold">Command line chess game</h1>
              <ul className="list-inside list-disc font-light text-sm text-gray-700">
                <li className="">Pure Ruby chess app</li>
                <li>Built TDD with Rspec</li>
              </ul>
            </div>
          </div>
          <div id="slide4" className="carousel-item flex flex-col">
            <div className="-rotate-1 p-1">
              <a href="https://forhm.com/">
                <img src={forhm} className="rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 font-inter text-cyan-800">
              <h1 className="font-bold">Shopify app</h1>
              <ul className="list-inside list-disc font-light text-sm text-gray-700">
                <li className="">Custom html & css theme</li>
                <li>Custom JS features</li>
              </ul>
            </div>
          </div>
          <div id="slide5" className="carousel-item flex flex-col">
            <div className='rotate-1 p-1'>
              <a href="https://ubuntu.bibble.com">
                <img src={ubuntu} className="rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 font-inter text-cyan-800">
              <h1 className="font-bold">Bash scripting and Linux devops</h1>
              <ul className="list-inside list-disc font-light text-sm text-gray-700">
                <li className="">Bash scripting</li>
                <li>Ubuntu deployment, systemd, docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}