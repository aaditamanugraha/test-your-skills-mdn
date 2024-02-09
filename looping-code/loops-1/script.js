const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const list = document.createElement("ul");

// Add your code here
const startBtn = document.querySelector("button");
const preview = document.querySelector(".preview");

startBtn.addEventListener("click", () => {
  for (let i = 0; i < myArray.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = myArray[i];
    list.appendChild(listItem);
    preview.appendChild(list);
  }
});
// Don't edit the code below here!

const section = document.querySelector("section");
section.appendChild(list);
