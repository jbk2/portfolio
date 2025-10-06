import { useRef, useEffect, useState } from 'react';
import { storeSessionThemePreference, getDataTheme, applyDataTheme } from '../utils/theme';
import { BlogIconLight, BlogIconDark, LinkedInIcon, GithubIcon, XIcon,
  SunIcon, MoonIcon } from './icons/Icons';

export default function NavLinks() {
  const themeToggle = useRef(null)
  const [ dataTheme, setDataTheme ] = useState(() => getDataTheme());

  function handleThemeToggle(e) {
    const chosenTheme = e.target.checked ? 'dark' : 'light';
    applyDataTheme(chosenTheme);
    storeSessionThemePreference(chosenTheme);
  }
  
  useEffect(() => {
    const handleDataThemeChange = (e) => setDataTheme(e.detail);

    window.addEventListener('themeChange', handleDataThemeChange);
    return () => window.removeEventListener('themeChange', handleDataThemeChange);
  }, []);

  return(
    <ul className="flex md:gap-1 xl:gap-2 justify-end items-center">
      <div className='flex items-center mr-2'>
        <label className="toggle border-[var(--color-socials)] hover:border-[hsl(from_var(--color-socials)_h_s_calc(l*0.85))]
          text-[var(--color-socials)] hover:text-[hsl(from_var(--color-socials)_h_s_calc(l*0.85))]">
          <input ref={themeToggle} type="checkbox" value="dark" className="theme-controller"
            checked={dataTheme === 'dark'} onChange={handleThemeToggle}/>
          <SunIcon />
          <MoonIcon />
        </label>
      </div>
      <a href="https://www.linkedin.com/in/jamesbkemp" target="_blank" rel="noopener" title="My LinkedIn Profile">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/jbk2" target="_blank" rel="noopener" title="My GitHub Profile">
        <GithubIcon />
      </a>
      <a href="https://www.x.com/jbkemp" target="_blank" rel="noopener" title="My X Profile">
        <XIcon />
      </a>
      <a href="https://www.dev.to/jbk2" target="_blank" rel="noopener" title="My Blog Link">
        { dataTheme == 'dark' ? <BlogIconDark /> :  <BlogIconLight /> }
      </a>
    </ul>
  )
}