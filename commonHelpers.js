import{S as f,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFpSURBVHgBrZQ9UsMwEIXXQoZhcgCobU6RNKlygPTOKUhPDz00UOBbpE9OgX0FD8xQkBAbrYkyirQrK3Fe5bHX79Nqf6JqPG6AUJzN4DLLIETr/B02eU5+kz7z39UK6uIDfBLpnYqdtc8URLLmiwX8PD1CkO7nLET2NlfSsRRE9jXvgshzmPsg0mcu0lQVufCa2jE2ROhuccyTFK6fX1R2fKvi4TBGJImTCXoiROALqhXrsmhTxCAKojPfqBmoy9L9f+dJzoEWDpCZri6cab5mBkzLC6AgAFGweRCAgoSaowQEqmGeuxSUgXnn/1fE756jAVxBQyHyFHOuu1gADpUtfOfrFhOyXS6dWcA1joq+X9+a+IyrAnWl1recTNrDXcy/Ph8iVbh4OgVxcwtbNeJaTVVBl+wY0xwzl2a6eiWculFtc9S+yH0hlPkBoA+EM3cADmQwaLeqT9gtcjhku42cgwPIaARd8u2mP6EkDQvp61kkAAAAAElFTkSuQmCC",n=document.querySelector("form"),u=document.querySelector(".gallery");n.addEventListener("submit",h);function h(t){t.preventDefault();const o=n.elements.search.value.trim();if(o===""){c("Please, enter what you want to find!");return}d(n,"loading"),y(o),n.reset()}function d(t,o){t.classList.add(o)}function y(t){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"31960717-8c82352157f13e8057b3011e3",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(a).then(s=>s.json()).then(s=>{const e=s.hits;e.length===0&&L(),l(n,"loading"),P(e)}).catch(s=>{c(s),l(n,"loading")})}function l(t,o){t.classList.remove(o)}function L(){u.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!")}function P(t){const o=t.map(({largeImageURL:a,webformatURL:s,tags:e,likes:r,views:i,comments:A,downloads:p})=>`<li class='gallery-item'>
                <a class='gallery-link' href='${a}'>
                    <img class='gallery-image' src='${s}' alt='${e}'/>
                </a>
                <div class='container-app'>
                    <p><span>Likes</span> ${r}</p>
                    <p><span>Views</span> ${i}</p>
                    <p><span>Comments</span> ${A}</p>
                    <p><span>Downloads</span> ${p}</p>
                </div>
            </li>`).join("");u.insertAdjacentHTML("afterBegin",o),w()}function w(){let t=new f(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});t.on("show.simpleLightbox"),t.refresh()}function c(t){m.error({messageColor:"#FFF",color:"#EF4040",iconUrl:g,position:"topRight",message:t})}
//# sourceMappingURL=commonHelpers.js.map
