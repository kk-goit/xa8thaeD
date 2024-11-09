import{a as A}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const M=document.querySelector(".mobile-menu"),F=document.querySelector(".mobile-menu-open-btn"),N=document.querySelector(".mobile-menu-close-btn");F.addEventListener("click",()=>{M.classList.add("is-open")});N.addEventListener("click",()=>{M.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const j={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},G=["Body parts","Muscles","Equipment"];class R{constructor(){this.api=A.create(j),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:r}=e.response;return r.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,r,n){const o={rate:s,email:r,review:n};try{return await this.api.patch(`/exercises/${e}/rating`,o)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!G.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async n=>await this.getExerciseById(n));return(await Promise.allSettled(s)).filter(n=>n.status==="fulfilled").map(n=>n.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const f=new R,S=new Date().toISOString().slice(0,10),v=document.querySelector(".blockquote-text"),L=document.querySelector(".quote-author"),g=JSON.parse(localStorage.getItem("quoteOfDay"));g&&g.date===S?(v.innerHTML=g.quote,L.innerHTML=g.author):f.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:S})),v.innerHTML=t.quote,L.innerHTML=t.author):console.log(t)}).catch(()=>{v.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",L.innerHTML="Tom Brady"});let c=1;function E(t){c=t}function x(){return c}async function p(t,e,...s){const r=document.querySelector(".pagination");r.innerHTML="";const n=$();r.appendChild(n);const o=5;let a=Math.max(1,c-Math.floor(o/2)),u=Math.min(t,a+o-1);u-a+1<o&&(a=Math.max(1,u-o+1)),a>1&&(h(1),a>2&&q());for(let i=a;i<=u;i++)h(i);u<t&&(u<t-1&&q(),h(t));const I=P();r.appendChild(I);function h(i){const d=document.createElement("button");d.textContent=i,d.classList.add("page-button"),i===c&&d.classList.add("active"),d.addEventListener("click",async()=>{E(i),await e(...s),p(t,e,...s),s=""}),r.appendChild(d)}function q(){const i=document.createElement("span");i.textContent="...",i.classList.add("ellipsis"),r.appendChild(i)}function $(){const i=document.createElement("button");return i.innerHTML="←",i.classList.add("page-button"),i.disabled=c===1,i.addEventListener("click",async()=>{c>1&&(E(c-1),await e(...s),p(t,e,...s),s="")}),i}function P(){const i=document.createElement("button");return i.innerHTML="→",i.classList.add("page-button"),i.disabled=c===t,i.addEventListener("click",async()=>{c<t&&(E(c+1),await e(...s),p(t,e,...s),s="")}),i}}const B=document.querySelector(".exercises-form");let O=10,l="muscles",m="",y="";B.addEventListener("submit",U);function U(t){t.preventDefault(),y=t.target.elements.search.value.trim(),console.log(y),y&&(Y(),t.target.elements.search.value="")}async function Y(){const t=x(),e=await f.getExercises({page:t,limit:O,[l]:m,keyword:y});C(e.results)}async function k(t,e){const s=x();switch(t){case"Muscles":l="muscles";break;case"Equipment":l="equipment";break;case"Body parts":l="bodypart";break}m=e;try{const r=await f.getExercises({page:s,limit:O,[l]:m});B.classList.remove("visually-hidden"),C(r.results),p(r.totalPages,k,l,m)}catch(r){J(),console.log(r)}finally{console.log("Buy")}}const H=document.querySelector(".group-list");function C(t){const e=t.map(s=>`
<li class="exercise-card" data-id=${s._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        <div class="rating-star">
            <span class='text-star'>${s.rating}</span>
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
        <p class="exercise-name">${s.name.split(" ").slice(0,2).join(" ")}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span>${s.burnedCalories}</span></p>
        <p>Body part: <span>${s.bodyPart}</span></p>
        <p>Target: <span>${s.target}</span></p>
    </div>
</li>`).join("");H.innerHTML=e}function J(){H.innerHTML=""}let b="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",s=>{const r=s.target.closest(".group-list__item");r&&(k(b,r.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${r.dataset.name}</span>`)}),T()):console.warn("Елемент .group-list не знайдено.")});const K=({filter:t,name:e,imgURL:s})=>`
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
  `,Q=t=>t.map(K).join(""),V=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Q(t);e.innerHTML=s},W=async t=>await f.getExercisesByFilter(t),T=async({filter:t="Muscles",page:e=1,limit:s=12}={})=>{const r=await W({filter:t,page:e,limit:s});e=x(),b=t.toLowerCase(),V(r.results),p(r.totalPages,T,b)},_=Array.from(document.querySelectorAll(".exercises-menu-button")),D=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",_.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),T({filter:t.textContent})};_.forEach(t=>t.addEventListener("click",()=>D(t)));const w=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?w.style.display="flex":w.style.display="none"});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{f as y};
//# sourceMappingURL=main-DNg64vd7.js.map
