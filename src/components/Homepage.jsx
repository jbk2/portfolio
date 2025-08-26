import Navbar from './Navbar'
import HeroSection from './HeroSection'
import TechCarousel from './TechCarousel'
import Introduction from './Introduction'

export default function Homepage() {

  return(
    <div>
      <Navbar />
      <HeroSection />
      <TechCarousel />
      <Introduction />
      
      

      {/* Resources/Tutorials section */}
      <div>
        <div className="px-4 sm:px-10 lg:pl-[88px] xl:pl-40">
          <h2 className="text-lg self-center font-extrabold font-inter tracking-wider text-blue-900
          underline underline-offset-4 decoration-4 decoration-emerald-200 ">COURSES / TURORIALS / BOOKS</h2>
        </div>
        <hr className="w-[70vw] sm:w-[80vw] mx-auto border-blue-100 mt-8 mb-16 md:mt-10 lg:mt-16 xl:mt-20"></hr>
      </div>


      {/* Carousel project section */}
      <div>
        <div className="pl-4 sm:pl-10 lg:pl-[88px] xl:pl-40">
          <h2 className="text-lg self-center font-extrabold font-inter tracking-wider text-blue-900
          underline underline-offset-4 decoration-4 decoration-emerald-200 mb-10">PORTFOLIO</h2>
        </div>
        
        {/* Project card carousel */}
        <div className="">
          <div className="carousel carousel-center bg-white rounded-box h-[450px] m-auto space-x-8 pl-4">
            {/* <div className="absolute z-1000 flex justify-between">
              <a href="#slide5" className="btn btn-circle bg-slate-700">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div> */}
            <div id="slide1" className="carousel-item flex flex-col">
              <a href="https://fakebook.bibble.com" className="transition ease-in-out hover:scale-[101%]">
                <img src="assets/images/project-images/fakebook.png" className="rounded rotate-1 h-[320px] drop-shadow-lg" /> {/* border-4 border-green-300 */}
              </a>
              <div className="mt-5 ml-6 font-inter text-cyan-800">
                <h1 className="font-bold">Facebook clone SPA type app</h1>
                <ul className="list-inside list-disc font-light text-sm text-gray-700">
                  <li className="">Rails</li>
                  <li>Hotwire</li>
                  <li>Websockets</li>
                </ul>
              </div>
            </div>
            <div id="slide2" className="carousel-item flex flex-col ">
              <a href="https://replit.com/@jbk1/Chess" className="transition ease-in-out hover:scale-[101%]">
                <img src="assets/images/project-images/chess.png" className="rounded -rotate-1 h-[320px] drop-shadow-lg" /> {/* border-4 border-orange-300 */}
              </a>
              <div className="mt-5 ml-6 font-inter text-cyan-800">
                <h1 className="font-bold">Command line chess game</h1>
                <ul className="list-inside list-disc font-light text-sm text-gray-700">
                  <li className="">Pure Ruby chess app</li>
                  <li>Built TDD with Rspec</li>
                </ul>
              </div>
            </div>
            <div id="slide3" className="carousel-item flex flex-col ">
              <a href="https://flight-booker.bibble.com" className="transition ease-in-out hover:scale-[101%]">
                <img src="assets/images/project-images/flight-booker.png" className="rounded rotate-1 h-[320px] drop-shadow-lg" />{/* border-4 border-green-300 */}
              </a>
              <div className="mt-5 ml-6 font-inter text-cyan-800">
                <h1 className="font-bold">Flight booking demo app</h1>
                <ul className="list-inside list-disc font-light text-sm text-gray-700">
                  <li className="">Rails</li>
                  <li>Stimulus</li>
                  <li>Turbo</li>
                </ul>
              </div>
            </div>
            <div id="slide4" className="carousel-item flex flex-col">
              <a href="https://forhm.com/"  className="transition ease-in-out hover:scale-[101%]">
                <img src="assets/images/project-images/forhm.png" className="rounded -rotate-1 h-[320px] drop-shadow-lg" />{/* border-4 border-teal-300 */}
              </a>
              <div className="mt-5 ml-6 font-inter text-cyan-800">
                <h1 className="font-bold">Shopify app</h1>
                <ul className="list-inside list-disc font-light text-sm text-gray-700">
                  <li className="">Custom html & css theme</li>
                  <li>Custom JS features</li>
                </ul>
              </div>
            </div>
            <div id="slide5" className="carousel-item flex flex-col">
              <a href="https://ubuntu.bibble.com"  className="transition ease-in-out hover:scale-[101%]">
                <img src="assets/images/project-images/scripting-ubuntu.png" className="rounded -rotate-1 h-[320px] drop-shadow-lg" />{/* border-4 border-teal-300 */}
              </a>
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

      <div className="flex flex-col px-6 sm:px-10 mt-20">
        {/* Others section */}
        <section className="">
          <h4 className="text-base"><a href="https://github.com/jbk2/linux-scripting" className="link">Linux scripting</a> repo ...</h4>
        </section>
        <br></br>
        <section className="">
          Studied:
          <ul>
            <li>The Odin Project - Completed full sylabus</li>
            <li>Hartls' Rails Tutorial (x3)</li>
            <li>Makers Academy</li>
            <li>Prag Prog books;
              <ul>
                <li>Agile Web Development</li>
                <li>Effective tesing with Rspec</li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>AWS Cert</li>
            <li><a href="https://deploymentfromscratch.com/">Deployment from Scratch</a></li>
            <li>Hotwire</li>
            <li><a href="https://www.learnui.design/">Learn UI</a></li>
            <li>Many Linda </li>
            <li>Attend conferences - Brighton Ruby</li>
            <li>Add Socials </li>
          </ul>
        </section>
      </div>


    </div>
  )
}