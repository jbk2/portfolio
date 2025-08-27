export function textIterator(textEl, textArray) {
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
    
    let j = 0;
    intervalId = setInterval(() => {
      if (cancelled) return clearTimers();
      if(j < word.length) {
        textEl.textContent += word[j++]
      } else {
        clearInterval(intervalId);
        textEl.classList.remove('typing');
        index += 1;
        timeoutId = setTimeout(typeNextLetter, 1400);
      }
    }, 100);
  };
  
  typeNextLetter();

  return () => { cancelled = true; clearTimers() };
}