export function textIterator(textEl, textArray,
  {letterDelay = 100, wordDelay = 900, cycleDelay = 2000} = {}
  ) {
  let index = 0;
  let intervalId = null;
  let timeoutId = null;
  let cancelled = false;

  const clearTimers = () => {
    if (intervalId) clearInterval(intervalId);
    if (timeoutId) clearTimeout(timeoutId);
    intervalId = null;
    timeoutId = null;
  };

  const typeNextLetter = () => {
    const word = textArray[index % textArray.length];
    textEl.textContent = '';
    textEl.classList.add('typing');
    
    let letterIndex = 0;
    intervalId = setInterval(() => {
      if (cancelled) return clearTimers();
      if( letterIndex < word.length) {
        textEl.textContent += word[letterIndex++]
      } else {
        clearInterval(intervalId);
        textEl.classList.remove('typing');
        index += 1;
        const completedCycle = index % textArray.length === 0;
        const delay = completedCycle ? cycleDelay : wordDelay ;
        timeoutId = setTimeout(typeNextLetter, delay);
      }
    }, letterDelay);
  };
  
  typeNextLetter();

  return () => { cancelled = true; clearTimers() };
}