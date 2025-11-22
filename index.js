import{a as c,i as n,S as d}from"./assets/vendor-DeKi_rfE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const u=c.create({baseURL:"https://pixabay.com/api/",timeout:1e3});function f(a){return u.get("/",{params:{key:"53360432-3950dd890aa8264617696b589",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>!r.data.hits||r.data.hits.length===0?(n.error({title:"❌",titleColor:"#fafafb",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight"}),null):r.data.hits).catch(r=>{console.error(r)})}const m=new d(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:500});function p({webformatURL:a,largeImageURL:r,tags:l,likes:s,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
<a href="${r}" class="gallery-link">
<img src="${a}" alt="${l}">
</a>
<div class="gallery-descr">
<div class="gallery-descr-item">
<p class="gallery-descr-title">Likes</p>
<p class="gallery-descr-value">${s}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Views</p>
<p class="gallery-descr-value">${e}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Comments</p>
<p class="gallery-descr-value">${t}</p>
</div>
<div class="gallery-descr-item">
<p class="gallery-descr-title">Downloads</p>
<p class="gallery-descr-value">${o}</p>
</div>
</div>
</li>`}function y(a){const r=a.map(p).join("");i.gallery.innerHTML=r,m.refresh()}function g(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("is-hidden")}function v(){i.loader.classList.add("is-hidden")}const i={searchForm:document.querySelector("form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};i.searchForm.addEventListener("submit",L);function L(a){a.preventDefault();const l=new FormData(a.target).get("search-text");h(),f(l).then(s=>{y(s)}).catch(s=>console.error(s)).finally(()=>{v()}),a.target.reset()}g();
//# sourceMappingURL=index.js.map
