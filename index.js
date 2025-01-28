import{i as c,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d="48447542-64438fdfaeeaa1a5314542701",f="https://pixabay.com/api/",p=i=>fetch(`${f}?key=${d}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>t.hits).catch(t=>(console.error("Error fetching images:",t),[]));let l;const u=i=>{const t=document.getElementById("gallery");if(t.innerHTML="",i.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=i.map(r=>`  
            <a href="${r.largeImageURL}" class="gallery__item">  
                <img src="${r.webformatURL}" alt="${r.tags}" class="gallery__image" />  
                <div class="gallery__info">  
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
            </a>`).join("");t.innerHTML=s,l=new m(".gallery__item",{}),l.refresh()},g=document.getElementById("search-form"),a=document.getElementById("loader");g.addEventListener("submit",i=>{i.preventDefault();const s=document.getElementById("search-input").value.trim();if(s===""){iziToast.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}const r=document.getElementById("gallery");r.innerHTML="",a.style.display="block",p(s).then(e=>{u(e)}).catch(e=>{console.error("Error fetching images:",e),iziToast.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}).finally(()=>{a.style.display="none"})});
//# sourceMappingURL=index.js.map
