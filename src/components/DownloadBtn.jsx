export default function DownloadBtn({fileName, format}) {
  return(
    <a href={`/CV/${fileName}.${format}`} className="btn w-[120px] sm:w-[136px] rounded-lg border-none
      bg-[image:var(--btn-gradient-primary-lighttodark)] text-[var(--btn-light-text)]
      hover:opacity-90 hover:scale-99" target="_blank" rel="noopener" title="Download My C.V.">
      C.V.
    </a>
  )
}