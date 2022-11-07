var prev = document.getElementById("prev");
var next = document.getElementById("next");
var div = document.getElementById("div");
var img = document.getElementById("img");

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let count = 0;

function nex() {
  count++;
  console.log(count);

  if (count == 1) {
    prev.classList.remove("display");
  }

  if (count == 3) {
    next.classList.add("display");
  }
  img.innerHTML = "";
  let text = `
  <img src="${images[count]}" class="container" />
  `;

  img.insertAdjacentHTML("beforeend", text);
}

function pre() {
  count--;
  if (count == 2) {
    next.classList.remove("display");
  }
  if (count == 0) {
    prev.classList.add("display");
  }
  img.innerHTML = "";
  let text = `
  <img src="${images[count]}" class="container" />
  `;

  img.insertAdjacentHTML("beforeend", text);

  console.log(count);
}
// function pre() {}
