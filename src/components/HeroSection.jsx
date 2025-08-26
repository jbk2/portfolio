export default function HeroSection() {

  return(
    <div className="grid grid-cols-1 xl:grid-cols-[220px_minmax(400px,max-content)]">
      
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

        {/* Col-3 */}
        <div>
        </div>
      
      </div>
    </div>
  )
}