const imageIcon = document.getElementById("image-icon");
const imageArrowBtn = document.getElementById("imageArrowBtn");
const imgContainer = document.getElementById("imageContainer");
const chattingContainer = document.getElementById("chattingContainer");

imageIcon.addEventListener('click', ()=>{
    if(imgContainer.classList.contains("hidden")){
        imgContainer.classList.remove("hidden");
        imgContainer.classList.add("flex");
        chattingContainer.classList.remove("flex");
        chattingContainer.classList.add("hidden");
    }
})

imageArrowBtn.addEventListener('click', ()=>{
    if(imgContainer.classList.contains("flex")){
        imgContainer.classList.add("hidden");
        chattingContainer.classList.remove("hidden")
        chattingContainer.classList.add("flex");
    }
})