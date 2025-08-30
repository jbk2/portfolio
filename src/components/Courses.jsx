export default function Courses() {

  return(
      <div className='my-18 page-width'>
        <hr className="mx-auto border-[var(--color-border-primary)]"></hr>
        <div className="px-4 sm:px-10 lg:pl-[88px] xl:pl-40 my-6">
          <h2 className="text-lg self-center font-extrabold font-inter tracking-wider text-blue-900
          underline underline-offset-4 decoration-4 decoration-emerald-200 ">COURSES / TURORIALS / BOOKS</h2>
        </div>
        <section className="flex justify-center gap-20">
          <h2>Studied:</h2>
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
          </ul>
          <ul>
            <li>Hotwire</li>
            <li><a href="https://www.learnui.design/">Learn UI</a></li>
            <li>Many Linda </li>
            <li>Attend conferences - Brighton Ruby</li>
            <li>Add Socials </li>
          </ul>
        </section>
      </div>
  )
}