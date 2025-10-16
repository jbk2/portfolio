import { textIterator } from '../utils/textIterator';
import { useEffect, useRef } from "react";
import NavLinks from './NavLinks';

export default function HeroSection() {
  const words = ["ruby", "rails", "javascript", "react", "hotwire"]; // Words to cycle through
  let ref = useRef(null);
  let waveEmojiRef = useRef(null);

  function rerunWaveAnimation() {
    const el = waveEmojiRef.current;
    if (!el) return;
    el.classList.remove('animate-rotate-wave', 'delay-1');
    void el.offsetWidth;
    el.classList.add('animate-rotate-wave');
  }

  useEffect(() => {
    if(!ref.current) return;
    const stop = textIterator(ref.current, words);
    return () => stop();
  }, []) 

  return(
    <div className="page-width mt-10
      grid grid-cols-1 xl:grid-cols-[2fr_minmax(400px,max-content)_1fr]">
      {/* Col-1 */}
      <div className="hidden xl:inline-block col-start-1 text-right self-end mr-3">
        <p className="text-sm text-[var(--color-text-secondary)] font-jetbrains pr-4 pb-1">
          &lt;h1 data-lang='
            <span ref={ref}>ruby</span>
          '&gt;
        </p>
      </div>
      
      
      {/* Col-2 */}
      <div className="col-start-1 xl:col-start-2 mx-auto xl:ml-0 md:min-w-[800px] px-4">
        <h1 className="text-[3.15rem] sm:text-6xl md:text-7xl font-black
          text-[var(--color-text-header-primary)] sm:mb-6 md:mb-8 lg:mb-10">I'm 
          <div className="inline-block bg-clip-text text-transparent hero-header-gradient">
            &nbsp;James
            <span className="hidden sm:inline-block">&nbsp;Kemp</span>
          </div>
          <span className="text-3xl sm:text-4xl ">,</span>
          <div onClick={rerunWaveAnimation}  title="Click me to say hi"
            className='inline hover:cursor-pointer'>
            <span ref={waveEmojiRef} className="relative hidden md:inline-block text-3xl animate-rotate-wave
              delay-1 ml-5 lg:ml-8 z-10">👋🏻</span>
            <span className="relative hidden md:inline-block text-5xl -ml-3 z-20">👨🏻‍💻</span>
          </div>
        </h1>

        <div className="flex flex-wrap">
          <h1 className="inline-block sm:hidden text-[3.15rem]/12 md:text-7xl font-extrabold
            text-[var(--color-text-header-primary)] sm:whitespace-nowrap">a web developer
            <span className="text-4xl -ml-1">.</span>
          </h1>
          <span className="whitespace-nowrap">
            <h1 className="hidden sm:inline-block text-6xl md:text-7xl font-extrabold
              text-[var(--color-text-header-primary)]">Full stack developer
              <span className="text-5xl -ml-1">.</span>
            </h1>
            <p className="hidden xl:inline-block text-sm text-[var(--color-text-secondary)]
              font-jetbrains ml-6">&lt;/h1&gt;</p>
          </span>
        </div>
      </div>

      {/* Col-3 */}
      <div className="absolute right-1 top-2 md:right-3 md:top-3 xl:right-8 xl:top-6">
        <NavLinks />
      </div>
    </div>
  )
}