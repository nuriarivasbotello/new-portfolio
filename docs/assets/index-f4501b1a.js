(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const u=document.querySelectorAll(".btn"),r=document.getElementById("main-image"),i=document.getElementById("overlay-images");u.forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.add("hovered")}),e.addEventListener("mouseout",()=>{e.classList.remove("hovered"),e.classList.remove("active")}),e.addEventListener("mousedown",()=>{e.classList.add("active")}),e.addEventListener("mouseup",()=>{e.classList.remove("active")})});const l=()=>{const e=document.getElementById("menu");window.innerWidth<=768?e.style.display="none":e.style.display="flex"};document.querySelectorAll(".item").forEach(e=>{e.addEventListener("mouseenter",()=>{const n=e.getAttribute("data-image"),o=e.querySelector(".hover-image");o.style.backgroundImage=`url('${n}')`,o.style.display="block"}),e.addEventListener("mouseleave",()=>{const n=e.querySelector(".hover-image");n.style.display="none"})});window.addEventListener("load",l);window.addEventListener("resize",l);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".project-info"),n=document.getElementById("hover-image"),o={image1:"assets/images/project-nuriva.png",image2:"assets/images/project-sushi.png",image3:"assets/images/project-nihon.png",image4:"assets/images/project-doctorpad.png",image5:"./images/image5.jpg",image6:"./images/image6.jpg"};function c(t){const m=t.currentTarget.dataset.image,g=o[m];n.src=g,n.style.display="block"}function s(){n.style.display="none"}e.forEach(t=>{t.addEventListener("mouseenter",c),t.addEventListener("mouseleave",s)})});r.addEventListener("click",function(){i.classList.contains("show")?(i.classList.remove("show"),i.classList.add("hide")):(i.classList.remove("hide"),i.classList.add("show"))});document.addEventListener("click",function(e){!r.contains(e.target)&&!i.contains(e.target)&&i.classList.contains("show")&&(i.classList.remove("show"),i.classList.add("hide"))});function d(){const e=window.innerWidth,n=document.getElementById("icon-gmail"),o=document.getElementById("icon-linkedin"),c=document.getElementById("icon-github"),s=document.getElementById("icon-behance"),t=document.getElementById("icon-instagram");e<768||e<1024?(n.src="assets/images/IconGmailMvl.svg",o.src="assets/images/IconLkMvl.svg",c.src="assets/images/IconGitMvl.svg",s.src="assets/images/IconBhMvl.svg",t.src="assets/images/IconInstMvl.svg"):(n.src="assets/images/IconGmail.svg",o.src="assets/images/IconLk.svg",c.src="assets/images/IconGit.svg",s.src="assets/images/IconBh.svg",t.src="assets/images/IconInst.svg")}d();window.addEventListener("resize",d);window.addEventListener("scroll",function(){const e=document.getElementById("scroll-to-top");window.innerWidth>=1024&&window.scrollY>300?e.style.display="block":e.style.display="none"});document.getElementById("scroll-to-top").addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});