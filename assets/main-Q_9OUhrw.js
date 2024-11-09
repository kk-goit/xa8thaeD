import{a as P}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const T=document.querySelector(".mobile-menu"),A=document.querySelector(".mobile-menu-open-btn"),F=document.querySelector(".mobile-menu-close-btn");A.addEventListener("click",()=>{T.classList.add("is-open")});F.addEventListener("click",()=>{T.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const N={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},j=["Body parts","Muscles","Equipment"];class G{constructor(){this.api=P.create(N),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:r}=e.response;return r.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,r,i){const o={rate:s,email:r,review:i};try{return await this.api.patch(`/exercises/${e}/rating`,o)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!j.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async i=>await this.getExerciseById(i));return(await Promise.allSettled(s)).filter(i=>i.status==="fulfilled").map(i=>i.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const y=new G,w=new Date().toISOString().slice(0,10),q=document.querySelector(".blockquote-text"),S=document.querySelector(".quote-author"),g=JSON.parse(localStorage.getItem("quoteOfDay"));g&&g.date===w?(q.innerHTML=g.quote,S.innerHTML=g.author):y.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:w})),q.innerHTML=t.quote,S.innerHTML=t.author):console.log(t)});let c=1;function v(t){c=t}function E(){return c}async function p(t,e,...s){const r=document.querySelector(".pagination");r.innerHTML="";const i=$();r.appendChild(i);const o=5;let a=Math.max(1,c-Math.floor(o/2)),l=Math.min(t,a+o-1);l-a+1<o&&(a=Math.max(1,l-o+1)),a>1&&(h(1),a>2&&b());for(let n=a;n<=l;n++)h(n);l<t&&(l<t-1&&b(),h(t));const _=I();r.appendChild(_);function h(n){const d=document.createElement("button");d.textContent=n,d.classList.add("page-button"),n===c&&d.classList.add("active"),d.addEventListener("click",async()=>{v(n),await e(...s),p(t,e,...s),s=""}),r.appendChild(d)}function b(){const n=document.createElement("span");n.textContent="...",n.classList.add("ellipsis"),r.appendChild(n)}function $(){const n=document.createElement("button");return n.innerHTML="←",n.classList.add("page-button"),n.disabled=c===1,n.addEventListener("click",async()=>{c>1&&(v(c-1),await e(...s),p(t,e,...s),s="")}),n}function I(){const n=document.createElement("button");return n.innerHTML="→",n.classList.add("page-button"),n.disabled=c===t,n.addEventListener("click",async()=>{c<t&&(v(c+1),await e(...s),p(t,e,...s),s="")}),n}}const M=document.querySelector(".exercises-form");let B=10,u="muscles",m="",f="";M.addEventListener("submit",R);function R(t){t.preventDefault(),f=t.target.elements.search.value.trim(),console.log(f),f&&(U(),t.target.elements.search.value="")}async function U(){const t=E(),e=await y.getExercises({page:t,limit:B,[u]:m,keyword:f});C(e.results)}async function O(t,e){const s=E();switch(t){case"Muscles":u="muscles";break;case"Equipment":u="equipment";break;case"Body parts":u="bodypart";break}m=e;try{const r=await y.getExercises({page:s,limit:B,[u]:m});M.classList.remove("visually-hidden"),C(r.results),p(r.totalPages,O,u,m)}catch(r){J(),console.log(r)}finally{console.log("Buy")}}const k=document.querySelector(".group-list");function C(t){const e=t.map(s=>`
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
</li>`).join("");k.innerHTML=e}function J(){k.innerHTML=""}let L="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",s=>{const r=s.target.closest(".group-list__item");r&&(O(L,r.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${r.dataset.name}</span>`)}),x()):console.warn("Елемент .group-list не знайдено.")});const K=({filter:t,name:e,imgURL:s})=>`
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
  `,Q=t=>t.map(K).join(""),V=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Q(t);e.innerHTML=s},W=async t=>await y.getExercisesByFilter(t),x=async({filter:t="Muscles",page:e=1,limit:s=12}={})=>{const r=await W({filter:t,page:e,limit:s});e=E(),L=t.toLowerCase(),V(r.results),p(r.totalPages,x,L)},H=Array.from(document.querySelectorAll(".exercises-menu-button")),Y=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",H.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),x({filter:t.textContent})};H.forEach(t=>t.addEventListener("click",()=>Y(t)));export{y};
//# sourceMappingURL=main-Q_9OUhrw.js.map
