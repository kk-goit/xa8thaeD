import{a as ne}from"./vendor-v1Cmh7Ux.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const N=document.querySelector(".mobile-menu"),re=document.querySelector(".mobile-menu-open-btn"),ie=document.querySelector(".mobile-menu-close-btn");re.addEventListener("click",()=>{N.classList.add("is-open")});ie.addEventListener("click",()=>{N.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(t=>{t.closest(".nav-item").classList.toggle("active",e.endsWith(t.getAttribute("href").substring(1)))})});const oe={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},ae=["Body parts","Muscles","Equipment"];class ce{constructor(){this.api=ne.create(oe),this.api.interceptors.response.use(t=>t.data,t=>Promise.reject(t))}handleDefaultError(t){switch(t.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(t.response){const{data:n}=t.response;return n.message||"Something unexpected happened"}else return t.request?t.request.statusText:`Error: ${t.message}`}}async getExercises(t={}){if(!t.page||!t.limit||typeof t.page!="number"||typeof t.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:t})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(t,s,n,r){const i={rate:s,email:n,review:r};try{return await this.api.patch(`/exercises/${t}/rating`,i)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(t){try{return await this.api.get(`/exercises/${t}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(t={}){if(!t.page||!t.limit||typeof t.page!="number"||typeof t.limit!="number")return"Please specify page and items per page";if(!ae.includes(t.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:t})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(t){if(!t)return"Email is not provided";try{return await this.api.post("/subscription",{email:t})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(t){if(!t.length)return"Please specify list of exercises to get";const s=t.map(async r=>await this.getExerciseById(r));return(await Promise.allSettled(s)).filter(r=>r.status==="fulfilled").map(r=>r.value)}async getQuote(){try{return await this.api.get("/quote")}catch(t){return this.handleDefaultError(t)}}}const g=new ce,G=new Date().toISOString().slice(0,10),M=document.querySelector(".blockquote-text"),q=document.querySelector(".quote-author"),E=JSON.parse(localStorage.getItem("quoteOfDay"));E&&E.date===G?(M.innerHTML=E.quote,q.innerHTML=E.author):g.getQuote().then(e=>{typeof e!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:e.quote,author:e.author,date:G})),M.innerHTML=e.quote,q.innerHTML=e.author):console.log(e)}).catch(()=>{M.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",q.innerHTML="Tom Brady"});let I=null;function le(){C=1,w=1,P=1}function de(){w=1}function B(e){I!==e&&(le(),I=e)}let C=1;function ue(e){C=e}function R(){return C}async function pe(e,t,...s){f(e,t,ue,R,...s)}let w=1;function fe(e){w=e}function J(){return w}async function he(e,t,...s){f(e,t,fe,J,...s)}let P=1;function ge(e){P=e}function D(){return P}async function me(e,t,...s){f(e,t,ge,D,...s)}function f(e,t,s,n,...r){const i=document.querySelector(".pagination");i.innerHTML="";const a=n(),Z=te();i.appendChild(Z);const b=5;let p=Math.max(1,a-Math.floor(b/2)),m=Math.min(e,p+b-1);m-p+1<b&&(p=Math.max(1,m-b+1)),p>1&&(T(1),p>2&&A());for(let o=p;o<=m;o++)T(o);m<e&&(m<e-1&&A(),T(e));const ee=se();i.appendChild(ee);function T(o){const y=document.createElement("button");y.textContent=o,y.classList.add("page-button"),o===a&&y.classList.add("active"),y.addEventListener("click",async()=>{s(o),await t(...r),f(e,t,s,n,...r)}),i.appendChild(y)}function A(){const o=document.createElement("span");o.textContent="...",o.classList.add("ellipsis"),i.appendChild(o)}function te(){const o=document.createElement("button");return o.innerHTML="←",o.classList.add("page-button"),o.disabled=a===1,o.addEventListener("click",async()=>{a>1&&(s(a-1),await t(...r),f(e,t,s,n,...r))}),o}function se(){const o=document.createElement("button");return o.innerHTML="→",o.classList.add("page-button"),o.disabled=a===e,o.addEventListener("click",async()=>{a<e&&(s(a+1),await t(...r),f(e,t,s,n,...r))}),o}}const l="/xa8thaeD/assets/icons-DfGzQ-YE.svg";class ye{constructor(t){this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=t,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${l}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",s=>{s.key==="Escape"&&this.closeModal(s)}),document.body.appendChild(this.backdrop)}openModal(){const t=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${t}px`,document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}closeModal(t){t.target.closest(".modal-content")||(this.closeButton.removeEventListener("click",this.handleClose),this.backdrop.removeEventListener("click",this.handleClose),document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.backdrop.remove(),document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight="")}}function ve(e){we(e).then(t=>{const s=Le(t),n=new ye(s),r=n.modal.querySelector(".add-to-favorite-btn"),i=n.modal.querySelector(".give-rating-btn");r.addEventListener("click",a=>{a.stopPropagation(),W(e)?j(e):xe(e),r.innerHTML=U(e)}),i.addEventListener("click",()=>{console.log("Give a rating")}),n.openModal()})}function Le(e){return`
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${e.gifUrl}" alt="${e.name}" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${e.name}</h3>
                <div class="exercise-info__rating">
                    ${Ee(e.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${be(e)}
                </ul>
                <p class="exercise-info__description">${e.description}</p>
            </div>
            <div class="exercise-info__actions">
                <button class="exercise-info__button add-to-favorite-btn" data-id="${e._id}">
                    ${U(e._id)}
                </button>
                <button class="exercise-info__button give-rating-btn">Give a rating</button>
            </div>
        </div>
    `}function be(e){const t=[];return e.target&&t.push(`<li><span>Target</span> ${e.target}</li>`),e.bodyPart&&t.push(`<li><span>Body Part</span> ${e.bodyPart}</li>`),e.equipment&&t.push(`<li><span>Equipment</span> ${e.equipment}</li>`),e.popularity&&t.push(`<li><span>Popular</span> ${e.popularity}</li>`),e.burnedCalories&&t.push(`<li><span>Burned Calories</span> ${e.burnedCalories}</li>`),t.join("")}function Ee(e){const t=[];e=e.toFixed(1);const s=Math.floor(e),n=e-s,r=`<span class="exercise-info__rating-text">${e}</span>`;for(let i=0;i<s;i++)t.push(`<svg width="18" height="18">
                <use class="rating-star__full" href="${l}#icon-star-18"></use>
            </svg>`);if(n>0){const i=n*100;t.push(`<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${i}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="${l}#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`)}for(;t.length<5;)t.push(`<svg width="18" height="18">
                <use class="rating-star__empty" href="${l}#icon-star-18"></use>
            </svg>`);return`${r}<div class="exercise-info__rating-stars">${t.join("")}</div>`}function xe(e){const t=localStorage.getItem("favorites");if(!t)localStorage.setItem("favorites",JSON.stringify([e]));else{const s=JSON.parse(t);if(s.includes(e))return;s.push(e),localStorage.setItem("favorites",JSON.stringify(s))}}function j(e){const t=localStorage.getItem("favorites");if(!t)return;const n=JSON.parse(t).filter(i=>i!==e);localStorage.setItem("favorites",JSON.stringify(n));const r=document.querySelector(".favorites");if(r){const i=r.querySelector(`.exercise-card[data-id="${e}"]`);i&&i.remove()}}function W(e){const t=localStorage.getItem("favorites");return t?JSON.parse(t).includes(e):!1}function U(e){const t=W(e);return`
        ${t?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${l}#${t?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function we(e){return await g.getExerciseById(e)}function S(e){e.innerHTML='<div class="loader"></div>'}function O(e){const t=e.querySelector(".loader");t&&t.remove()}const L=document.querySelector(".favorites"),Se=document.querySelector(".pagination"),$=10;let x=1;async function Y(e,t=1){const s=(t-1)*$,n=s+$,r=e.slice(s,n);if(!r.length){L.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";return}try{const i=await g.getExercisesByIdList(r);H(L,i)}finally{O(L)}}function Q(e){const t=Math.ceil(e.length/$);let s="";for(let n=1;n<=t;n++)s+=`
            <button class="pagination-button ${n===x?"active":""}" data-page="${n}">
                ${n}
            </button>
        `;Se.innerHTML=s,document.querySelectorAll(".pagination-button").forEach(n=>{n.addEventListener("click",()=>{x=Number(n.dataset.page),Y(e,x),Q(e)})})}function Te(e){Y(e,x),Q(e)}function Me(e){j(e)}const qe=document.querySelector(".favorites");if(qe){const e=JSON.parse(localStorage.getItem("favorites"));e&&Array.isArray(e)?(S(L),Te(e)):L.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>"}const k=document.querySelector(".exercises-form"),u=document.querySelector(".group-list");let c="muscles",d="",h="";k&&k.addEventListener("submit",$e);function V(){return screen.width>767?10:8}function $e(e){if(e.preventDefault(),h=e.target.elements.search.value.trim(),console.log(h),!h){alert("Please, enter a search words");return}K(),e.target.elements.search.value=""}async function K(){const e=R();S(u);const t=V(),s=await g.getExercises({page:e,limit:t,[c]:d,keyword:h});console.group(e,"searchListOfExercises",c,d,h,s,s.totalPages),H(u,s.results),B("search"),pe(s.totalPages,K,c,d,h),O(u)}async function z(e,t){const s=D();switch(e){case"muscles":c="muscles";break;case"equipment":c="equipment";break;case"bodypart":c="bodypart";break}d=t,S(u);try{const n=V(),r=await g.getExercises({page:s,limit:n,[c]:d});k.classList.remove("visually-hidden"),console.group(s,"findListOfExercises",c,d,r,r.totalPages),H(u,r.results),B("exercises"),me(r.totalPages,z,c,d)}catch(n){Be(),console.log(n)}finally{O(u),console.log("Buy")}}function H(e,t){const s=e.classList.contains("favorites"),n=t.map(i=>`
<li class="exercise-card" data-id=${i._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        ${s?`
            <button type="button" class="remove-favorite" data-id=${i._id}>
                <svg width="16" height="16">
                    <use class="remove-favorite__icon" href="${l}#icon-trash"></use>
                </svg>
            </button>`:`<div class="rating-star">
                <span class='text-star'>${i.rating}</span>
                    <svg class="star-icon" width="18" height="18">
                        <use href="${l}#icon-star-18"></use>
                    </svg>
            </div>
        `}
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
        <p class="exercise-name">${i.name.split(" ").slice(0,2).join(" ")}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span>${i.burnedCalories} / ${i.time} min</span></p>
        <p>Body part: <span>${i.bodyPart}</span></p>
        <p>Target: <span>${i.target}</span></p>
    </div>
</li>`).join("");e.innerHTML=n,document.querySelectorAll(".exercise-card .start").forEach(i=>{i.addEventListener("click",ke)}),s&&document.querySelectorAll(".remove-favorite").forEach(a=>{a.addEventListener("click",_e)})}function ke(e){const t=e.target.closest(".exercise-card").dataset.id;ve(t)}function _e(e){const s=e.target.closest(".exercise-card").dataset.id;Me(s)}function Be(){u.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".exercises-input"),t=document.querySelector(".clear-button");t.style.display="none",e.addEventListener("input",()=>{e.value.trim()!==""?t.style.display="flex":t.style.display="none"}),t.addEventListener("click",()=>{e.value="",t.style.display="none",e.focus()})});let v="";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".group-list"),t=document.querySelector(".section-title");e?(e.addEventListener("click",s=>{const n=s.target.closest(".group-list__item");n&&(z(v,n.dataset.name),t.innerHTML=`Exercises / <span class='exercises-category'>${n.dataset.name}</span>`)}),F()):console.warn("Елемент .group-list не знайдено.")});const Ce=({filter:e,name:t,imgURL:s})=>`
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
  `,Pe=e=>e.map(Ce).join(""),Oe=e=>{const t=document.querySelector(".group-list");if(!t)return;const s=Pe(e);t.innerHTML=s},He=async e=>await g.getExercisesByFilter(e),F=async(e="Muscles",t=1,s=screen.width>767?12:9)=>{e=e.trim(),t=J(),v=e.toLowerCase(),v==="body parts"&&(v="bodypart"),S(document.querySelector(".group-list"));const n=await He({filter:e,page:t,limit:s});Oe(n.results),B("category"),console.group(t,"renderGroupListByFilter",v,e,n.totalPages),he(n.totalPages,F,e)},X=Array.from(document.querySelectorAll(".exercises-menu-button")),Fe=e=>{const t=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");t.innerHTML="Exercises",X.forEach(n=>{n.classList.remove("active")}),e.classList.add("active"),s.classList.add("visually-hidden"),de(),F(e.textContent)};X.forEach(e=>e.addEventListener("click",()=>Fe(e)));const _=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?_.style.display="flex":_.style.display="none"});_.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{g as y};
//# sourceMappingURL=main-DtXXJIkG.js.map
