const container = document.querySelector(".container");

const clear = document.querySelector(".clear");
const resize = document.querySelector(".resize");

let size = 23;

//helper function for creating grid elements
function boxCreater() {
  if (size > 15 && size < 101) {
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("box");
      let h = 400 / size;
      div.setAttribute("style", `height: ${h}px; width: ${h}px`);
      container.append(div);
    }
  } else {
    alert("Invalid size! should be between 16 to 100");
  }
}

//grid box number should be between 16 and 100

boxCreater();

//dont put this query selector on top because it is not created on top (dynamically created)
let boxes = document.querySelectorAll(".box");

//button for clearing and resizing grid

clear.addEventListener("click", () => {
  boxes.forEach((box) => {
    //box.classList.remove("blue");
    box.style.background = "rgb(255,255,255)";
  });
});

//resizing
resize.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.remove();
  });
  size = parseInt(prompt("Enter the size of grid"));
  boxCreater();
  boxes = document.querySelectorAll(".box");
  boxEventListener();
});

//event listener for mouseover, which triggers background color change
function boxEventListener() {
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      // box.classList.add("blue");
      [r, g, b] = colorGenerator();
      box.style.background = `rgb(${r},${g},${b})`;
    });
  });
}

boxEventListener();

function colorGenerator() {
  let r, g, b;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

colorGenerator();

