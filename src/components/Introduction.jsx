export default function Introduction() {
  return(
    <div className="flex justify-center px-4 sm:px-10 mt-20">
      {/* Intro copy and action button sections */}
      {/* <hr className="xl:col-span-2 w-[70vw] sm:w-[80vw] mx-auto border-blue-100 mt-6 mb-[52px]"></hr> */}
      
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
      {/* <hr className="xl:col-span-2 w-[70vw] sm:w-[80vw] mx-auto border-blue-100 mt-[66px] mb-[52px]"></hr>   */}
    </div>
  )
}