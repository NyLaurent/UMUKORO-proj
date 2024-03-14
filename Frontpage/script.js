// const banner = document.getElementsByClassName('banner')[0];
// const blocks = document.getElementsByClassName('blocks');

// for (var i = 1; i < 400; i++) {
//   banner.innerHTML += `
//     <div class='blocks'></div>`;
//     const duration= Math.random()*5;
//     blocks[i].style.animationDuration =  duration+'s';
//     blocks[i].style.animationDelay = duration+'s';
// }

const banner = document.getElementsByClassName("banner")[0];

for (var i = 1; i < 400; i++) {
  banner.innerHTML += `<div class='blocks'></div>`;
}

// Re-select the elements with the class "blocks" after adding them dynamically
const blocks = document.getElementsByClassName("blocks");

for (var i = 0; i < blocks.length; i++) {
  const duration = Math.random() * 5;
  blocks[i].style.animationDuration = 2 + duration + "s";
  blocks[i].style.animationDelay = duration + "s";
}
 
const section = document.querySelector('section');
setTimeout(function(){
    section.classList.add('active');
},1400)