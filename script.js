const makeChangesBtn = document.querySelector("#make-changes");
const doneBtn = document.querySelector("#done");
const makeChangesPass = document.querySelector(".make-changes-pass");

const noDisplay = document.querySelector(".no-display");
noDisplay.style.display = "none";

makeChangesBtn.addEventListener("click", () => {
  makeChangesPass.style.display = "block";
  makeChangesBtn.style.display = "none";
});
doneBtn.addEventListener("click", () => {
  makeChangesBtn.style.display = "block";
  noDisplay.style.display = "none";
  doneBtn.style.display = "none";
  container.style.marginTop = "70px";
});
let password = "0000";

const notVisible = document.querySelector(".not-visible");
const container = document.querySelector(".container");

makeChangesPass.addEventListener("keypress", function (event) {
  if (makeChangesPass.value === password && event.keyCode === 13) {
    everyThing();
    noDisplay.style.display = "block";
    doneBtn.style.display = "block";
    makeChangesBtn.style.display = "none";
    makeChangesPass.style.display = "none";
    container.style.marginTop = "20px";
    makeChangesPass.value = "";
  } else if (makeChangesPass.value !== password && event.keyCode === 13) {
    makeChangesPass.value = "";
    makeChangesPass.style.display = "none";
    makeChangesBtn.style.display = "block";
  }
});

function everyThing() {
  const input = document.querySelector(".input-input");
  const hr_input = document.querySelector(".hr_input");
  const locationInput = document.querySelector(".location_input");
  const inputBtn = document.querySelector(".input-btn");

  inputBtn.addEventListener("click", function () {
    if (input.value.length > 0 && input.value.length < 9) {
      addCorse();
      hr_input.value = "";
      input.value = "";
      locationInput.value = "";
    } else {
      hr_input.value = "";
      input.value = "";
      locationInput.value = "";
    }
  });

  const Trash = document.querySelector(".trash");
  const Lectures = document.querySelectorAll(".lecture");
  const all_dragCont = document.querySelectorAll(".drag-cont");
  let draggableTodo = null;

  Lectures.forEach((Lecture) => {
    Lecture.addEventListener("dragstart", dragStart);
    Lecture.addEventListener("dragend", dragEnd);
  });

  function dragStart() {
    draggableTodo = this;
  }

  function dragEnd() {
    draggableTodo = null;
  }

  all_dragCont.forEach((dragCont) => {
    dragCont.addEventListener("dragover", dragOver);
    dragCont.addEventListener("dragenter", dragEnter);
    dragCont.addEventListener("dragleave", dragLeave);
    dragCont.addEventListener("drop", dragDrop);
  });

  function dragEnter() {
    this.style.background = "rgb(123, 123, 123)";
  }
  function dragOver(e) {
    e.preventDefault();
  }

  function dragLeave() {
    this.style.background = "none";
    Trash.style.background = "#c6c6c6";
  }

  function dragDrop() {
    this.appendChild(draggableTodo);
    this.style.background = "none";
    Trash.style.background = "#c6c6c6";
  }

  function addCorse() {
    const createDiv = document.createElement("div");
    const createP = document.createElement("p");
    const txt = document.createTextNode(input.value);
    const txt2 = document.createTextNode(locationInput.value);

    createDiv.appendChild(txt);
    createP.appendChild(txt2);
    createDiv.classList.add("lecture");
    createP.classList.add("location");
    createDiv.classList.add("card");
    createDiv.setAttribute("draggable", true);
    createDiv.appendChild(createP);
    const box = document.querySelector(".box");

    if (hr_input.value === "1" && hr_input.value > 0 && hr_input.value < 4) {
      createDiv.classList.add("box1");
      box.appendChild(createDiv);
    } else if (
      hr_input.value === "2" &&
      hr_input.value > 0 &&
      hr_input.value < 4
    ) {
      createDiv.classList.add("box2");
      box.appendChild(createDiv);
    } else if (
      hr_input.value === "3" &&
      hr_input.value > 0 &&
      hr_input.value < 4
    ) {
      createDiv.classList.add("box3");
      box.appendChild(createDiv);
    } else {
      hr_input.value = "";
      input.value = "";
      locationInput.value = "";
    }

    createDiv.addEventListener("dragstart", dragStart);
    createDiv.addEventListener("dragend", dragEnd);
  }
}
