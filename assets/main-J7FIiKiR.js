import{a as re,i as b}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const I=document.querySelector(".mobile-menu"),ie=document.querySelector(".mobile-menu-open-btn"),ne=document.querySelector(".mobile-menu-close-btn");ie.addEventListener("click",()=>{I.classList.add("is-open")});ne.addEventListener("click",()=>{I.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const ae={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},oe=["Body parts","Muscles","Equipment"];class ce{constructor(){this.api=re.create(ae),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:i}=e.response;return i.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,i,r){const n={rate:s,email:i,review:r};try{return await this.api.patch(`/exercises/${e}/rating`,n)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!oe.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async r=>await this.getExerciseById(r));return(await Promise.allSettled(s)).filter(r=>r.status==="fulfilled").map(r=>r.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const f=new ce,A=new Date().toISOString().slice(0,10),T=document.querySelector(".blockquote-text"),q=document.querySelector(".quote-author"),_=JSON.parse(localStorage.getItem("quoteOfDay"));_&&_.date===A?(T.innerHTML=_.quote,q.innerHTML=_.author):f.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:A})),T.innerHTML=t.quote,q.innerHTML=t.author):console.log(t)}).catch(()=>{T.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",q.innerHTML="Tom Brady"});let R=null;function le(){B=1,x=1,O=1}function de(){x=1}function C(t){R!==t&&(le(),R=t)}let B=1;function ue(t){B=t}function N(){return B}async function pe(t,e,...s){g(t,e,ue,N,...s)}let x=1;function me(t){x=t}function G(){return x}async function ge(t,e,...s){g(t,e,me,G,...s)}let O=1;function he(t){O=t}function V(){return O}async function fe(t,e,...s){g(t,e,he,V,...s)}function g(t,e,s,i,...r){const n=document.querySelector(".pagination");n.innerHTML="";const a=i(),p=te();n.appendChild(p);const w=5;let m=Math.max(1,a-Math.floor(w/2)),y=Math.min(t,m+w-1);y-m+1<w&&(m=Math.max(1,y-w+1)),m>1&&(M(1),m>2&&F());for(let o=m;o<=y;o++)M(o);y<t&&(y<t-1&&F(),M(t));const ee=se();n.appendChild(ee);function M(o){const v=document.createElement("button");v.textContent=o,v.classList.add("page-button"),o===a&&v.classList.add("active"),v.addEventListener("click",async()=>{s(o),await e(...r),g(t,e,s,i,...r)}),n.appendChild(v)}function F(){const o=document.createElement("span");o.textContent="...",o.classList.add("ellipsis"),n.appendChild(o)}function te(){const o=document.createElement("button");return o.innerHTML="←",o.classList.add("page-button"),o.disabled=a===1,o.addEventListener("click",async()=>{a>1&&(s(a-1),await e(...r),g(t,e,s,i,...r))}),o}function se(){const o=document.createElement("button");return o.innerHTML="→",o.classList.add("page-button"),o.disabled=a===t,o.addEventListener("click",async()=>{a<t&&(s(a+1),await e(...r),g(t,e,s,i,...r))}),o}}const c="/xa8thaeD/assets/icons-DfGzQ-YE.svg";class D{constructor(e,s=null){this.parentModal=s,this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=e,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${c}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",this.handleClose),document.body.appendChild(this.backdrop)}openModal(){if(this.parentModal)this.parentModal.backdrop.classList.remove("is-open");else{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${e}px`}document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}toggleModalVisibility(){this.backdrop.classList.toggle("is-open")}closeModal(e){!e||e.type==="keydown"&&e.key!=="Escape"||!this.backdrop.classList.contains("is-open")||e.target.closest(".modal-content")||(document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.parentModal?this.parentModal.backdrop.classList.add("is-open"):(document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight=""),this.backdrop.remove())}}const S=getComputedStyle(document.documentElement),ye=S.getPropertyValue("--color-popup-bg").trim(),ve=S.getPropertyValue("--color-popup-txt").trim(),be=S.getPropertyValue("--color-popup-main").trim(),Le=S.getPropertyValue("--color-popup-line").trim();class Ee{constructor(){b.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:Le,backgroundColor:ye,titleColor:be,messageColor:ve,theme:"dark"})}success(e,s){b.success({title:e,message:s})}error(e,s){b.error({title:e,message:s})}warning(e,s){b.warning({title:e,message:s})}settings(e){b.settings(e)}}const L=new Ee;class we{constructor(e,s=null){this.exerciseId=e,this.parentModal=s;const i=this.getFormHTML(e);this.modal=new D(i.outerHTML,s),this.modal.openModal();const r=this.modal.modal.querySelector(".rating-form"),n=r.querySelector(".rating-form__rating");r.addEventListener("submit",async a=>this.handleSubmit(a)),n.addEventListener("click",a=>this.handleRatingClick(a))}getFormHTML(e){const s=document.createElement("div");s.classList.add("rating-form__container");const i=document.createElement("form");i.classList.add("rating-form");const r=`
            <h2 class="rating-form__title">Rating</h2>
            <div class="rating-form__rating">
                <span class="rating-form__value">0.0</span>
                <input type="radio" id="rating-1" class="visually-hidden" name="rating" value="1" required>
                <label for="rating-1">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-2" class="visually-hidden" name="rating" value="2" required>
                <label for="rating-2">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-3" class="visually-hidden" name="rating" value="3" required>
                <label for="rating-3">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-4" class="visually-hidden" name="rating" value="4" required>
                <label for="rating-4">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-5" class="visually-hidden" name="rating" value="5" required>
                <label for="rating-5">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
            </div>
            <input type="email" class="footer-input rating-form__email" name="email" placeholder="Email" required>
            <textarea class="footer-input rating-form__comment" name="comment" placeholder="Your comment" required></textarea>
            <input type="hidden" value="${e}" name="exerciseId">
            <button type="submit" class="footer-button rating-form__send">Send</button>
            `;return i.innerHTML=r,s.appendChild(i),s}handleRatingClick(e){e.stopPropagation();const s=e.target;if(s.tagName!=="INPUT")return;const i=s.value,r=e.currentTarget.querySelectorAll("label");r.forEach(a=>{a.classList.remove("active")});for(let a=0;a<i;a++)r[a].classList.add("active");const n=e.currentTarget.querySelector(".rating-form__value");n.textContent=i+".0"}handleEscapeKey(e){e.key==="Escape"&&(this.modal.closeModal(),this.parentModal&&this.parentModal.toggleModalVisibility(),document.removeEventListener("keydown",this.handleEsc))}async handleSubmit(e){e.preventDefault();const s=e.target,i=s.elements.exerciseId.value,r=parseInt(s.elements.rating.value),n=s.elements.email.value,a=s.elements.comment.value;if(!r||!n||!a){L.error("Error:","All fields are required");return}if(!n.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){L.error("Error:","Invalid email");return}try{const p=await f.addRating(i,r,n,a);p instanceof Object?(L.success("Success:","Rating added successfully"),this.modal.backdrop.classList.remove("is-open"),this.parentModal&&(this.parentModal.closeModal(),J(i)),this.modal.closeModal()):L.error("Error:",p)}catch(p){L.error("Error:",p)}}}function J(t){Te(t).then(e=>{const s=_e(e),i=new D(s),r=i.modal.querySelector(".add-to-favorite-btn"),n=i.modal.querySelector(".give-rating-btn");r.addEventListener("click",a=>{a.stopPropagation(),U(t)?j(t):Me(t),r.innerHTML=W(t)}),n.addEventListener("click",a=>{i.toggleModalVisibility(),new we(t,i)}),i.openModal()})}function _e(t){return`
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${t.gifUrl}" alt="${t.name}" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${t.name}</h3>
                <div class="exercise-info__rating">
                    ${Se(t.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${xe(t)}
                </ul>
               <p class="exercise-info__description">${t.description}</p>
            </div>
            <div class="exercise-info__actions">
                <button class="exercise-info__button add-to-favorite-btn" data-id="${t._id}">
                    ${W(t._id)}
                </button>
                <button class="exercise-info__button give-rating-btn">Give a rating</button>
            </div>
        </div>
    `}function xe(t){const e=[];return t.target&&e.push(`<li><span>Target</span><span class="details-target">${t.target}</span></li>`),t.bodyPart&&e.push(`<li><span>Body Part</span><span class="details-body-part">${t.bodyPart}</span></li>`),t.equipment&&e.push(`<li><span>Equipment</span> ${t.equipment}</li>`),t.popularity&&e.push(`<li><span>Popular</span> ${t.popularity}</li>`),t.burnedCalories&&e.push(`<li><span>Burned Calories</span><span class="details-calories">${t.burnedCalories}</span></li>`),e.join("")}function Se(t){const e=[];t=t.toFixed(1);const s=Math.floor(t),i=t-s,r=`<span class="exercise-info__rating-text">${t}</span>`;for(let n=0;n<s;n++)e.push(`<svg width="18" height="18">
                <use class="rating-star__full" href="${c}#icon-star-18"></use>
            </svg>`);if(i>0){const n=i*100;e.push(`<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${n}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="${c}#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`)}for(;e.length<5;)e.push(`<svg width="18" height="18">
                <use class="rating-star__empty" href="${c}#icon-star-18"></use>
            </svg>`);return`${r}<div class="exercise-info__rating-stars">${e.join("")}</div>`}function Me(t){const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t]));else{const s=JSON.parse(e);if(s.includes(t))return;s.push(t),localStorage.setItem("favorites",JSON.stringify(s))}}function j(t){const e=localStorage.getItem("favorites");if(!e)return;const i=JSON.parse(e).filter(n=>n!==t);localStorage.setItem("favorites",JSON.stringify(i));const r=document.querySelector(".favorites");if(r){const n=r.querySelector(`.exercise-card[data-id="${t}"]`);n&&n.remove()}}function U(t){const e=localStorage.getItem("favorites");return e?JSON.parse(e).includes(t):!1}function W(t){const e=U(t);return`
        ${e?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${c}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function Te(t){return await f.getExerciseById(t)}function P(t){t.innerHTML='<div class="loader"></div>'}function Y(t){const e=t.querySelector(".loader");e&&e.remove()}const k=document.querySelector(".exercises-form"),u=document.querySelector(".group-list");let l="muscles",d="",h="";k&&k.addEventListener("submit",qe);function z(){return screen.width>767?10:8}function qe(t){if(t.preventDefault(),h=t.target.elements.search.value.trim(),console.log(h),!h){alert("Please, enter a search words");return}K(),t.target.elements.search.value=""}async function K(){const t=N();P(u);const e=z(),s=await f.getExercises({page:t,limit:e,[l]:d,keyword:h});console.group(t,"searchListOfExercises",l,d,h,s,s.totalPages),Z(u,s.results),C("search"),pe(s.totalPages,K,l,d,h),Y(u)}async function Q(t,e){const s=V();switch(t){case"muscles":l="muscles";break;case"equipment":l="equipment";break;case"bodypart":l="bodypart";break}d=e,P(u);try{const i=z(),r=await f.getExercises({page:s,limit:i,[l]:d});k.classList.remove("visually-hidden"),console.group(s,"findListOfExercises",l,d,r,r.totalPages),Z(u,r.results),C("exercises"),fe(r.totalPages,Q,l,d)}catch(i){Ce(),console.log(i)}finally{Y(u),console.log("Buy")}}function Z(t,e){const s=t.classList.contains("favorites"),i=e.map(n=>`
<li class="exercise-card" data-id=${n._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        ${s?`
            <button type="button" class="remove-favorite" data-id=${n._id}>
                <svg width="16" height="16">
                    <use class="remove-favorite__icon" href="${c}#icon-trash"></use>
                </svg>
            </button>`:`<div class="rating-star">
                <span class='text-star'>${n.rating}</span>
                    <svg class="star-icon" width="18" height="18">
                        <use href="${c}#icon-star-18"></use>
                    </svg>
            </div>
        `}
        </div>
        <button class="start">
            Start
            <svg class="icon-arrow-right" width="13" height="13">
                    <use href="${c}#icon-arrow-right"></use>
                </svg>
        </button>
    </div>
    <div class="exercise-info">
    <div class="icon-wrapper">
    <svg class="arrow-running-icon" width="14" height="16">                     
        <use href="${c}#icon-running-stick-figure"></use>
    </svg>
</div>
        <p class="exercise-name">${n.name}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span class="details-calories">${n.burnedCalories} / ${n.time} min</span></p>
        <p>Body part: <span class="details-calories">${n.bodyPart}</span></p>
        <p>Target: <span class="details-target">${n.target}</span></p>
    </div>
</li>`).join("");t.innerHTML=i,document.querySelectorAll(".exercise-card .start").forEach(n=>{n.addEventListener("click",ke)}),s&&document.querySelectorAll(".remove-favorite").forEach(a=>{a.addEventListener("click",$e)})}function ke(t){const e=t.target.closest(".exercise-card").dataset.id;J(e)}function $e(t){const s=t.target.closest(".exercise-card").dataset.id;j(s)}function Ce(){u.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".exercises-input"),e=document.querySelector(".clear-button");e.style.display="none",t.addEventListener("input",()=>{t.value.trim()!==""?e.style.display="flex":e.style.display="none"}),e.addEventListener("click",()=>{t.value="",e.style.display="none",t.focus()})});let E="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",s=>{const i=s.target.closest(".group-list__item");i&&(Q(E,i.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${i.dataset.name}</span>`)}),H()):console.warn("Елемент .group-list не знайдено.")});const Be=({filter:t,name:e,imgURL:s})=>`
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
  `,Oe=t=>t.map(Be).join(""),Pe=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Oe(t);e.innerHTML=s},He=async t=>await f.getExercisesByFilter(t),H=async(t="Muscles",e=1,s=screen.width>767?12:9)=>{t=t.trim(),e=G(),E=t.toLowerCase(),E==="body parts"&&(E="bodypart"),P(document.querySelector(".group-list"));const i=await He({filter:t,page:e,limit:s});Pe(i.results),C("category"),console.group(e,"renderGroupListByFilter",E,t,i.totalPages),ge(i.totalPages,H,t)},X=Array.from(document.querySelectorAll(".exercises-menu-button")),Fe=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",X.forEach(i=>{i.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),de(),H(t.textContent)};X.forEach(t=>t.addEventListener("click",()=>Fe(t)));const $=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?$.style.display="flex":$.style.display="none"});$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{Z as a,Y as b,P as r,L as t,f as y};
//# sourceMappingURL=main-J7FIiKiR.js.map
