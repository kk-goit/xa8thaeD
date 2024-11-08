import{a as q,i as a}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const b=document.querySelector(".mobile-menu"),T=document.querySelector(".mobile-menu-open-btn"),P=document.querySelector(".mobile-menu-close-btn");T.addEventListener("click",()=>{b.classList.add("is-open")});P.addEventListener("click",()=>{b.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const r=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",r.endsWith(e.getAttribute("href").substring(1)))})});const M={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},O=["Body parts","Muscles","Equipment"];class k{constructor(){this.api=q.create(M),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:s}=e.response;return s.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(t){switch(t.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(t)}}}async addRating(e,t,s,o){const n={rate:t,email:s,review:o};try{return await this.api.patch(`/exercises/${e}/rating`,n)}catch(i){switch(i.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(i)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(t){switch(t.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(t)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!O.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(t){switch(t.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(t)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(t){switch(t.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(t)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const t=e.map(async o=>await this.getExerciseById(o));return(await Promise.allSettled(t)).filter(o=>o.status==="fulfilled").map(o=>o.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const f=new k,y=new Date().toISOString().slice(0,10),h=document.querySelector(".blockquote-text"),v=document.querySelector(".quote-author"),c=JSON.parse(localStorage.getItem("quoteOfDay"));c&&c.date===y?(h.innerHTML=c.quote,v.innerHTML=c.author):f.getQuote().then(r=>{typeof r!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:r.quote,author:r.author,date:y})),h.innerHTML=r.quote,v.innerHTML=r.author):console.log(r)});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".group-list"),e=document.querySelector(".section-title");r?(r.addEventListener("click",t=>{const s=t.target.closest(".group-list__item");s&&(console.log(s.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${s.dataset.name}</span>`)}),E()):console.warn("Елемент .group-list не знайдено.")});const C=({filter:r,name:e,imgURL:t})=>`
    <div
      class="group-list__item"
      data-name="${e}"
    >
      <img
        class="group-list__item-image"
        src="${t}"
      >
      <div class="group-list__item-image-filter"></div>
      <div class="group-list__item-title">
        ${e}
      </div>
      <div class="group-list__item-subtitle">
        ${r}
      </div>
    </div>
  `,I=r=>r.map(C).join(""),$=r=>{const e=document.querySelector(".group-list");if(!e)return;const t=I(r);e.innerHTML=t},_=async r=>await f.getExercisesByFilter(r),E=async({filter:r="Muscles",page:e=1,limit:t=12}={})=>{const s=await _({filter:r,page:e,limit:t});$(s.results)},L=Array.from(document.querySelectorAll(".exercises-menu-button")),B=r=>{const e=document.querySelector(".section-title");e.innerHTML="Exercises",L.forEach(t=>{t.classList.remove("active")}),r.classList.add("active"),E({filter:r.textContent})};L.forEach(r=>r.addEventListener("click",()=>B(r)));const w=document.querySelector(".favorites"),D=document.querySelector(".pagination"),m=10;let u=1;function S(r,e=1){const t=(e-1)*m,s=t+m,n=r.slice(t,s).map(i=>`
<li class="exercise-card" data-id=${i._id}>
  <div class="top-row">
    <div class="rating">
        <p class="badge">WORKOUT</p>
        <button class="delete-btn" onclick="removeExercise('${i._id}')">
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
    <p class="exercise-name">${i.name.split(" ").slice(0,2).join(" ")}</p>
  </div>
  <div class="details">
    <p>Burned calories: <strong>${i.burnedCalories}</strong></p>
    <p>Body part: <strong>${i.bodyPart}</strong></p>
    <p>Target: <strong>${i.target}</strong></p>
  </div>
</li>`).join("");w.innerHTML=n}function x(r){const e=Math.ceil(r.length/m);let t="";for(let s=1;s<=e;s++)t+=`
            <button class="pagination-button ${s===u?"active":""}" data-page="${s}">
                ${s}
            </button>
        `;D.innerHTML=t,document.querySelectorAll(".pagination-button").forEach(s=>{s.addEventListener("click",()=>{u=Number(s.dataset.page),S(r,u),x(r)})})}function H(r){S(r,u),x(r)}const d=JSON.parse(localStorage.getItem("favorites"));d&&Array.isArray(d)?H(d):w.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";const l=getComputedStyle(document.documentElement),A=l.getPropertyValue("--color-popup-bg").trim(),F=l.getPropertyValue("--color-popup-txt").trim(),N=l.getPropertyValue("--color-popup-main").trim(),j=l.getPropertyValue("--color-popup-line").trim();class G{constructor(){a.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:j,backgroundColor:A,titleColor:N,messageColor:F,theme:"dark"})}success(e,t){a.success({title:e,message:t})}error(e,t){a.error({title:e,message:t})}warning(e,t){a.warning({title:e,message:t})}settings(e){a.settings(e)}}const g=new G,p=document.querySelector(".footer-form");p.addEventListener("submit",async r=>{r.preventDefault();const e=p.elements.email.value;if(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){try{const s=await f.orderSubscription(e);g.success("Success","Subscription successful!")}catch(s){g.error("Error","Subscription failed: "+s)}p.elements.email.value=""}else g.warning("Warning","Please enter a valid email address.")});
//# sourceMappingURL=main-CqGlPhV6.js.map
