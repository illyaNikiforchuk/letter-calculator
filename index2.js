let input = document.querySelector(".user-text");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.textContent = "calculate";
  if (input.value) {
    input.disabled = true;

    let letters = {};

    for (let letter of input.value) {
      if (!letters[letter]) {
        letters[letter] = 0;
      }
      letters[letter]++;
    }

    let ul = document.querySelector(".list");

    // Додавання кожного елемента списку окремо з анімацією
    for (let letter in letters) {
      let count = letters[letter];
      let interest = ((count / input.value.length) * 100).toFixed(2);
      let li = document.createElement("li");
      li.innerHTML = `${letter}: ${count} - ${interest}%`;

      ul.appendChild(li);

      // Анімація
      li.style.opacity = 0;
      let delay = 0;
      for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].style.transitionDelay = delay + "ms";
        delay += 9990;
        ul.children[i].style.opacity = 1;
      }
    }

    input.value = "";
    btn.textContent = "clear";
  } else {
    let ul = document.querySelector(".list");
    ul.innerHTML = "";
    input.disabled = false;
  }
});
