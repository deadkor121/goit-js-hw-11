import{i as c,S as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFpSURBVHgBrZQ9UsMwEIXXQoZhcgCobU6RNKlygPTOKUhPDz00UOBbpE9OgX0FD8xQkBAbrYkyirQrK3Fe5bHX79Nqf6JqPG6AUJzN4DLLIETr/B02eU5+kz7z39UK6uIDfBLpnYqdtc8URLLmiwX8PD1CkO7nLET2NlfSsRRE9jXvgshzmPsg0mcu0lQVufCa2jE2ROhuccyTFK6fX1R2fKvi4TBGJImTCXoiROALqhXrsmhTxCAKojPfqBmoy9L9f+dJzoEWDpCZri6cab5mBkzLC6AgAFGweRCAgoSaowQEqmGeuxSUgXnn/1fE756jAVxBQyHyFHOuu1gADpUtfOfrFhOyXS6dWcA1joq+X9+a+IyrAnWl1recTNrDXcy/Ph8iVbh4OgVxcwtbNeJaTVVBl+wY0xwzl2a6eiWculFtc9S+yH0hlPkBoA+EM3cADmQwaLeqT9gtcjhku42cgwPIaARd8u2mP6EkDQvp61kkAAAAAElFTkSuQmCC",i=document.querySelector("form"),p=document.querySelector(".gallery");i.addEventListener("submit",f);function f(r){r.preventDefault();const s=i.elements.search.value;if(s===""){c.error({messageColor:"#FFF",color:"#EF4040",iconUrl:l,position:"topRight",message:"Please,enter what do you want to find!"});return}i.insertAdjacentHTML("afterend",'<span class="loader"></span>'),g(s),i.reset()}function g(r){const n=`https://pixabay.com/api/?${new URLSearchParams({key:"42112521-3ff4dfc201bab0977369cd2bc",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(n).then(t=>t.json()).then(t=>{const e=t.hits;e.length===0&&h();const o=document.querySelector(".loader");d(e),o.remove()}).catch(t=>{c.error({messageColor:"#FFF",color:"#EF4040",iconUrl:l,position:"topRight",message:`${t}`})})}function h(){p.innerHTML="",c.error({messageColor:"#FFF",color:"#EF4040",iconUrl:l,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function d(r){const s=r.map(({largeImageURL:n,webformatURL:t,tags:e,likes:o,views:a,comments:A,downloads:u})=>`<li class='gallery-item'>
  <a class='gallery-link' href='${n}'>
    <img class='gallery-image' src='${t}' alt='${e}'/>
  </a>
<div class='container-app'>
<p><span>Likes</span> ${o}</p>
<p><span>Views</span> ${a}</p>
<p><span>Comments</span> ${A}</p>
<p><span>Downloads</span> ${u}</p>
</div>
 </li>`).join("");p.insertAdjacentHTML("afterBegin",s),y()}function y(){let r=new m(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});r.on("show.simpleLightbox"),r.refresh()}
//# sourceMappingURL=commonHelpers.js.map