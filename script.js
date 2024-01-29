// script.js

document.addEventListener('DOMContentLoaded', function () {
  const drawerToggle = document.getElementById('drawerToggle');
  const drawerClose = document.getElementById('drawerClose');
  const drawer = document.getElementById('drawer');
  const darkModeToggle = document.getElementById('darkModeToggle');

  drawerToggle.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  drawerClose.addEventListener('click', () => {
    drawer.classList.add('hidden');
  });

  darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });

  const myList = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const gridContainer = document.getElementById("gridContainer");

  const ulElement = document.createElement("ul");
  ulElement.classList.add("grid", "grid-cols-2", "gap-4");

  myList.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.classList.add("bg-gray-300", "p-4");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
  });
  gridContainer.appendChild(ulElement);
});
