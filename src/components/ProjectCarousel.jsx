// import flightBooker from '/src/assets/images/project-images/flight-booker.png';
import fakebook from '/src/assets/images/project-images/fakebook.png';
import chess from '/src/assets/images/project-images/chess.png';
import waldo from '/src/assets/images/project-images/waldo.png';
import forhm from '/src/assets/images/project-images/forhm.jpg';
import ubuntu from '/src/assets/images/project-images/ubuntu.png';
import { useState, useRef, useEffect } from 'react';
import { getDataTheme } from '../utils/theme';
const techFiles = import.meta.glob('../assets/images/technology-images/*.svg', {eager: true, import: 'default'});
const techLogos = Object.fromEntries(
  Object.entries(techFiles).map(([path, url]) => {
    const name = path.split('/').pop().replace(/\.svg$/,'');
    return [name, url];
  })
);

export default function ProjectCarousel() {
  const dataTheme = getDataTheme();
  const [theme, setTheme] = useState(dataTheme);

  const projectsRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);
  
  useEffect(() => {
    const el = projectsRef.current;
    if(!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    const onThemeChange = (e) => setTheme(e.detail);
    window.addEventListener('themeChange', onThemeChange);
    return () => window.removeEventListener('themeChange', onThemeChange);
  }, []);

  return(
    <div className='my-14 bg-transparent'>
      <div className="page-width pl-40 sm:pl-10 lg:pl-[88px] xl:pl-40">
        <h2 className="text-lg font-extrabold tracking-wider text-[var(--color-text-header-secondary)]
        underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)] mb-10">PROJECTS</h2>
      </div>
    
      {/* Project card carousel */}
      <div ref={projectsRef} className='py-2 bg-transparent overflow-x-auto pl-6 pb-6'>
        <div className={`flex w-max mx-auto gap-8 snap-x snap-mandatory
          ${projectsInView ? `animate-projects-in` : ``}`}>

          <div id="slide1" className="carousel-item flex flex-col">
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
                  Facebook clone SPA app
                </h1>
                <div className='flex items-center gap-2 -mt-[9px] text-[var(--color-text-header-secondary)]'>
                  <img src={techLogos['rails']} alt="rails logo" className='size-10 -mt-[5px]'/>
                  <p className='text-xs'>+</p>
                  <img src={ theme == 'dark' ? techLogos['hotwire-dark'] : techLogos['hotwire-light'] }
                    alt="hotwire logo" className='size-10'/>
                  <p className='text-xs'>+</p>
                  <img src={techLogos['rspec']} alt="rspec logo" className='size-4'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 w-fit mx-auto'>
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
          <div id="slide2" className="carousel-item flex flex-col">
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
                  Wheres Waldo game app
                </h1>
                <div className='flex items-center gap-2 -mt-[10px] text-[var(--color-text-header-secondary)]'>
                  <img src={techLogos['react']} alt="react logo" className='size-4'/>
                  <p className='text-xs'>+</p>
                  <img src={techLogos['rails']} alt="rails logo" className='size-10'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 w-fit mx-auto'>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;React Router, Context API</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;callbk memo ref nav params</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Custom hooks</li>
                </ul>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Rails API + Postgres</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Rails 8 auth via React</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Full unit & integration tests</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item flex flex-col">
            <div className='rotate-1 p-1'>
              <a href="https://replit.com/@jbk1/Chess">
                <img src={chess} className="mx-auto h-[280px] rounded drop-shadow-lg
                transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <div className='flex flex-col items-center'>
                <h1 className="font-bold text-[var(--color-text-header-secondary)]
                  [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                  Command line chess game
                </h1>
                <div className='flex items-center gap-2 mb-2 mt-[2px] text-[var(--color-text-header-secondary)]'>
                  <img src={techLogos['ruby']} alt="ruby logo" className='size-[13px]'/>
                  <p className='text-xs -mt-[3px]'>+</p>
                  <img src={techLogos['rspec']} alt="rspec logo" className='size-4'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 w-fit mx-auto'>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Chess in pure Ruby</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Built via TDD & rspec</li>
                  {/* <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;</li> */}
                </ul>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Unit & integration tested</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Game persistency</li>
                  {/* <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item flex flex-col">
            <div className='rotate-1 p-1'>
              <a href="https://ubuntu.bibble.com">
                <img src={ubuntu} className="mx-auto h-[280px] rounded drop-shadow-lg
                transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <div className='flex flex-col items-center'>
                <h1 className="font-bold text-[var(--color-text-header-primary)]
                  [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                  Bash scripting and Linux devops
                </h1>
                <div className='flex items-center gap-2 mb-1 text-[var(--color-text-header-secondary)]'>
                  <img src={techLogos['linux']} alt="linux logo" className='size-[17px]'/>
                  <p className='text-xs'>+</p>
                  <img src={techLogos['ubuntu']} alt="ubuntu logo" className='size-[15px]'/>
                  <p className='text-xs'>+</p>
                  <img src={techLogos['bash-dark']} alt="bash logo" className='size-[22px]'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 w-fit mx-auto'>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Ubuntu provisioning</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Server maintenance</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;DNS management</li>
                </ul>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Nginx, docker</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;SSH, systemd</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Git hooks</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide5" className="carousel-item flex flex-col">
            <div className="-rotate-1 p-1">
              <a href="https://forhm.com/">
                <img src={forhm} className="mx-auto h-[280px] rounded drop-shadow-lg
                transition ease-in-out hover:scale-[101%]"/>
              </a>
            </div>
            <div className="mt-5 ml-6 text-[var(--color-text-secondary)]">
              <div className='flex flex-col items-center'>
                <h1 className="font-bold text-[var(--color-text-header-secondary)]
                  [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">
                  Shopify custom theme
                </h1>
                <div className='flex items-center gap-2 mb-2 mt-[2px] text-[var(--color-text-header-secondary)]'>
                  <img src={techLogos['javascript']} alt="javascript logo" className='size-4'/>
                  <p className='text-xs'>+</p>
                  <img src={ theme == 'dark' ? techLogos['shopify-dark'] : techLogos['shopify-light']}
                    alt="shopify logo" className='size-4'/>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-5 w-fit mx-auto'>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;CSS customisation</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;HTML customisation</li>
                </ul>
                <ul className="font-light text-sm">
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Vanilla JS</li>
                  <li className="[&::marker]:content-['•'] [&::marker]:text-[var(--color-teal-dark)]">&nbsp;Liquid templating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}