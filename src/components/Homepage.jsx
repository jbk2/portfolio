export default function Homepage() {

  return(
    <div>
      <div className="flex justify-center px-4 sm:px-10">

        <div className="grid grid-cols-1 xl:grid-cols-[220px_minmax(400px,max-content)] mt-[8%]">
          {/* Header title section */}
          {/* Col-1 */}
          <div className="hidden xl:inline-block col-start-1 text-right self-end">
            <p className="text-sm text-gray-600 font-jetbrains pr-4 pb-1">&lt;h1 className='<span id="dynamic-class-text">ruby</span>'&gt;</p>
          </div>
          
          {/* Col-2 */}
          <div className="col-start-1 xl:col-start-2 mx-auto xl:ml-0 md:min-w-[800px]">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-inter font-black text-blue-900 sm:mb-6 md:mb-8 lg:mb-10">I'm 
              {/* <div className="inline-block bg-clip-text text-transparent
              bg-[linear-gradient(to_right,theme(colors.blue.900),theme(colors.sky.700),theme(colors.cyan.600),theme(colors.sky.700),theme(colors.blue.900))]
              bg-[length:200%_auto] animate-gradient"> */}
              <div className="inline-block bg-clip-text text-transparent
                bg-[linear-gradient(to_right,theme(colors.teal.400),theme(colors.sky.500),theme(colors.violet.600),theme(colors.sky.500),theme(colors.teal.400))]
                bg-[length:200%_auto] animate-gradient">
                James
                <span className="hidden sm:inline-block">&nbsp;Kemp</span>
              </div>
              <span className="text-3xl sm:text-4xl -ml-1 sm:-ml-2">,</span>
              <span className="hidden md:inline-block text-3xl animate-rotate-wave delay-1 ml-5 lg:ml-8">👋🏻</span>
              <span className="hidden md:inline-block text-5xl -ml-3">👨🏻‍💻</span>
            </h1>

            <div className="flex flex-wrap">
              <h1 className="inline-block sm:hidden text-5xl md:text-7xl font-inter font-extrabold text-blue-900 whitespace-nowrap">A web developer
                <span className="text-4xl -ml-1">.</span>
              </h1>
              <span className="whitespace-nowrap">
                <h1 className="hidden sm:inline-block text-6xl md:text-7xl font-inter font-extrabold text-blue-900">Full stack developer
                  <span className="text-5xl -ml-1">.</span>
                </h1>
                <p className="hidden xl:inline-block text-sm text-gray-600 font-jetbrains pl-2">&lt;/h1&gt;</p>
              </span>
            </div>
          </div>
        
          {/* Tech logo carousel section */}
          <div className="col-start-1 col-span-1 xl:col-span-2 overflow-x-hidden mt-5">
            <section className="max-w-[85vw] 2xl:max-w-[75vw] inline-flex flex-nowrap opacity-90 
            [mask-image:_linear-gradient(to_right,transparent_3%,_white_17%,_white_83%,transparent_97%)]
            xl:[mask-image:_linear-gradient(to_right,transparent_7%,_white_15%,_white_85%,transparent_93%)]
            ">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li><img src="assets/images/technology-images/ec2.svg" alt="EC2" className="size-7 -ml-2" /></li>
                <li><img src="assets/images/technology-images/docker-logo.svg" alt="Docker" className="size-16" /></li>
                <li><img src="assets/images/technology-images/linux-logo.svg" alt="Linux" className="size-7 -ml-1" /></li>
                <li><img src="assets/images/technology-images/nginx-logo.svg" alt="Nginx" className="size-14 -ml-2" /></li>
                <li><img src="assets/images/technology-images/ruby-logo.svg" alt="Ruby" className="size-6 -ml-2 mr-1" /></li>
                <li><img src="assets/images/technology-images/rails_logo.svg" alt="RubyOnRails" className="size-16" /></li>
                <li><img src="assets/images/technology-images/postgres-logo.svg" alt="Postgres" className="size-7" /></li>
                <li><img src="assets/images/technology-images/hotwire.svg" alt="Hotwire" className="size-16" /></li>
                <li><img src="assets/images/technology-images/html5-logo.svg" alt="Html5" className="size-9" /></li>
                <li><img src="assets/images/technology-images/css3-logo.svg" alt="CSS3" className="size-9" /></li>
                <li><img src="assets/images/technology-images/js.svg" alt="Javascript" className="size-7 ml-1" /></li>
                <li><img src="assets/images/technology-images/tailwindcss-logotype.svg" alt="TailwindCSS" className="size-24 -ml-1" /></li>
                <li><img src="assets/images/technology-images/daisyui-logotype.svg" alt="DaisyUI" className="size-20 -ml-2" /></li>
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li><img src="assets/images/technology-images/ec2.svg" alt="EC2" className="size-7 -ml-2" /></li>
                <li><img src="assets/images/technology-images/docker-logo.svg" alt="Docker" className="size-16" /></li>
                <li><img src="assets/images/technology-images/linux-logo.svg" alt="Linux" className="size-7 -ml-1" /></li>
                <li><img src="assets/images/technology-images/nginx-logo.svg" alt="Nginx" className="size-14 -ml-2" /></li>
                <li><img src="assets/images/technology-images/ruby-logo.svg" alt="Ruby" className="size-6 -ml-2 mr-1" /></li>
                <li><img src="assets/images/technology-images/rails_logo.svg" alt="RubyOnRails" className="size-16" /></li>
                <li><img src="assets/images/technology-images/postgres-logo.svg" alt="Postgres" className="size-7" /></li>
                <li><img src="assets/images/technology-images/hotwire.svg" alt="Hotwire" className="size-16" /></li>
                <li><img src="assets/images/technology-images/html5-logo.svg" alt="Html5" className="size-9" /></li>
                <li><img src="assets/images/technology-images/css3-logo.svg" alt="CSS3" className="size-9" /></li>
                <li><img src="assets/images/technology-images/js.svg" alt="Javascript" className="size-7 ml-1" /></li>
                <li><img src="assets/images/technology-images/tailwindcss-logotype.svg" alt="TailwindCSS" className="size-24 -ml-1" /></li>
                <li><img src="assets/images/technology-images/daisyui-logotype.svg" alt="DaisyUI" className="size-20 -ml-2" /></li>
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li><img src="assets/images/technology-images/ec2.svg" alt="EC2" className="size-7 -ml-2" /></li>
                <li><img src="assets/images/technology-images/docker-logo.svg" alt="Docker" className="size-16" /></li>
                <li><img src="assets/images/technology-images/linux-logo.svg" alt="Linux" className="size-7 -ml-1" /></li>
                <li><img src="assets/images/technology-images/nginx-logo.svg" alt="Nginx" className="size-14 -ml-2" /></li>
                <li><img src="assets/images/technology-images/ruby-logo.svg" alt="Ruby" className="size-6 -ml-2 mr-1" /></li>
                <li><img src="assets/images/technology-images/rails_logo.svg" alt="RubyOnRails" className="size-16" /></li>
                <li><img src="assets/images/technology-images/postgres-logo.svg" alt="Postgres" className="size-7" /></li>
                <li><img src="assets/images/technology-images/hotwire.svg" alt="Hotwire" className="size-16" /></li>
                <li><img src="assets/images/technology-images/html5-logo.svg" alt="Html5" className="size-9" /></li>
                <li><img src="assets/images/technology-images/css3-logo.svg" alt="CSS3" className="size-9" /></li>
                <li><img src="assets/images/technology-images/js.svg" alt="Javascript" className="size-7 ml-1" /></li>
                <li><img src="assets/images/technology-images/tailwindcss-logotype.svg" alt="TailwindCSS" className="size-24 -ml-1" /></li>
                <li><img src="assets/images/technology-images/daisyui-logotype.svg" alt="DaisyUI" className="size-20 -ml-2" /></li>
              </ul>
            </section>
          </div>
      
          {/* Intro copy and action button sections */}
          <hr className="xl:col-span-2 w-[70vw] sm:w-[80vw] mx-auto border-blue-100 mt-6 mb-[52px]"></hr>
          
          <div className="col-start-1 xl:col-start-2 xl:ml-0 max-w-[950px]">
            {/* Summary expereince stats section */}
            <section className="font-inter font-semibold text-sm mb-9 text-sky-800">
              <div className="flex justify-between gap-2">
                <div className="">
                  <div className="underline underline-offset-4 decoration-4 decoration-emerald-200">
                    <span className="text-sky-700 font-extrabold italic text-lg">11</span>
                    <span className="text-sky-700 font-black text-xs ">YRS</span>
                  </div>
                  <p className="my-1">Coding since <a href="https://makers.tech/learn/curriculum">Makers</a> bootcamp</p>
                </div>
                <div className="">
                  <div className="underline underline-offset-4 decoration-4 decoration-emerald-200">
                    <span className="text-sky-700 font-extrabold italic text-lg">2</span>
                    {/* <span className="text-sky-700 font-extrabold italic text-md">1⁄2</span> */}
                    <span className="text-sky-700 font-black text-xs">YRS</span>
                  </div>
                  <p className="my-1">Full time coding</p>
                </div>
                <div className="">
                  <div className="underline underline-offset-4 decoration-4 decoration-emerald-200">
                    <span className="text-sky-700 font-extrabold italic text-lg ">15</span>
                    <span className="text-sky-700 font-black text-xs">YRS</span>
                  </div>
                  <p className="my-1">Digital product mgmt</p>
                </div>
              </div>
            </section>
            
            {/* Intro copy section */}
            <section className="font-inter font-light text-lg text-gray-600">
              <ul className="">
                {/* <li className="mb-5 flex"> */}
                  {/* <img src="assets/images/bullet-arrow.svg" alt="bullet point" className=""> */}
                  {/* <p className="">
                    Bringing 20 years of business, people and product management experience to a second career
                    as a full stack web developer.
                  </p>
                </li> */}
                <li className="mb-3 flex text-base">
                  <img src="assets/images/bullet-arrow.svg" alt="bullet point" className="" />
                  <p className="ml-3">
                    I mainly write Javascript, Ruby, HTML & CSS, using React, Rails, Hotwire, and TailwindCSS.
                  </p>
                </li>
                <li className="mb-3 flex text-base">
                  <img src="assets/images/bullet-arrow.svg" alt="bullet point" className="" />
                  <p className="ml-3">
                    I'm also skilled in bash scripting, Docker, Linux, and AWS.
                  </p>
                </li>
                <li className="flex text-base">
                  <img src="assets/images/bullet-arrow.svg" alt="bullet point" className="" />
                  <p className="ml-3">
                    I'm always keen to learn new technologies.
                  </p>
                </li>
              </ul>
            </section>
          </div>


          {/* Buttons section */}
          <div className="col-start-1 xl:col-start-2 mx-auto sm:ml-auto xl:mx-0 mt-8 sm:-mt-8">
            <section className="flex flex-row gap-4 sm:gap-10 md:gap-10 items-end justify-normal" > {/*  gap-4 sm:gap-10 md:gap-14  */}
              <a href="https://github.com/jbk2" className="btn w-[132px] sm:w-[136px] bg-gradient-to-r-from-deep-blue-to-bright-teal hover:opacity-80 text-gray-200 hover:text-white">Github profile</a>
              <a href="mailto:james@bibble.com" className="btn w-[120px] sm:w-[136px] bg-teal-400 hover:bg-teal-400/80 text-gray-800">Contact me</a>
              <a href="#" className="btn w-[132px] sm:w-[136px] bg-gradient-to-r-from-bright-teal-to-deep-blue hover:opacity-80 text-gray-200">C.V.</a>
              {/* Terminal mock up section */}
              <div className="ml-auto hidden sm:inline-block bg-white border rounded-md mockup-code text-sm font-jetbrains">
                <pre data-prefix="$" className="font-jetbrains"><code>puts Dev.find_by(name: 'James Kemp').locations.map(&:city)</code></pre>
                <pre data-prefix=">" className="text-warning font-jetbrains"><code>London, England</code></pre>
                <pre data-prefix=">" className="text-success font-jetbrains"><code>Nice, France</code></pre>
              </div>
            </section>
          </div>
        
          {/* <hr className="xl:col-span-2 w-[70vw] sm:w-[80vw] mx-auto border-blue-100 md:mt-10 lg:mt-16 xl:mt-20 mt-8 mb-16"> */}
          <hr className="xl:col-span-2 w-[70vw] sm:w-[80vw] mx-auto border-blue-100 mt-[66px] mb-[52px]"></hr>  
        </div>
      </div>

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