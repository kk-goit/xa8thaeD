import{a as z}from"./vendor-v1Cmh7Ux.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const H=document.querySelector(".mobile-menu"),X=document.querySelector(".mobile-menu-open-btn"),Z=document.querySelector(".mobile-menu-close-btn");X.addEventListener("click",()=>{H.classList.add("is-open")});Z.addEventListener("click",()=>{H.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(t=>{t.closest(".nav-item").classList.toggle("active",e.endsWith(t.getAttribute("href").substring(1)))})});const ee={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},te=["Body parts","Muscles","Equipment"];class se{constructor(){this.api=z.create(ee),this.api.interceptors.response.use(t=>t.data,t=>Promise.reject(t))}handleDefaultError(t){switch(t.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(t.response){const{data:n}=t.response;return n.message||"Something unexpected happened"}else return t.request?t.request.statusText:`Error: ${t.message}`}}async getExercises(t={}){if(!t.page||!t.limit||typeof t.page!="number"||typeof t.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:t})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(t,s,n,i){const r={rate:s,email:n,review:i};try{return await this.api.patch(`/exercises/${t}/rating`,r)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(t){try{return await this.api.get(`/exercises/${t}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(t={}){if(!t.page||!t.limit||typeof t.page!="number"||typeof t.limit!="number")return"Please specify page and items per page";if(!te.includes(t.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:t})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(t){if(!t)return"Email is not provided";try{return await this.api.post("/subscription",{email:t})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(t){if(!t.length)return"Please specify list of exercises to get";const s=t.map(async i=>await this.getExerciseById(i));return(await Promise.allSettled(s)).filter(i=>i.status==="fulfilled").map(i=>i.value)}async getQuote(){try{return await this.api.get("/quote")}catch(t){return this.handleDefaultError(t)}}}const v=new se,O=new Date().toISOString().slice(0,10),x=document.querySelector(".blockquote-text"),S=document.querySelector(".quote-author"),b=JSON.parse(localStorage.getItem("quoteOfDay"));b&&b.date===O?(x.innerHTML=b.quote,S.innerHTML=b.author):v.getQuote().then(e=>{typeof e!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:e.quote,author:e.author,date:O})),x.innerHTML=e.quote,S.innerHTML=e.author):console.log(e)}).catch(()=>{x.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",S.innerHTML="Tom Brady"});let P=null;function ne(){B=1,E=1,k=1}function ie(){E=1}function _(e){P!==e&&(ne(),P=e)}let B=1;function re(e){B=e}function F(){return B}async function oe(e,t,...s){p(e,t,re,F,...s)}let E=1;function ae(e){E=e}function A(){return E}async function ce(e,t,...s){p(e,t,ae,A,...s)}let k=1;function le(e){k=e}function G(){return k}async function de(e,t,...s){p(e,t,le,G,...s)}function p(e,t,s,n,...i){const r=document.querySelector(".pagination");r.innerHTML="";const a=n(),Y=V();r.appendChild(Y);const L=5;let u=Math.max(1,a-Math.floor(L/2)),g=Math.min(e,u+L-1);g-u+1<L&&(u=Math.max(1,g-L+1)),u>1&&(w(1),u>2&&C());for(let o=u;o<=g;o++)w(o);g<e&&(g<e-1&&C(),w(e));const Q=K();r.appendChild(Q);function w(o){const m=document.createElement("button");m.textContent=o,m.classList.add("page-button"),o===a&&m.classList.add("active"),m.addEventListener("click",async()=>{s(o),await t(...i),p(e,t,s,n,...i)}),r.appendChild(m)}function C(){const o=document.createElement("span");o.textContent="...",o.classList.add("ellipsis"),r.appendChild(o)}function V(){const o=document.createElement("button");return o.innerHTML="←",o.classList.add("page-button"),o.disabled=a===1,o.addEventListener("click",async()=>{a>1&&(s(a-1),await t(...i),p(e,t,s,n,...i))}),o}function K(){const o=document.createElement("button");return o.innerHTML="→",o.classList.add("page-button"),o.disabled=a===e,o.addEventListener("click",async()=>{a<e&&(s(a+1),await t(...i),p(e,t,s,n,...i))}),o}}const l="/xa8thaeD/assets/icons-DfGzQ-YE.svg";class ue{constructor(t){this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=t,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${l}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",s=>{s.key==="Escape"&&this.closeModal(s)}),document.body.appendChild(this.backdrop)}openModal(){const t=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${t}px`,document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}closeModal(t){t.target.closest(".modal-content")||(this.closeButton.removeEventListener("click",this.handleClose),this.backdrop.removeEventListener("click",this.handleClose),document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.backdrop.remove(),document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight="")}}function pe(e){ve(e).then(t=>{const s=he(t),n=new ue(s),i=n.modal.querySelector(".add-to-favorite-btn"),r=n.modal.querySelector(".give-rating-btn");i.addEventListener("click",a=>{a.stopPropagation(),N(e)?ye(e):me(e),i.innerHTML=R(e)}),r.addEventListener("click",()=>{console.log("Give a rating")}),n.openModal()})}function he(e){return`
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${e.gifUrl}" alt="${e.name}" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${e.name}</h3>
                <div class="exercise-info__rating">
                    ${ge(e.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${fe(e)}
                </ul>
                <p class="exercise-info__description">${e.description}</p>
            </div>
            <div class="exercise-info__actions">
                <button class="exercise-info__button add-to-favorite-btn" data-id="${e._id}">
                    ${R(e._id)}
                </button>
                <button class="exercise-info__button give-rating-btn">Give a rating</button>
            </div>
        </div>
    `}function fe(e){const t=[];return e.target&&t.push(`<li><span>Target</span> ${e.target}</li>`),e.bodyPart&&t.push(`<li><span>Body Part</span> ${e.bodyPart}</li>`),e.equipment&&t.push(`<li><span>Equipment</span> ${e.equipment}</li>`),e.popularity&&t.push(`<li><span>Popular</span> ${e.popularity}</li>`),e.burnedCalories&&t.push(`<li><span>Burned Calories</span> ${e.burnedCalories}</li>`),t.join("")}function ge(e){const t=[];e=e.toFixed(1);const s=Math.floor(e),n=e-s,i=`<span class="exercise-info__rating-text">${e}</span>`;for(let r=0;r<s;r++)t.push(`<svg width="18" height="18">
                <use class="rating-star__full" href="${l}#icon-star-18"></use>
            </svg>`);if(n>0){const r=n*100;t.push(`<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${r}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="${l}#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`)}for(;t.length<5;)t.push(`<svg width="18" height="18">
                <use class="rating-star__empty" href="${l}#icon-star-18"></use>
            </svg>`);return`${i}<div class="exercise-info__rating-stars">${t.join("")}</div>`}function me(e){const t=localStorage.getItem("favorites");if(!t)localStorage.setItem("favorites",JSON.stringify([e]));else{const s=JSON.parse(t);if(s.includes(e))return;s.push(e),localStorage.setItem("favorites",JSON.stringify(s))}}function ye(e){const t=localStorage.getItem("favorites");if(!t)return;const n=JSON.parse(t).filter(i=>i!==e);localStorage.setItem("favorites",JSON.stringify(n))}function N(e){const t=localStorage.getItem("favorites");return t?JSON.parse(t).includes(e):!1}function R(e){const t=N(e);return`
        ${t?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${l}#${t?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function ve(e){return await v.getExerciseById(e)}function q(e){e.innerHTML='<div class="loader"></div>'}function J(e){const t=e.querySelector(".loader");t&&t.remove()}const T=document.querySelector(".exercises-form"),f=document.querySelector(".group-list");let c="muscles",d="",h="";T&&T.addEventListener("submit",Le);function j(){return screen.width>767?10:8}function Le(e){if(e.preventDefault(),h=e.target.elements.search.value.trim(),console.log(h),!h){alert("Please, enter a search words");return}D(),e.target.elements.search.value=""}async function D(){const e=F();q(f);const t=j(),s=await v.getExercises({page:e,limit:t,[c]:d,keyword:h});console.group(e,"searchListOfExercises",c,d,h,s,s.totalPages),W(s.results),_("search"),oe(s.totalPages,D,c,d,h),J(f)}async function I(e,t){const s=G();switch(e){case"muscles":c="muscles";break;case"equipment":c="equipment";break;case"bodypart":c="bodypart";break}d=t,q(f);try{const n=j(),i=await v.getExercises({page:s,limit:n,[c]:d});T.classList.remove("visually-hidden"),console.group(s,"findListOfExercises",c,d,i,i.totalPages),W(i.results),_("exercises"),de(i.totalPages,I,c,d)}catch(n){Ee(),console.log(n)}finally{J(f),console.log("Buy")}}function W(e){const t=e.map(n=>`
<li class="exercise-card" data-id=${n._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        <div class="rating-star">
            <span class='text-star'>${n.rating}</span>
           <svg class="star-icon" width="18" height="18">
                    <use href="${l}#icon-star-18"></use>
                </svg>
        </div>
        </div>
        <button class="start">
            Start
            <svg class="icon-arrow-right" width="13" height="13">
                    <use href="${l}#icon-arrow-right"></use>
                </svg>
        </button>
    </div>
    <div class="exercise-info">
    <div class="icon-wrapper">
    <svg class="arrow-running-icon" width="14" height="16">                     
        <use href="${l}#icon-running-stick-figure"></use>
    </svg>
</div>
        <p class="exercise-name">${n.name.split(" ").slice(0,2).join(" ")}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span>${n.burnedCalories}</span></p>
        <p>Body part: <span>${n.bodyPart}</span></p>
        <p>Target: <span>${n.target}</span></p>
    </div>
</li>`).join("");f.innerHTML=t,document.querySelectorAll(".exercise-card .start").forEach(n=>{n.addEventListener("click",be)})}function be(e){const t=e.target.closest(".exercise-card").dataset.id;pe(t)}function Ee(){f.innerHTML=""}let y="";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".group-list"),t=document.querySelector(".section-title");e?(e.addEventListener("click",s=>{const n=s.target.closest(".group-list__item");n&&(I(y,n.dataset.name),t.innerHTML=`Exercises / <span class='exercises-category'>${n.dataset.name}</span>`)}),$()):console.warn("Елемент .group-list не знайдено.")});const we=({filter:e,name:t,imgURL:s})=>`
    <div
      class="group-list__item"
      data-name="${t}"
    >
      <img
        class="group-list__item-image"
        src="${s}"
      >
      <div class="group-list__item-image-filter"></div>
      <div class="group-list__item-title">
        ${t}
      </div>
      <div class="group-list__item-subtitle">
        ${e}
      </div>
    </div>
  `,xe=e=>e.map(we).join(""),Se=e=>{const t=document.querySelector(".group-list");if(!t)return;const s=xe(e);t.innerHTML=s},Te=async e=>await v.getExercisesByFilter(e),$=async(e="Muscles",t=1,s=screen.width>767?12:9)=>{t=A(),y=e.toLowerCase(),y==="body parts"&&(y="bodypart"),q(document.querySelector(".group-list"));const n=await Te({filter:e,page:t,limit:s});Se(n.results),_("category"),console.group(t,"renderGroupListByFilter",y,e,n.totalPages),ce(n.totalPages,$,e)},U=Array.from(document.querySelectorAll(".exercises-menu-button")),Me=e=>{const t=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");t.innerHTML="Exercises",U.forEach(n=>{n.classList.remove("active")}),e.classList.add("active"),s.classList.add("visually-hidden"),ie(),$(e.textContent)};U.forEach(e=>e.addEventListener("click",()=>Me(e)));const M=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?M.style.display="flex":M.style.display="none"});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{J as a,q as r,v as y};
//# sourceMappingURL=main-GLuCiMv7.js.map
