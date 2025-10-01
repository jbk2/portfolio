import fakebook from '/src/assets/images/project-images/fakebook.png';
import chess from '/src/assets/images/project-images/chess.png';
import waldo from '/src/assets/images/project-images/waldo.png';
// import flightBooker from '/src/assets/images/project-images/flight-booker.png';
import forhm from '/src/assets/images/project-images/forhm.png';
import ubuntu from '/src/assets/images/project-images/ubuntu.png';
import { useState, useRef, useEffect } from 'react';
import  railsLogo from '../assets/images/technology-images/rails.svg';
import  hotwireLogoLight from '../assets/images/technology-images/hotwire-light.svg';
import  hotwireLogoDark from '../assets/images/technology-images/hotwire-dark.svg';
import  reactLogo from '../assets/images/technology-images/react.svg';
import  rspecLogo from '../assets/images/technology-images/rspec.svg';
import  viteLogo from '../assets/images/technology-images/vite.svg';
import  tailwindLogo from '../assets/images/technology-images/tailwindcss.svg';

export default function ProjectCarousel() {
  const dataTheme = () => document.documentElement.getAttribute('data-theme');
  const [theme, setTheme] = useState(() => dataTheme());
  const projectsRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);
  
  useEffect(() => {
    const el = projectsRef.current;
    if(!el) return;
    
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

  useEffect(() => {
    const onThemeChangeEvent = (e) => setTheme(e.detail)
    window.addEventListener('themeChange', onThemeChangeEvent);
    
    return() => window.removeEventListener('themeChange', onThemeChangeEvent);
  }, [])

  return(
    <div className='my-14 bg-transparent'>
      <div className="page-width pl-40 sm:pl-10 lg:pl-[88px] xl:pl-40">
        <h2 className="text-lg self-center font-extrabold font-inter tracking-wider text-[var(--color-text-header-secondary)]
        underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)] mb-10">PROJECTS</h2>
      </div>
    
      {/* Project card carousel */}
      <div ref={projectsRef} className='flex justify-center px-10 py-2 bg-transparent'>
        <div className={`carousel carousel-center max-w-fit bg-transparent rounded-box
          ${projectsInView ? `animate-projects-in` : ``}`}>
          <div id="slide1" className="carousel-item flex flex-col w-108">
            <div className='rotate-1 p-1'>
              <a href="https://fakebook.bibble.com">
                <img src={fakebook} className="mx-auto rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <div className='flex flex-col items-center'>
                <h1 className="flex font-bold text-[var(--color-text-header-secondary)]
                  [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                  Facebook clone SPA type app
                </h1>
                <div className='flex items-center gap-2 text-[var(--color-text-header-secondary)]'>
                  <img src={railsLogo} alt="rails logo" className='size-10 -mt-[13px]'/>
                  <p className='text-xs -mt-[12px]'>+</p>
                  <img src={rspecLogo} alt="rspec logo" className='size-4 -mt-[13px]'/>
                  <p className='text-xs -mt-[12px]'>+</p>
                  <img src={ theme == 'dark' ? hotwireLogoDark : hotwireLogoLight}
                    alt="hotwire logo" className='size-10 -mt-[7px]'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Complex forms & assoc'ns</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;ActiveStorage</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Jobs, Mailers</li>
                </ul>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Turbo, Stimulus</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;ActionCable</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Full unit & system tests</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item flex flex-col w-108">
            <div className='-rotate-1 p-1'>
              <a href="https://waldo.bibble.com">
                <img src={waldo} className="mx-auto rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <div className='flex flex-col items-center'>
                <h1 className="font-bold text-[var(--color-text-header-secondary)]
                  [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                  Wheres Waldo toy game app
                </h1>
                <div className='flex items-center gap-2 mb-2 text-[var(--color-text-header-secondary)]'>
                  <img src={reactLogo} alt="react logo" className='size-5 -mt-[4px]'/>
                  <p className='text-xs -mt-[3px]'>+</p>
                  <img src={viteLogo} alt="vite logo" className='size-4 -mt-[7px]'/>
                  <p className='text-xs -mt-[3px]'>+</p>
                  <img src={railsLogo} alt="rails logo" className='size-10 -mt-[7px]'/>
                  <p className='text-xs -mt-[3px]'>+</p>
                  <img src={tailwindLogo} alt="tailwind logo" className='size-5 -mt-[7px]'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;React Router, Context API</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;callback|memo|ref|nav|params</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Custom hooks</li>
                </ul>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Rails API + Postgres</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Rails 8 auth served via React</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Unit and integration tested</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item flex flex-col w-108">
            <div className='rotate-1 p-1'>
              <a href="https://replit.com/@jbk1/Chess">
                <img src={chess} className="h-[280px] rounded drop-shadow-lg
                transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <h1 className="font-bold text-[var(--color-text-header-secondary)]
                [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                Command line chess game
              </h1>
              <ul className="list-inside list-disc font-light text-sm">
                <li className="">Pure Ruby chess app</li>
                <li>Built TDD with Rspec</li>
              </ul>
            </div>
          </div>
          <div id="slide4" className="carousel-item flex flex-col w-108">
            <div className="-rotate-1 p-1">
              <a href="https://forhm.com/">
                <img src={forhm} className="rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <h1 className="font-bold text-[var(--color-text-header-secondary)]
                [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                Shopify app
              </h1>
              <ul className="list-inside list-disc font-light text-sm">
                <li className="">Custom html & css theme</li>
                <li>Custom JS features</li>
              </ul>
            </div>
          </div>
          <div id="slide5" className="carousel-item flex flex-col w-108">
            <div className='rotate-1 p-1'>
              <a href="https://ubuntu.bibble.com">
                <img src={ubuntu} className="rounded h-[280px] drop-shadow-lg
                  transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <h1 className="font-bold text-[var(--color-text-header-primary)]
                [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                Bash scripting and Linux devops
              </h1>
              <ul className="list-inside list-disc font-light text-sm">
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