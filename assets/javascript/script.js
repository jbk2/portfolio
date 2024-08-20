document.addEventListener("DOMContentLoaded", function() {
    const words = ["rails", "javascript", "hotwire", "tailwindcss", "ruby"]; // Words to cycle through
    let i = 0;
    const dynamicClassText = document.getElementById('dynamic-class-text');

    function updateText() {
      if (i < words.length) {
        dynamicClassText.innerHTML = '';
        dynamicClassText.classList.add('typing');
        let word = words[i++ % words.length];
        let j = 0;
        const interval = setInterval(() => {
          if (j < word.length) {
              dynamicClassText.innerHTML += word[j++];
          } else {
            clearInterval(interval);
            dynamicClassText.classList.remove('typing');
            if (i < words.length) {
              setTimeout(updateText, 800);
            }
          }
        }, 90);
      }
    }

    setTimeout(updateText, 1200);
});