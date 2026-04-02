import DownloadBtn from "./DownloadBtn"
import { BulletArrow } from "./icons/Icons"
import Terminal from "./Terminal"

export default function Introduction() {  
  return(
    <div className="page-width px-4 sm:px-10 md:my-14">
      <hr className="section-hr"></hr>
      
      {/* Summary stats and intro bullet sections */}
      <div className="xl:ml-0 mt-6">
        {/* Summary stats section */}
        <section className="font-semibold text-sm mb-4 md:mb-9 max-w-screen">
          <div className="flex justify-between md:justify-around gap-4 sm:gap-8 p-4 sm:p-6
            text-[var(--color-text-header-secondary)]">
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)]">
                <span className="font-extrabold italic text-lg">11</span>
                <span className="font-black text-xs">&#32;YRS</span>
              </div>
              <p className="my-1 w-32 md:w-fit">Coding&#32;since&#32;
                <a href="https://makers.tech/learn/curriculum">Makers</a>
                &#32;bootcamp
              </p>
            </div>
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)]">
                <span className="font-extrabold italic text-lg">3</span>
                <span className="font-black text-xs">&#32;YRS</span>
              </div>
              <p className="my-1 w-16 md:w-fit">Full time coding</p>
            </div>
            <div className="flex flex-col md:items-center">
              <div className="underline underline-offset-4 decoration-4 decoration-[var(--color-decoration-emerald)]">
                <span className="font-extrabold italic text-lg ">15</span>
                <span className="font-black text-xs">&#32;YRS</span>
              </div>
              <p className="my-1 w-32 md:w-fit">Digital product mgmt</p>
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
              <BulletArrow height={17} width={17} />
              <p className="ml-3">
                I write&#32;
                <span className="text-emphasis">Javascript</span>,&#32;
                <span className="text-emphasis">TypeScript</span>&#32;and&#32;
                <span className="text-emphasis">Ruby</span>,&#32;using&#32;
                <span className="text-emphasis">React</span>,&#32; 
                <span className="text-emphasis">Rails</span>&#32;&&#32; 
                <span className="text-emphasis">Hotwire</span>.
              </p>
            </li>
            <li className="mb-3 flex items-center text-base">
            <BulletArrow height={17} width={17} />
              <p className="ml-3">
                I manage with&#32;
                <span className="text-emphasis">Bash</span>&#32;,&#32;
                <span className="text-emphasis">Linux</span>&#32;,&#32;
                <span className="text-emphasis">Docker</span>&#32;&&#32;
                <span className="text-emphasis">AWS</span>, amongst others.
              </p>
            </li>
            <li className="flex items-center text-base">
            <BulletArrow height={17} width={17} />
              <p className="ml-3">
                I have a career's worth of client, product and management experience.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Buttons & terminal mockup section */}
      <div className="mt-8">
        <section className="flex w-full gap-3 sm:gap-14 justify-center xl:items-end xl:-mt-18" > {/*  gap-4 sm:gap-10 md:gap-14  */}
          <a href="https://github.com/jbk2" className="btn btn-glow-transition btn-glow-gradient w-[110px] sm:w-[136px] rounded-lg border-none
            bg-[image:var(--btn-gradient-primary-darktolight)] text-[var(--btn-light-text)] hover:opacity-90
            hover:scale-99 text-nowrap" target="_blank" rel="noopener" title="My Github Profile">
            Github profile
          </a>
          <a href="mailto:james@bibble.com" className="btn btn-glow-transition btn-glow-teal w-[105px] sm:w-[136px] rounded-lg border-none
            bg-[var(--color-btn-primary)] text-[var(--btn-dark-text)] hover:opacity-90 hover:scale-99 text-nowrap"
            title="Email Me">
            Contact me
          </a>
          <DownloadBtn fileName="CV-JBK-02.26" format="pdf" />
          {/* Terminal mock up section */}
          <Terminal />
        </section>
      </div>
      <hr className="section-hr mt-16 sm:mt-20"></hr>
    </div>
  )
}