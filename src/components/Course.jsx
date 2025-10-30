export default function Course({key, title, progress, image, link, description}) {

  return(
    <div key={key} className="card w-70 h-80 shadow-lg bg-[var(--color-surface-card)]
      border border-[var(--color-border-primary)]">
      <figure className="w-34 overflow-hidden mx-auto rounded-none">
        <a href={link} target="_blank" rel="noopener">
          <img src={image}
            alt={title}
            className="object-cover object-center"/>
        </a>
      </figure>
      <div className="card-body pt-4">
        <h2 className="card-title text-[var(--color-text-header-secondary)]
        [html[data-theme=dark]_&]:text-[var(--color-text-header-primary)]">{title}</h2>
        <p className="text-[var(--color-text-secondary)] text-sm font-light whitespace-pre-line
          line-clamp-4 hover:line-clamp-none hover:max-h-24 hover:overflow-y-auto">
          {description}
        </p>
      </div>
      <progress className="progress h-[7px] text-[var(--color-decoration-emerald)]/40 [--radius-box:0]" value={progress} max="100"></progress>
    </div>
  )
}