document.getElementById(".profile__edit-button").addEventListener("click", function(){
    document.querySelector(".popup-modal").style.display = "flex";
})

document.querySelector(".popup-modal__close").addEventListener("click", function(){
    document.querySelector(".popup-modal").style.display = "none";
})