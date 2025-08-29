export default function Introduction() {
  
  return(
    <div className="page-width px-4 sm:px-10 my-14">
      <hr className="mx-auto border-[var(--color-border-primary)]"></hr>
      
      {/* Summary stats and intro bullet sections */}
      <div className="xl:ml-0 my-14">
        {/* Summary stats section */}
        <section className="font-inter font-semibold text-sm mb-9 text-[var(--color-text-header-primary)]">
          <div className="flex justify-between md:justify-around gap-8 p-6">
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)]">
                <span className="font-extrabold italic text-lg">11</span>
                <span className="font-black text-xs">&nbsp;YRS</span>
              </div>
              <p className="my-1 w-32 sm:w-fit">Coding since <a href="https://makers.tech/learn/curriculum">Makers</a> bootcamp</p>
            </div>
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 text-[--color-text-header-primary] decoration-[var(--color-decoration-emerald)]">
                <span className="font-extrabold italic text-lg">2</span>
                <span className="font-extrabold italic text-sm diagonal-fractions">1/2</span>
                <span className="font-black text-xs">&nbsp;YRS</span>
              </div>
              <p className="my-1">Full time coding</p>
            </div>
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)]">
                <span className="font-extrabold italic text-lg ">15</span>
                <span className="font-black text-xs">&nbsp;YRS</span>
              </div>
              <p className="my-1">Digital product mgmt</p>
            </div>
          </div>
        </section>

        {/* Intro bullet section */}
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
              <img src="src/assets/images/bullet-arrow.svg" alt="bullet point" className="" />
              <p className="ml-3">
                I write Javascript & Ruby, in React, Rails & Hotwire (+HTML & CSS of course).
              </p>
            </li>
            <li className="mb-3 flex text-base">
              <img src="src/assets/images/bullet-arrow.svg" alt="bullet point" className="" />
              <p className="ml-3">
                I'm also comfortable with bash, Docker, Linux, and AWS.
              </p>
            </li>
            <li className="flex text-base">
              <img src="src/assets/images/bullet-arrow.svg" alt="bullet point" className="" />
              <p className="ml-3">
                I'm always keen to learn new technologies.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Buttons & mockup code section */}
      <div className="mt-8">
        <section className="flex w-full gap-4 sm:gap-14 justify-center xl:items-end xl:-mt-18" > {/*  gap-4 sm:gap-10 md:gap-14  */}
          <a href="https://github.com/jbk2" className="btn w-[132px] sm:w-[136px] rounded-lg
            bg-gradient-to-r-from-deep-blue-to-bright-teal hover:opacity-80 text-[var(--color-btn-text-light)] hover:text-white">
            Github profile
          </a>
          <a href="mailto:james@bibble.com" className="btn w-[120px] sm:w-[136px] rounded-lg
            bg-[var(--color-primary-light)] hover:bg-teal-400/80 text-[var(--color-btn-text-dark)]">
            Contact me
          </a>
          <a href="#" className="btn w-[132px] sm:w-[136px] rounded-lg
            bg-gradient-to-r-from-bright-teal-to-deep-blue hover:opacity-80 text-[var(--color-btn-text-light)]">
            C.V.
          </a>
          {/* Terminal mock up section */}
          <div className="mockup-code hidden xl:inline-block ml-24 mr-6 -mb-3 bg-white border rounded-md text-sm font-jetbrains">
            <pre data-prefix="$" className="font-jetbrains"><code>puts Dev.find_by(name: 'James Kemp').locations.map(&:city)</code></pre>
            <pre data-prefix=">" className="text-[var(--color-teal-dark)] font-jetbrains"><code>London, England</code></pre>
            <pre data-prefix=">" className="text-warning font-jetbrains"><code>Nice, France</code></pre>
          </div>
        </section>
      </div>
      <hr className="mx-auto border-[var(--color-border-primary)] my-14"></hr>
    </div>
  )
}