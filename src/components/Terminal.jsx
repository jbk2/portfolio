export default function Terminal() {

  return(
    <div className="mockup-code hidden xl:inline-block ml-24 mr-6 -mb-3 rounded-md text-sm
      bg-[var(--color-foreground-light)] font-jetbrains border
      border-[var(--color-border-primary)]/60 [html[data-theme=dark]_&]:border-none">
      <pre data-prefix="$" className="font-jetbrains text-[var(--color-text-tertiary)]">
        <code>puts Dev.find_by(name: 'James Kemp').locations.map(&:city)</code></pre>
      <pre data-prefix=">" className="text-warning font-jetbrains"><code>London, England</code></pre>
      <pre data-prefix=">" className="text-[var(--color-teal-dark)] font-jetbrains"><code>Nice, France</code></pre>
    </div>
  )
}