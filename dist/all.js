console.log("js working"),window.addEventListener("scroll",function(){var e=document.querySelector(".nav");10<window.pageYOffset?e.classList.add("nav__scrolled"):e.classList.remove("nav__scrolled")});var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var s,l=document.getElementsByClassName("slider__slide"),d=document.getElementsByClassName("slider__dot"),n=document.querySelector(".slider__img"),i=document.querySelector(".slider__arrow--1").children[1].children[0],c=document.querySelector(".slider__arrow--2").children[1].children[0];for(i.src="./dist/img/watch-small-".concat(e-1,".png"),c.src="./dist/img/watch-small-".concat(e+1,".png"),e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<d.length;s++)d[s].className=d[s].className.replace(" active","");l[slideIndex-1].style.display="block",d[slideIndex-1].className+=" active",n.src="./dist/img/watch-".concat(e,".png")}showSlides(slideIndex);