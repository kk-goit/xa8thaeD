import{a as S,i as a}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const h=document.querySelector(".mobile-menu"),x=document.querySelector(".mobile-menu-open-btn"),q=document.querySelector(".mobile-menu-close-btn");x.addEventListener("click",()=>{h.classList.add("is-open")});q.addEventListener("click",()=>{h.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const T={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},P=["Body parts","Muscles","Equipment"];class M{constructor(){this.api=S.create(T),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:o}=e.response;return o.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(r){switch(r.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(r)}}}async addRating(e,r,o,s){const i={rate:r,email:o,review:s};try{return await this.api.patch(`/exercises/${e}/rating`,i)}catch(n){switch(n.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(n)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(r){switch(r.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(r)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!P.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(r){switch(r.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(r)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(r){switch(r.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(r)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const r=e.map(async s=>await this.getExerciseById(s));return(await Promise.allSettled(r)).filter(s=>s.status==="fulfilled").map(s=>s.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const p=new M,m=new Date().toISOString().slice(0,10),f=document.querySelector(".blockquote-text"),y=document.querySelector(".quote-author"),c=JSON.parse(localStorage.getItem("quoteOfDay"));c&&c.date===m?(f.innerHTML=c.quote,y.innerHTML=c.author):p.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:m})),f.innerHTML=t.quote,y.innerHTML=t.author):console.log(t)});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",r=>{const o=r.target.closest(".group-list__item");o&&(console.log(o.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${o.dataset.name}</span>`)}),v()):console.warn("Елемент .group-list не знайдено.")});const O=({filter:t,name:e,imgURL:r})=>`
    <div
      class="group-list__item"
      data-name="${e}"
    >
      <img
        class="group-list__item-image"
        src="${r}"
      >
      <div class="group-list__item-image-filter"></div>
      <div class="group-list__item-title">
        ${e}
      </div>
      <div class="group-list__item-subtitle">
        ${t}
      </div>
    </div>
  `,k=t=>t.map(O).join(""),C=t=>{const e=document.querySelector(".group-list");if(!e)return;const r=k(t);e.innerHTML=r},I=async t=>await p.getExercisesByFilter(t),v=async({filter:t="Muscles",page:e=1,limit:r=12}={})=>{const o=await I({filter:t,page:e,limit:r});C(o.results)},b=Array.from(document.querySelectorAll(".exercises-menu-button")),$=t=>{const e=document.querySelector(".section-title");e.innerHTML="Exercises",b.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),v({filter:t.textContent})};b.forEach(t=>t.addEventListener("click",()=>$(t)));const w=document.querySelector(".favorites"),_=document.querySelector(".pagination"),g=10;let u=1;function E(t,e=1){const r=(e-1)*g,o=r+g,i=t.slice(r,o).map(n=>`
<li class="exercise-card" data-id=${n._id}>
  <div class="top-row">
    <div class="rating">
        <p class="badge">WORKOUT</p>
        <button class="delete-btn" onclick="removeExercise('${n._id}')">
            <svg class="trash-icon" width="18" height="18">
                <use href="./img/icons.svg#icon-trash"></use>
            </svg>
        </button>
    </div>
    <button class="start">
        Start
        <svg class="icon-arrow-right" width="13" height="13">
            <use href="./img/icons.svg#icon-arrow-right"></use>
        </svg>
    </button>
  </div>
  <div class="exercise-info">
    <svg class="arrow-running-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick-figure"></use>
    </svg>
    <p class="exercise-name">${n.name.split(" ").slice(0,2).join(" ")}</p>
  </div>
  <div class="details">
    <p>Burned calories: <strong>${n.burnedCalories}</strong></p>
    <p>Body part: <strong>${n.bodyPart}</strong></p>
    <p>Target: <strong>${n.target}</strong></p>
  </div>
</li>`).join("");w.innerHTML=i}function L(t){const e=Math.ceil(t.length/g);let r="";for(let o=1;o<=e;o++)r+=`
            <button class="pagination-button ${o===u?"active":""}" data-page="${o}">
                ${o}
            </button>
        `;_.innerHTML=r,document.querySelectorAll(".pagination-button").forEach(o=>{o.addEventListener("click",()=>{u=Number(o.dataset.page),E(t,u),L(t)})})}function B(t){E(t,u),L(t)}if(window.location.href.endsWith("/favorites.html")){const t=JSON.parse(localStorage.getItem("favorites"));t&&Array.isArray(t)?B(t):w.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>"}const l=getComputedStyle(document.documentElement),D=l.getPropertyValue("--color-popup-bg").trim(),H=l.getPropertyValue("--color-popup-txt").trim(),A=l.getPropertyValue("--color-popup-main").trim(),F=l.getPropertyValue("--color-popup-line").trim();class N{constructor(){a.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:F,backgroundColor:D,titleColor:A,messageColor:H,theme:"dark"})}success(e,r){a.success({title:e,message:r})}error(e,r){a.error({title:e,message:r})}warning(e,r){a.warning({title:e,message:r})}settings(e){a.settings(e)}}const d=new N;if(!window.location.href.endsWith("/favorites.html")){const t=document.querySelector(".footer-form");t.addEventListener("submit",async e=>{e.preventDefault();const r=t.elements.email.value;if(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r)){try{const s=await p.orderSubscription(r);d.success("Success","Subscription successful!")}catch(s){d.error("Error","Subscription failed: "+s)}t.elements.email.value=""}else d.warning("Warning","Please enter a valid email address.")})}
//# sourceMappingURL=main-DfddCEw5.js.map
