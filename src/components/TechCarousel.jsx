import { useEffect, useState } from "react";
import { getDataTheme } from "../utils/theme";
const FILE_IMPORTS = import.meta.glob('/src/assets/images/technology-images/*.svg', {
  eager: true,
  query: '?url',
  import: 'default', 
});

export default function TechCarousel() {
  const dataTheme = getDataTheme();
  const [theme, setTheme] = useState(dataTheme);
  
  const LOGOS_META = [
    { fileName: 'ec2', alt: 'ec2', className: "size-7 -ml-3"},
    { fileName: 'docker', alt: 'docker logo', className: "size-18 -ml-4"},
    { fileName: 'linux', alt: 'linux logo', className: "size-7 ml-2"},
    // { fileName: 'nginx', alt: 'nginx logo', className: "size-10"},
    { fileName: 'ruby', alt: 'ruby logo', className: "size-6 ml-1"},
    { fileName: 'rails', alt: 'rails logo', className: "size-14 -ml-2"},
    { fileName: theme == 'dark' ? 'hotwire-dark' : 'hotwire-light',
      alt: 'hotwire logo', className: "size-14 mt-2 mx-1"},
    { fileName: 'javascript', alt: 'javascript logo', className: "size-7.5 ml-4"},
    { fileName: 'react', alt: 'react logo', className: "size-8 ml-1"},
    { fileName: 'vite', alt: 'vite logo', className: "size-7"},
    // { fileName: 'postgres', alt: 'postgres logo', className: "size-10"},
    // { fileName: theme == 'dark' ? 'html5-dark' : 'html5-light',
    //   alt: 'html5 logo', className: "size-8"},
    // { fileName: theme == 'dark' ? 'css3-dark' : 'css3-light',
    //   alt: 'css3 logo', className: "size-8"},
    { fileName: 'tailwindcss', alt: 'tailwindcss logo', className: "size-7.5 -mx-3"},
    // { fileName: 'daisyui', alt: 'daisyui logo', className: "size-10"},
  ]
  const logos = LOGOS_META.map(({fileName, ...rest}) => ({
    src: FILE_IMPORTS[`/src/assets/images/technology-images/${fileName}.svg`],
    ...rest,
  }));

  useEffect(() => {
    const onThemeChangeEvent = (e) => setTheme(e.detail)
    window.addEventListener('themeChange', onThemeChangeEvent);
    
    return() => window.removeEventListener('themeChange', onThemeChangeEvent);
  }, [])

  return(
    <div className="page-width overflow-x-hidden my-6 sm:my-14
      [mask-image:_linear-gradient(to_right,transparent_3%,_white_10%,_white_90%,transparent_97%)]">
      <div className="flex w-fit items-center animate-infinite-scroll opacity-90">
        {logos.map((logo, index) => (
          <div key={index} className="w-20 sm:w-30">
            <img src={logo.src} alt={logo.alt} className={logo.className + ' max-w-none'}/>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`2nd+${index}`} className="w-20 sm:w-30">
            <img src={logo.src} alt={logo.alt} className={logo.className + ' max-w-none'}/>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`3rd+${index}`} className="w-20 sm:w-30">
            <img src={logo.src} alt={logo.alt} className={logo.className + ' max-w-none'}/>
          </div>
        ))}
      </div>
    </div>
  )
}