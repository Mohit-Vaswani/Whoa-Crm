// Different Chat Btns

const chatButtons = document.querySelectorAll(".chatButtons");

chatButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      chatButtons.forEach(function(btn) {
            btn.classList.remove("highlightChat");
        });
        button.classList.add("highlightChat");
    });
});