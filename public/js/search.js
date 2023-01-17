const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const closeBtn = document.getElementById("close-btn");

searchBtn.addEventListener('click', ()=>{
    if(searchForm.classList.contains("hidden") && closeBtn.classList.contains("hidden")){
        searchForm.classList.remove("hidden");
        closeBtn.classList.remove("hidden");
    }
})

closeBtn.addEventListener('click', ()=>{
    if(searchForm.classList.contains("hidden") && closeBtn.classList.contains("hidden")){
        
    } else{
        searchForm.classList.add("hidden");
        closeBtn.classList.add("hidden");
    }
})

