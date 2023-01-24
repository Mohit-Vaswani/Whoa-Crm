// Three dot button

const threeDot = document.getElementById("threeDot");
const dotBtn = document.getElementById("dotBtn");

threeDot.addEventListener('click', ()=>{
  dotBtn.classList.remove('hidden')
})


// Three dot button

const deleteDot = document.getElementById("deleteDot");
const deleteBtn = document.getElementById("deleteBtn");

deleteDot.addEventListener('click', ()=>{
  deleteBtn.classList.remove('hidden')
})