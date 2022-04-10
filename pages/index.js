/*POP-UP*/

document.getElementById("button").addEventListener("click", function () {
    let name = document.querySelector(".profile__title").innerHTML;
    let job = document.querySelector(".profile__subtitle").innerHTML;
    document.querySelector(".popup-content__input-name").value = name;
    document.querySelector(".popup-content__input-job").value = job;
    document.querySelector(".popup-modal").style.display = "flex";
})

document.querySelector(".popup-modal__close").addEventListener("click", function () {
    document.querySelector(".popup-modal").style.display = "none";
})


const likeBtn = document.querySelectorAll(".element__like-button");
    likeBtn.forEach(function (item) {
    item.addEventListener("click", (event) => {
        let likeIcon = item.querySelector(".icon");
        let count = item.querySelector(".count");
        if (+count.textContent == 0) {
            clicked = true;
            likeIcon.innerHTML = `<i class="fas fa-heart"></i>`;
            count.textContent++;
            document.classList.remove('.element__like-button:hover');
        } else {
            clicked = false;
            likeIcon.innerHTML = `<i class="fal fa-heart"></i>`;
            count.textContent--;
        }
});
})


function closeEditForm() {
document.querySelector(".popup-modal").style.display = "none";

}

function qs(selector) {
return document.querySelector(selector);
}



function formSubmitHandler(evt) {
    evt.preventDefault();
    qs('.profile__title').textContent = qs('.popup-content__input-name').value;
    qs('.profile__subtitle').textContent = qs('.popup-content__input-job').value;
    closeEditForm();
}

document.getElementById('submit').addEventListener('click', formSubmitHandler);