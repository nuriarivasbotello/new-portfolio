(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const d=document.querySelectorAll(".btn"),r=document.getElementById("main-image"),c=document.getElementById("overlay-images");d.forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.add("hovered")}),e.addEventListener("mouseout",()=>{e.classList.remove("hovered"),e.classList.remove("active")}),e.addEventListener("mousedown",()=>{e.classList.add("active")}),e.addEventListener("mouseup",()=>{e.classList.remove("active")})});const m={image1:"assets/images/project-nuriva.png",image2:"assets/images/project-sushi.png",image3:"assets/images/project-nihon.png",image4:"assets/images/project-doctorpad.png",image5:"./images/image5.jpg",image6:"./images/image6.jpg"};document.querySelectorAll(".project").forEach(e=>{const i=e.querySelector(".project-info");window.innerWidth>768&&(e.addEventListener("mouseenter",o=>{const n=i.getAttribute("data-image"),s=document.getElementById("hover-img");s.src=m[n];const t=document.querySelector(".hover-image");t.style.display="block"}),e.addEventListener("mouseleave",()=>{const o=document.querySelector(".hover-image");o.style.display="none"})),e.addEventListener("click",o=>{if(window.innerWidth<=768){const n=document.querySelector(".hover-image");n.style.display="none"}})});window.addEventListener("resize",()=>{const e=document.querySelector(".hover-image");window.innerWidth<=768&&(e.style.display="none")});window.addEventListener("resize",()=>{const e=document.querySelector(".hover-image");window.innerWidth<=768&&(e.style.display="none")});r.addEventListener("click",function(){c.classList.contains("show")?(c.classList.remove("show"),c.classList.add("hide")):(c.classList.remove("hide"),c.classList.add("show"))});document.addEventListener("click",function(e){!r.contains(e.target)&&!c.contains(e.target)&&c.classList.contains("show")&&(c.classList.remove("show"),c.classList.add("hide"))});function l(){const e=window.innerWidth,i=document.getElementById("icon-gmail"),o=document.getElementById("icon-linkedin"),n=document.getElementById("icon-github"),s=document.getElementById("icon-behance"),t=document.getElementById("icon-instagram");e<768||e<1024?(i.src="assets/images/IconGmailMvl.svg",o.src="assets/images/IconLkMvl.svg",n.src="assets/images/IconGitMvl.svg",s.src="assets/images/IconBhMvl.svg",t.src="assets/images/IconInstMvl.svg"):(i.src="assets/images/IconGmail.svg",o.src="assets/images/IconLk.svg",n.src="assets/images/IconGit.svg",s.src="assets/images/IconBh.svg",t.src="assets/images/IconInst.svg")}l();window.addEventListener("resize",l);window.addEventListener("scroll",function(){const e=document.getElementById("scroll-to-top");window.innerWidth>=1024&&window.scrollY>300?e.style.display="block":e.style.display="none"});document.getElementById("scroll-to-top").addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});