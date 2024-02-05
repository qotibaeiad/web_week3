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
    const navBar = document.getElementById('gridid');
    const body = document.getElementById('bodyw');
    const grid = document.getElementById('grid');
    grid.style.backgroundColor = document.documentElement.classList.contains('dark') ? 'rgb(31,41,55)' : 'white';
    body.style.backgroundColor = document.documentElement.classList.contains('dark') ? 'rgb(31,41,55)' : 'white';
    navBar.style.backgroundColor = document.documentElement.classList.contains('dark') ? 'rgb(31,41,55)' : 'white';

    // Get the current dark mode state
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Select all elements with the class "title"
    const titleElements = document.querySelectorAll('.title');

    // Change color of all elements with the class "title" based on dark mode state
    titleElements.forEach(titleElement => {
      titleElement.style.color = isDarkMode ? 'white' : 'black';
    });
  });

  const dropdownButton = document.getElementById("dropdown-button");
  const dropdown = document.getElementById("dropdown");

  dropdownButton.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && event.target !== dropdownButton) {
      dropdown.classList.add("hidden");
    }
  });

  const dropdownItems = document.querySelectorAll("dropdown");
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      dropdown.classList.add("dropdown");
    });
  });
});
