// Chat Buttons

const teamChat = document.getElementById("teamChat")
const clientChat = document.getElementById("clientChat")
const newChat = document.getElementById("newChat")
const notification = document.getElementById("notification")

// Chat Items

const item1 = document.getElementById("item-1")
const item2 = document.getElementById("item-2")
const item3 = document.getElementById("item-3")
const item4 = document.getElementById("item-4")

teamChat.addEventListener('click', function(){
   if(teamChat.classList.contains("active-tab")){
      
   } else{
      item1.classList.add("active-tab")
      item2.classList.remove("active-tab")
      item3.classList.remove("active-tab")
      item4.classList.remove("active-tab")
        // Css
    //   teamChat.classList.add("text-red-500")
    //   clientChat.classList.remove("bg-green-500")
    //   newChat.classList.remove("bg-yellow-500")
    //   notification.classList.remove("bg-blue-500")
   }

})

clientChat.addEventListener('click', function(){
   if(clientChat.classList.contains("active-tab")){
      
   } else{
      item1.classList.remove("active-tab")
      item2.classList.add("active-tab")
      item3.classList.remove("active-tab")
      item4.classList.remove("active-tab")
        // Css
    //   teamChat.classList.remove("bg-red-500")
    //   clientChat.classList.add("bg-green-500")
    //   newChat.classList.remove("bg-yellow-500")
    //   notification.classList.remove("bg-blue-500")
   }
})

newChat.addEventListener('click', function(){
   if(newChat.classList.contains("active-tab")){
      
   } else{
      item1.classList.remove("active-tab")
      item2.classList.remove("active-tab")
      item3.classList.add("active-tab")
      item4.classList.remove("active-tab")
        // Css
    //   teamChat.classList.remove("bg-red-500")
    //   clientChat.classList.remove("bg-green-500")
    //   newChat.classList.add("bg-yellow-500")
    //   notification.classList.remove("bg-blue-500")
   }
})

notification.addEventListener('click', function(){
   if(notification.classList.contains("active-tab")){
      
   } else{
      item1.classList.remove("active-tab")
      item2.classList.remove("active-tab")
      item3.classList.remove("active-tab")
      item4.classList.add("active-tab")
        // Css
    //   teamChat.classList.remove("bg-red-500")
    //   clientChat.classList.remove("bg-green-500")
    //   newChat.classList.remove("bg-yellow-500")
    //   notification.classList.add("bg-blue-500")
   }
})