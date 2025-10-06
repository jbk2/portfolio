export default function Introduction() {
  
  return(
    <div className="page-width px-4 sm:px-10 my-14">
      <hr className="section-hr"></hr>
      
      {/* Summary stats and intro bullet sections */}
      <div className="xl:ml-0 mt-6">
        {/* Summary stats section */}
        <section className="font-semibold text-sm mb-9">
          <div className="flex justify-between md:justify-around gap-8 p-6
            text-[var(--color-text-header-secondary)]">
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)]">
                <span className="font-extrabold italic text-lg">11</span>
                <span className="font-black text-xs">&nbsp;YRS</span>
              </div>
              <p className="my-1 w-32 sm:w-fit">Coding since
                <a href="https://makers.tech/learn/curriculum">&nbsp;Makers</a>
                &nbsp;bootcamp
              </p>
            </div>
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)]">
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
        <section className="font-light text-lg text-[var(--color-text-secondary)]">
          <ul className="">
            {/* <li className="mb-5 flex"> */}
              {/* <img src="assets/images/bullet-arrow.svg" alt="bullet point" className=""> */}
              {/* <p className="">
                Bringing 20 years of business, people and product management experience to a second career
                as a full stack web developer.
              </p>
            </li> */}
            <li className="mb-3 flex items-center text-base">
              <svg className='' width="17px" height="17px" viewBox="0 -4 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Vivid-Icons" transform="translate(-515.000000, -651.000000)">
                    <g id="Icons" transform="translate(37.000000, 169.000000)">
                      <g id="arrow-right" transform="translate(468.000000, 468.000000)">
                        <g transform="translate(10.000000, 14.000000)" id="Shape">
                          <polygon fill="var(--color-decoration-emerald)" points="0 12 20 12 15 17 18 20 28 10 18 0 15 3 20 8 0 8"></polygon>
                          <polygon fill="hsl(224.86 67% 33%)" points="8 8 8 12 0 12 0 8"></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="ml-3">
                I write Javascript & Ruby, in React, Rails & Hotwire (+HTML & CSS of course).
              </p>
            </li>
            <li className="mb-3 flex items-center text-base">
              <svg className='' width="17px" height="17px" viewBox="0 -4 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Vivid-Icons" transform="translate(-515.000000, -651.000000)">
                    <g id="Icons" transform="translate(37.000000, 169.000000)">
                      <g id="arrow-right" transform="translate(468.000000, 468.000000)">
                        <g transform="translate(10.000000, 14.000000)" id="Shape">
                          <polygon fill="var(--color-decoration-emerald)" points="0 12 20 12 15 17 18 20 28 10 18 0 15 3 20 8 0 8"></polygon>
                          <polygon fill="hsl(224.86 67% 33%)" points="8 8 8 12 0 12 0 8"></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="ml-3">
                I'm also comfortable with bash, Docker, Linux, and AWS.
              </p>
            </li>
            <li className="flex items-center text-base">
              <svg className='' width="17px" height="17px" viewBox="0 -4 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Vivid-Icons" transform="translate(-515.000000, -651.000000)">
                    <g id="Icons" transform="translate(37.000000, 169.000000)">
                      <g id="arrow-right" transform="translate(468.000000, 468.000000)">
                        <g transform="translate(10.000000, 14.000000)" id="Shape">
                          <polygon fill="var(--color-decoration-emerald)" points="0 12 20 12 15 17 18 20 28 10 18 0 15 3 20 8 0 8"></polygon>
                          <polygon fill="hsl(224.86 67% 33%)" points="8 8 8 12 0 12 0 8"></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="ml-3">
                I'm always keen to learn new technologies.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Buttons & terminal mockup section */}
      <div className="mt-8">
        <section className="flex w-full gap-4 sm:gap-14 justify-center xl:items-end xl:-mt-18" > {/*  gap-4 sm:gap-10 md:gap-14  */}
          <a href="https://github.com/jbk2" className="btn w-[120px] sm:w-[136px] rounded-lg border-none
            bg-[image:var(--btn-gradient-primary-darktolight)] text-[var(--btn-light-text)] hover:opacity-90
            hover:scale-99" title="My Github Profile">
            Github profile
          </a>
          <a href="mailto:james@bibble.com" className="btn w-[120px] sm:w-[136px] rounded-lg border-none
            bg-[var(--color-btn-primary)] text-[var(--btn-dark-text)] hover:opacity-90 hover:scale-99"
            title="Email Me">
            Contact me
          </a>
          <a href="#" className="btn w-[120px] sm:w-[136px] rounded-lg border-none
            bg-[image:var(--btn-gradient-primary-lighttodark)] text-[var(--btn-light-text)]
            hover:opacity-90 hover:scale-99" title="Download My C.V.">
            C.V.
          </a>
          {/* Terminal mock up section */}
          <div className="mockup-code hidden xl:inline-block ml-24 mr-6 -mb-3 rounded-md text-sm
            bg-[var(--color-foreground-light)] font-jetbrains border
            border-[var(--color-border-primary)]/60 [html[data-theme=dark]_&]:border-none">
            <pre data-prefix="$" className="font-jetbrains text-[var(--color-text-tertiary)]">
              <code>puts Dev.find_by(name: 'James Kemp').locations.map(&:city)</code></pre>
            <pre data-prefix=">" className="text-[var(--color-teal-dark)] font-jetbrains"><code>London, England.</code></pre>
            <pre data-prefix=">" className="text-warning font-jetbrains"><code>Nice, France.</code></pre>
          </div>
        </section>
      </div>
      <hr className="section-hr mt-20"></hr>
    </div>
  )
}