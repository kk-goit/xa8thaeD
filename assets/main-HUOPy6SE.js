import{a as ie,i as S}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const G=document.querySelector(".mobile-menu"),ne=document.querySelector(".mobile-menu-open-btn"),ae=document.querySelector(".mobile-menu-close-btn");ne.addEventListener("click",()=>{G.classList.add("is-open")});ae.addEventListener("click",()=>{G.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const oe={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},ce=["Body parts","Muscles","Equipment"];class le{constructor(){this.api=ie.create(oe),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:r}=e.response;return r.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,r,i){const n={rate:s,email:r,review:i};try{return await this.api.patch(`/exercises/${e}/rating`,n)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!ce.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async i=>await this.getExerciseById(i));return(await Promise.allSettled(s)).filter(i=>i.status==="fulfilled").map(i=>i.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const v=new le,T=getComputedStyle(document.documentElement),de=T.getPropertyValue("--color-popup-bg").trim(),ue=T.getPropertyValue("--color-popup-txt").trim(),me=T.getPropertyValue("--color-popup-main").trim(),pe=T.getPropertyValue("--color-popup-line").trim();class ge{constructor(){S.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:pe,backgroundColor:de,titleColor:me,messageColor:ue,theme:"dark"})}success(e,s){S.success({title:e,message:s})}error(e,s){S.error({title:e,message:s})}warning(e,s){S.warning({title:e,message:s})}settings(e){S.settings(e)}}const g=new ge,R=new Date().toISOString().slice(0,10),$=document.querySelector(".blockquote-text"),B=document.querySelector(".quote-author"),x=JSON.parse(localStorage.getItem("quoteOfDay"));x&&x.date===R?($.innerHTML=x.quote,B.innerHTML=x.author):v.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:R})),$.innerHTML=t.quote,B.innerHTML=t.author):g.error("Error",t)}).catch(()=>{$.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",B.innerHTML="Tom Brady"});let N=null;function he(){I=1,q=1,F=1}function fe(){q=1}function H(t){N!==t&&(he(),N=t)}let I=1;function ye(t){I=t}function V(){return I}async function ve(t,e,...s){y(t,e,ye,V,...s)}let q=1;function be(t){q=t}function U(){return q}async function Le(t,e,...s){y(t,e,be,U,...s)}let F=1;function Ee(t){F=t}function J(){return F}async function Se(t,e,...s){y(t,e,Ee,J,...s)}function y(t,e,s,r,...i){const n=document.querySelector(".pagination");n.innerHTML="";const a=r(),d=C();n.appendChild(d);const u=5;let l=Math.max(1,a-Math.floor(u/2)),m=Math.min(t,l+u-1);m-l+1<u&&(l=Math.max(1,m-u+1)),l>1&&(p(1),l>2&&L());for(let o=l;o<=m;o++)p(o);m<t&&(m<t-1&&L(),p(t));const b=k();n.appendChild(b);function p(o){const E=document.createElement("button");E.textContent=o,E.classList.add("page-button"),o===a&&E.classList.add("active"),E.addEventListener("click",async()=>{s(o),await e(...i),y(t,e,s,r,...i)}),n.appendChild(E)}function L(){const o=document.createElement("span");o.textContent="...",o.classList.add("ellipsis"),n.appendChild(o)}function C(){const o=document.createElement("button");return o.innerHTML="←",o.classList.add("page-button"),o.disabled=a===1,o.addEventListener("click",async()=>{a>1&&(s(a-1),await e(...i),y(t,e,s,r,...i))}),o}function k(){const o=document.createElement("button");return o.innerHTML="→",o.classList.add("page-button"),o.disabled=a===t,o.addEventListener("click",async()=>{a<t&&(s(a+1),await e(...i),y(t,e,s,r,...i))}),o}}const c="/xa8thaeD/assets/icons-DfGzQ-YE.svg";class j{constructor(e,s=null){this.parentModal=s,this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=e,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${c}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",this.handleClose),document.body.appendChild(this.backdrop)}openModal(){if(this.parentModal)this.parentModal.backdrop.classList.remove("is-open");else{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${e}px`}document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}toggleModalVisibility(){this.backdrop.classList.toggle("is-open")}closeModal(e){!e||e.type==="keydown"&&e.key!=="Escape"||!this.backdrop.classList.contains("is-open")||e.target.closest(".modal-content")||(document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.parentModal?this.parentModal.backdrop.classList.add("is-open"):(document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight=""),this.backdrop.remove())}}class we{constructor(e,s=null){this.exerciseId=e,this.parentModal=s;const r=this.getFormHTML(e);this.modal=new j(r.outerHTML,s),this.modal.openModal();const i=this.modal.modal.querySelector(".rating-form"),n=i.querySelector(".rating-form__rating");i.addEventListener("submit",async a=>this.handleSubmit(a)),n.addEventListener("click",a=>this.handleRatingClick(a))}getFormHTML(e){const s=document.createElement("div");s.classList.add("rating-form__container");const r=document.createElement("form");r.classList.add("rating-form");const i=`
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
            `;return r.innerHTML=i,s.appendChild(r),s}handleRatingClick(e){e.stopPropagation();const s=e.target;if(s.tagName!=="INPUT")return;const r=s.value,i=e.currentTarget.querySelectorAll("label");i.forEach(a=>{a.classList.remove("active")});for(let a=0;a<r;a++)i[a].classList.add("active");const n=e.currentTarget.querySelector(".rating-form__value");n.textContent=r+".0"}handleEscapeKey(e){e.key==="Escape"&&(this.modal.closeModal(),this.parentModal&&this.parentModal.toggleModalVisibility(),document.removeEventListener("keydown",this.handleEsc))}async handleSubmit(e){e.preventDefault();const s=e.target,r=s.elements.exerciseId.value,i=parseInt(s.elements.rating.value),n=s.elements.email.value,a=s.elements.comment.value;if(!i||!n||!a){g.error("Error:","All fields are required");return}if(!n.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){g.error("Error:","Invalid email");return}try{const d=await v.addRating(r,i,n,a);d instanceof Object?(g.success("Success:","Rating added successfully"),this.modal.backdrop.classList.remove("is-open"),this.parentModal&&(this.parentModal.closeModal(),z(r)),this.modal.closeModal()):g.error("Error:",d)}catch(d){g.error("Error:",d)}}}xe();function W(){const t=document.querySelector(".all-time"),e=document.querySelector(".calories"),s=Math.floor((localStorage.getItem("timer")||0)/60),r=localStorage.getItem("burntCalories")||0;t.innerText=`${s||0} min`,e.innerText=Math.floor(Number(r)/1e3||0).toString(),s>110&&(t.style.color="green")}W();function xe(){const t=localStorage.getItem("lastUpdate"),e=new Date().toDateString();t!==e&&(localStorage.setItem("lastUpdate",e),localStorage.setItem("timer",0),localStorage.setItem("burntCalories",0))}function z(t){Ce(t).then(e=>{const s=_e(e),r=new j(s),i=r.modal.querySelector(".add-to-favorite-btn"),n=r.modal.querySelector(".give-rating-btn"),a=r.modal.querySelector(".start-btn"),d=r.modal.querySelector(".timer");let u,l,m;i.addEventListener("click",b=>{b.stopPropagation(),K(t)?Y(t):qe(t),i.innerHTML=Q(t)}),n.addEventListener("click",b=>{r.toggleModalVisibility(),new we(t,r)}),a.addEventListener("click",b=>{if(a.classList.contains("start-btn"))a.classList.remove("start-btn"),a.classList.add("stop-btn"),a.textContent="STOP",u=Date.now(),m=setInterval(()=>{const p=Date.now();d.textContent=ke(Math.floor((p-u)/1e3))},1e3);else{a.classList.remove("stop-btn"),a.classList.add("start-btn"),a.textContent="START",l=Date.now(),clearInterval(m);const p=l-u,L=Math.floor(p/1e3),C=Number(localStorage.getItem("timer"))||0;localStorage.setItem("timer",C+L);const k=Number(localStorage.getItem("burntCalories"))||0;localStorage.setItem("burntCalories",k+L*(e.burnedCalories||0)),localStorage.setItem("lastUpdate",new Date().toDateString()),W()}}),r.openModal()})}function _e(t){return`
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${t.gifUrl}" alt="${t.name}" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${t.name}</h3>
                <div class="exercise-info__rating">
                    ${Te(t.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${Me(t)}
                </ul>
               <p class="exercise-info__description">${t.description}</p>
            </div>

            <div class="exercise-btn-block">
                <div class="timer-block">
                    <button class="exercise-info__button time-btn start-btn">START</button>
                    <p class="timer"></p>
                </div>

                <div class="exercise-info__actions">
                    <button class="exercise-info__button add-to-favorite-btn" data-id="${t._id}">
                        ${Q(t._id)}
                    </button>
                    <button class="exercise-info__button give-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    `}function Me(t){const e=[];return t.target&&e.push(`<li><span>Target</span><span class="details-target">${t.target}</span></li>`),t.bodyPart&&e.push(`<li><span>Body Part</span><span class="details-body-part">${t.bodyPart}</span></li>`),t.equipment&&e.push(`<li><span>Equipment</span> ${t.equipment}</li>`),t.popularity&&e.push(`<li><span>Popular</span> ${t.popularity}</li>`),t.burnedCalories&&e.push(`<li><span>Burned Calories</span><span class="details-calories">${t.burnedCalories}</span></li>`),e.join("")}function Te(t){const e=[];t=t.toFixed(1);const s=Math.floor(t),r=t-s,i=`<span class="exercise-info__rating-text">${t}</span>`;for(let n=0;n<s;n++)e.push(`<svg width="18" height="18">
                <use class="rating-star__full" href="${c}#icon-star-18"></use>
            </svg>`);if(r>0){const n=r*100;e.push(`<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${n}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="${c}#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`)}for(;e.length<5;)e.push(`<svg width="18" height="18">
                <use class="rating-star__empty" href="${c}#icon-star-18"></use>
            </svg>`);return`${i}<div class="exercise-info__rating-stars">${e.join("")}</div>`}function qe(t){const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t]));else{const s=JSON.parse(e);if(s.includes(t))return;s.push(t),localStorage.setItem("favorites",JSON.stringify(s))}}function Y(t){const e=localStorage.getItem("favorites");if(!e)return;const r=JSON.parse(e).filter(n=>n!==t);localStorage.setItem("favorites",JSON.stringify(r));const i=document.querySelector(".favorites");if(i){const n=i.querySelector(`.exercise-card[data-id="${t}"]`);n&&n.remove()}}function K(t){const e=localStorage.getItem("favorites");return e?JSON.parse(e).includes(t):!1}function Q(t){const e=K(t);return`
        ${e?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${c}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function Ce(t){return await v.getExerciseById(t)}function ke(t){const e=Math.floor(t/60),s=t%60;return`${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}function A(t){t.innerHTML='<div class="loader"></div>'}function Z(t){const e=t.querySelector(".loader");e&&e.remove()}const O=document.querySelector(".exercises-form"),f=document.querySelector(".group-list");let h="muscles",w="",M="";O&&O.addEventListener("submit",$e);function X(){return screen.width>767?10:8}function $e(t){if(t.preventDefault(),M=t.target.elements.search.value.trim(),!M){alert("Please, enter a search words");return}ee(),t.target.elements.search.value=""}async function ee(){const t=V();A(f);const e=X(),s=await v.getExercises({page:t,limit:e,[h]:w,keyword:M});se(f,s.results),H("search"),ve(s.totalPages,ee,h,w,M),Z(f)}async function te(t,e){const s=J();switch(t){case"muscles":h="muscles";break;case"equipment":h="equipment";break;case"bodypart":h="bodypart";break}w=e,A(f);try{const r=X(),i=await v.getExercises({page:s,limit:r,[h]:w});O.classList.remove("visually-hidden"),se(f,i.results),H("exercises"),Se(i.totalPages,te,h,w)}catch(r){Pe(),g.error("Error",r)}finally{Z(f)}}function se(t,e){const s=t.classList.contains("favorites"),r=e.map(n=>`
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
</li>`).join("");t.innerHTML=r,document.querySelectorAll(".exercise-card .start").forEach(n=>{n.addEventListener("click",Be)}),s&&document.querySelectorAll(".remove-favorite").forEach(a=>{a.addEventListener("click",Oe)})}function Be(t){const e=t.target.closest(".exercise-card").dataset.id;z(e)}function Oe(t){const s=t.target.closest(".exercise-card").dataset.id;Y(s)}function Pe(){f.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".exercises-input"),e=document.querySelector(".clear-button");t&&e&&(e.style.display="none",t.addEventListener("input",()=>{t.value.trim()!==""?e.style.display="flex":e.style.display="none"}),e.addEventListener("click",()=>{t.value="",e.style.display="none",t.focus()}))});let _="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t&&(t.addEventListener("click",s=>{const r=s.target.closest(".group-list__item");r&&(te(_,r.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${r.dataset.name}</span>`)}),D())});const He=({filter:t,name:e,imgURL:s})=>`
    <li
      class="group-list__item"
      data-name="${e}"
    >
      <img
        class="group-list__item-image"
        src="${s}"
        alt="${e}"
        width="335"
        height="225"
        loading="lazy"
      >
      <div class="group-list__item-image-filter"></div>
      <div class="group-list__item-title">
        ${e}
      </div>
      <div class="group-list__item-subtitle">
        ${t}
      </div>
    </li>
  `,Ie=t=>t.map(He).join(""),Fe=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Ie(t);e.innerHTML=s},Ae=async t=>await v.getExercisesByFilter(t),D=async(t="Muscles",e=1,s=screen.width>767?12:9)=>{t=t.trim(),e=U(),_=t.toLowerCase(),_==="body parts"&&(_="bodypart"),A(document.querySelector(".group-list"));const r=await Ae({filter:t,page:e,limit:s});Fe(r.results),H("category"),Le(r.totalPages,D,t)},re=Array.from(document.querySelectorAll(".exercises-menu-button")),De=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",re.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),fe(),D(t.textContent)};re.forEach(t=>t.addEventListener("click",()=>De(t)));const P=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?P.style.display="flex":P.style.display="none"});P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{se as a,Z as b,A as r,g as t,v as y};
//# sourceMappingURL=main-HUOPy6SE.js.map
