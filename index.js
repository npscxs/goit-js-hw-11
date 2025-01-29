import{S as d,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const m="48447542-64438fdfaeeaa1a5314542701",f="https://pixabay.com/api/",p=i=>fetch(`${f}?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>t.hits).catch(t=>(console.error("Error fetching images:",t),[]));let s;const u=i=>{const t=document.getElementById("gallery");if(t.innerHTML="",i.length===0){a.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=i.map(r=>`  
        <a href="${r.largeImageURL}" class="gallery-item">  
          <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" />  
          <div class="gallery-info">  
            <div class="gallery-info-item">
              <p class="info-item-title">Likes</p>
              <p>${r.likes}</p>
            </div>
            <div class="gallery-info-item">
              <p class="info-item-title">Views</p>
              <p>${r.views}</p>
            </div>
            <div class="gallery-info-item">
              <p class="info-item-title">Comments</p>
              <p>${r.comments}</p>
            </div>
            <div class="gallery-info-item">
              <p class="info-item-title">Downloads</p>
              <p>${r.downloads}</p>
            </div>
          </div>  
        </a>`).join("");t.innerHTML=n,s?s.refresh():s=new d(".gallery-item",{})};document.addEventListener("DOMContentLoaded",()=>{s=new d(".gallery-item",{})});const g=document.getElementById("search-form"),c=document.getElementById("loader");g.addEventListener("submit",i=>{i.preventDefault();const n=document.getElementById("search-input").value.trim();if(n===""){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}const r=document.getElementById("gallery");r.innerHTML="",c.style.display="block",p(n).then(e=>{u(e)}).catch(e=>{console.error("Error fetching images:",e),a.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=index.js.map
