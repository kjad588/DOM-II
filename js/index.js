// Your code goes here

const header = document.querySelector('.logo-heading');

header.addEventListener('mouseover', (event) => {
    event.target.style.color = "blue";
});

const bus = document.querySelector('.bus');

bus.addEventListener('wheel', zoom)

