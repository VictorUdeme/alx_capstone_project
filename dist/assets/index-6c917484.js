(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=()=>{const n=document.querySelector(".header__bars"),o=document.querySelector(".mobile-nav"),r=document.querySelectorAll(".mobile-nav__link");let s=!1;n.addEventListener("click",()=>{s=!s,s?(o.style.display="flex",document.body.style.overflowY="hidden"):(o.style.display="none",document.body.style.overflowY="auto")}),r.forEach(e=>{e.addEventListener("click",()=>{s=!1,o.style.display="none",document.body.style.overflowY="auto"})})},i=()=>{const n=document.querySelectorAll("#theme-toggle"),o=localStorage.getItem("theme");o&&document.body.classList.add(o);const r=()=>{document.body.classList.toggle("light-mode"),document.body.classList.contains("light-mode")?localStorage.setItem("theme","light-mode"):localStorage.removeItem("theme")};n.forEach(s=>{s.addEventListener("click",r)})},a=()=>{const n=document.querySelectorAll(".lazy"),o=new IntersectionObserver((r,s)=>{r.forEach(e=>{if(e.isIntersecting){let t=e.target;t.src=t.dataset.src,t.classList.remove("loading"),t.classList.add("loaded"),s.unobserve(t)}})},{});n.forEach(r=>{o.observe(r)})};l();i();a();
