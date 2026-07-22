// ===========================
// BARBER POLE SCROLL PROGRESS
// ===========================

const poleFill = document.querySelector(".pole-fill");

window.addEventListener("scroll", () => {

    const scrollTop = window.pageYOffset;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    poleFill.style.height = progress + "%";

});const poleFill = document.querySelector(".pole-fill");

const scrollPole = document.querySelector(".scroll-pole");

window.addEventListener("scroll", () => {

    const scrollTop = window.pageYOffset;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    poleFill.style.height = progress + "%";

    if(progress > 98){

        scrollPole.classList.add("complete");

    }else{

        scrollPole.classList.remove("complete");

    }

});.scroll-pole{

    transition:.35s ease;

}

