import{a as G}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const _=document.querySelector(".mobile-menu"),R=document.querySelector(".mobile-menu-open-btn"),J=document.querySelector(".mobile-menu-close-btn");R.addEventListener("click",()=>{_.classList.add("is-open")});J.addEventListener("click",()=>{_.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const j={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},I=["Body parts","Muscles","Equipment"];class W{constructor(){this.api=G.create(j),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:i}=e.response;return i.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,i,n){const r={rate:s,email:i,review:n};try{return await this.api.patch(`/exercises/${e}/rating`,r)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!I.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async n=>await this.getExerciseById(n));return(await Promise.allSettled(s)).filter(n=>n.status==="fulfilled").map(n=>n.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const g=new W,M=new Date().toISOString().slice(0,10),y=document.querySelector(".blockquote-text"),b=document.querySelector(".quote-author"),h=JSON.parse(localStorage.getItem("quoteOfDay"));h&&h.date===M?(y.innerHTML=h.quote,b.innerHTML=h.author):g.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:M})),y.innerHTML=t.quote,b.innerHTML=t.author):console.log(t)}).catch(()=>{y.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",b.innerHTML="Tom Brady"});let c=1;function L(t){c=t}function x(){return c}async function p(t,e,...s){const i=document.querySelector(".pagination");i.innerHTML="";const n=F();i.appendChild(n);const r=5;let a=Math.max(1,c-Math.floor(r/2)),d=Math.min(t,a+r-1);d-a+1<r&&(a=Math.max(1,d-r+1)),a>1&&(v(1),a>2&&T());for(let o=a;o<=d;o++)v(o);d<t&&(d<t-1&&T(),v(t));const A=N();i.appendChild(A);function v(o){const u=document.createElement("button");u.textContent=o,u.classList.add("page-button"),o===c&&u.classList.add("active"),u.addEventListener("click",async()=>{L(o),await e(...s),p(t,e,...s),s=""}),i.appendChild(u)}function T(){const o=document.createElement("span");o.textContent="...",o.classList.add("ellipsis"),i.appendChild(o)}function F(){const o=document.createElement("button");return o.innerHTML="←",o.classList.add("page-button"),o.disabled=c===1,o.addEventListener("click",async()=>{c>1&&(L(c-1),await e(...s),p(t,e,...s),s="")}),o}function N(){const o=document.createElement("button");return o.innerHTML="→",o.classList.add("page-button"),o.disabled=c===t,o.addEventListener("click",async()=>{c<t&&(L(c+1),await e(...s),p(t,e,...s),s="")}),o}}class U{constructor(e){this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=e,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="./img/icons.svg#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",s=>{s.key==="Escape"&&this.closeModal(s)}),document.body.appendChild(this.backdrop)}openModal(){const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${e}px`,document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}closeModal(e){e.target.closest(".modal-content")||(this.closeButton.removeEventListener("click",this.handleClose),this.backdrop.removeEventListener("click",this.handleClose),document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.backdrop.remove(),document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight="")}}function Y(t){X(t).then(e=>{const s=D(e),i=new U(s),n=i.modal.querySelector(".add-to-favorite-btn"),r=i.modal.querySelector(".give-rating-btn");n.addEventListener("click",a=>{a.stopPropagation(),k(t)?z(t):V(t),n.innerHTML=B(t)}),r.addEventListener("click",()=>{console.log("Give a rating")}),i.openModal()})}function D(t){return`
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${t.gifUrl}" alt="${t.name}" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${t.name}</h3>
                <div class="exercise-info__rating">
                    ${Q(t.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${K(t)}
                </ul>
                <p class="exercise-info__description">${t.description}</p>
            </div>
            <div class="exercise-info__actions">
                <button class="exercise-info__button add-to-favorite-btn" data-id="${t._id}">
                    ${B(t._id)}
                </button>
                <button class="exercise-info__button give-rating-btn">Give a rating</button>
            </div>
        </div>
    `}function K(t){const e=[];return t.target&&e.push(`<li><span>Target</span> ${t.target}</li>`),t.bodyPart&&e.push(`<li><span>Body Part</span> ${t.bodyPart}</li>`),t.equipment&&e.push(`<li><span>Equipment</span> ${t.equipment}</li>`),t.popularity&&e.push(`<li><span>Popular</span> ${t.popularity}</li>`),t.burnedCalories&&e.push(`<li><span>Burned Calories</span> ${t.burnedCalories}</li>`),e.join("")}function Q(t){const e=[];t=t.toFixed(1);const s=Math.floor(t),i=t-s,n=`<span class="exercise-info__rating-text">${t}</span>`;for(let r=0;r<s;r++)e.push(`<svg width="18" height="18">
                <use class="rating-star__full" href="./img/icons.svg#icon-star-18"></use>
            </svg>`);if(i>0){const r=i*100;e.push(`<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${r}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="./img/icons.svg#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`)}for(;e.length<5;)e.push(`<svg width="18" height="18">
                <use class="rating-star__empty" href="./img/icons.svg#icon-star-18"></use>
            </svg>`);return`${n}<div class="exercise-info__rating-stars">${e.join("")}</div>`}function V(t){const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t]));else{const s=JSON.parse(e);if(s.includes(t))return;s.push(t),localStorage.setItem("favorites",JSON.stringify(s))}}function z(t){const e=localStorage.getItem("favorites");if(!e)return;const i=JSON.parse(e).filter(n=>n!==t);localStorage.setItem("favorites",JSON.stringify(i))}function k(t){const e=localStorage.getItem("favorites");return e?JSON.parse(e).includes(t):!1}function B(t){const e=k(t);return`
        ${e?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="./img/icons.svg#${e?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function X(t){return await g.getExerciseById(t)}const q=document.querySelector(".exercises-form");let $=10,l="muscles",m="",f="";q.addEventListener("submit",Z);function Z(t){t.preventDefault(),f=t.target.elements.search.value.trim(),console.log(f),f&&(ee(),t.target.elements.search.value="")}async function ee(){const t=x(),e=await g.getExercises({page:t,limit:$,[l]:m,keyword:f});H(e.results)}async function C(t,e){const s=x();switch(t){case"Muscles":l="muscles";break;case"Equipment":l="equipment";break;case"Body parts":l="bodypart";break}m=e;try{const i=await g.getExercises({page:s,limit:$,[l]:m});q.classList.remove("visually-hidden"),H(i.results),p(i.totalPages,C,l,m)}catch(i){se(),console.log(i)}finally{console.log("Buy")}}const O=document.querySelector(".group-list");function H(t){const e=t.map(i=>`
<li class="exercise-card" data-id=${i._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        <div class="rating-star">
            <span class='text-star'>${i.rating}</span>
           <svg class="star-icon" width="18" height="18">
                    <use href="./img/icons.svg#icon-star-18"></use>
                </svg>
        </div>
        </div>
        <button class="start">
            Start
            <svg class="icon-arrow-right" width="13" height="13">
                    <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
        </button>
    </div>
    <div class="exercise-info">
    <div class="icon-wrapper">
    <svg class="arrow-running-icon" width="14" height="16">                     
        <use href="./img/icons.svg#icon-running-stick-figure"></use>
    </svg>
</div>
        <p class="exercise-name">${i.name.split(" ").slice(0,2).join(" ")}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span>${i.burnedCalories}</span></p>
        <p>Body part: <span>${i.bodyPart}</span></p>
        <p>Target: <span>${i.target}</span></p>
    </div>
</li>`).join("");O.innerHTML=e,document.querySelectorAll(".exercise-card .start").forEach(i=>{i.addEventListener("click",te)})}function te(t){const e=t.target.closest(".exercise-card").dataset.id;Y(e)}function se(){O.innerHTML=""}let E="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",s=>{const i=s.target.closest(".group-list__item");i&&(C(E,i.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${i.dataset.name}</span>`)}),S()):console.warn("Елемент .group-list не знайдено.")});const ie=({filter:t,name:e,imgURL:s})=>`
    <div
      class="group-list__item"
      data-name="${e}"
    >
      <img
        class="group-list__item-image"
        src="${s}"
      >
      <div class="group-list__item-image-filter"></div>
      <div class="group-list__item-title">
        ${e}
      </div>
      <div class="group-list__item-subtitle">
        ${t}
      </div>
    </div>
  `,ne=t=>t.map(ie).join(""),re=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=ne(t);e.innerHTML=s},oe=async t=>await g.getExercisesByFilter(t),S=async({filter:t="Muscles",page:e=1,limit:s=12}={})=>{const i=await oe({filter:t,page:e,limit:s});e=x(),E=t.toLowerCase(),re(i.results),p(i.totalPages,S,E)},P=Array.from(document.querySelectorAll(".exercises-menu-button")),ae=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",P.forEach(i=>{i.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),S({filter:t.textContent})};P.forEach(t=>t.addEventListener("click",()=>ae(t)));const w=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?w.style.display="flex":w.style.display="none"});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{g as y};
//# sourceMappingURL=main-13b6ZfOe.js.map
