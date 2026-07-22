/* ==========================================
   TRIM BARBERSHOP
   script.js
========================================== */

/* ========= CURRENT YEAR ========= */

const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}

/* ========= SMOOTH SCROLL ========= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ========= SHRINK NAVBAR ========= */

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("small");

    }else{

        header.classList.remove("small");

    }

});

/* ========= SCROLL PROGRESS ========= */

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    const height=document.documentElement.scrollHeight-window.innerHeight;

    const percent=(scroll/height)*100;

    if(progress){

        progress.style.width=percent+"%";

    }

});

/* ========= SCROLL REVEAL ========= */

const reveal=document.querySelectorAll(

".card,.review-card,.gallery img,.stat,.faq h3,.faq p,.cta,.instagram-section"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

reveal.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ========= BACK TO TOP ========= */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/* ========= CURSOR GLOW ========= */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

}

});

/* ========= HERO PARALLAX ========= */

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

if(!hero) return;

const x=(e.clientX/window.innerWidth-.5)*12;

const y=(e.clientY/window.innerHeight-.5)*12;

hero.style.backgroundPosition=`calc(50% + ${x}px) calc(50% + ${y}px)`;

});

/* ========= GALLERY LIGHTBOX ========= */

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img=document.createElement("img");

img.src=image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

/* ========= LOADING SCREEN ========= */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

});
