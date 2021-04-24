
let link = document.querySelector(".write-us-button");
let popup = document.querySelector(".write-us");
let close = document.querySelector(".close-cross");
let yourname = popup.querySelector("[name=name]");
let mail = popup.querySelector("[name=e-mail]");
let form = popup.querySelector("form"); 
let storage = "";
let isStorageSupport = true;
let slider = document.querySelectorAll(".slide-radio");
let slides = document.querySelectorAll(".slide-item");

try {
    storage = localStorage.getItem("mail");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("write-us-opened");
    popup.classList.add("write-animation");
    setTimeout(() => popup.classList.remove("write-animation"), 1000);
    yourname.focus();
    if (storage) {
        mail.value = storage;
        yourname.focus();
        } else {
            mail.focus();
        }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-opened");
    popup.classList.remove("write-us-error");
});

form.addEventListener("submit", function (evt) {
    if (!yourname.value || !mail.value) {
        evt.preventDefault(); 
        popup.classList.add("write-us-error");
        setTimeout(() => popup.classList.remove("write-us-error"), 600);
    } else {
        if (isStorageSupport) {
        localStorage.setItem("mail", mail.value);
            }
    }     
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains("write-us-opened")) {
        popup.classList.remove("write-us-opened");
        popup.classList.remove("write-us-error");
        popup.classList.remove("write-animation");
        }
    }
});


slider.forEach((button, index) => {
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        slider.forEach((item) => {item.classList.remove("slide-radio-active")});
        button.classList.add("slide-radio-active");

        slides.forEach((items) => {items.classList.remove("slide-on")});
        slides[index].classList.add("slide-on");
    });
});