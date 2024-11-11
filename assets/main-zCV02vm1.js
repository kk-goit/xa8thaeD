import{a as ne,i as w}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const G=document.querySelector(".mobile-menu"),ie=document.querySelector(".mobile-menu-open-btn"),oe=document.querySelector(".mobile-menu-close-btn");ie.addEventListener("click",()=>{G.classList.add("is-open")});oe.addEventListener("click",()=>{G.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const ae={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},ce=["Body parts","Muscles","Equipment"];class le{constructor(){this.api=ne.create(ae),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:r}=e.response;return r.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,r,n){const i={rate:s,email:r,review:n};try{return await this.api.patch(`/exercises/${e}/rating`,i)}catch(o){switch(o.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(o)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!ce.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async n=>await this.getExerciseById(n));return(await Promise.allSettled(s)).filter(n=>n.status==="fulfilled").map(n=>n.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const b=new le,R=new Date().toISOString().slice(0,10),$=document.querySelector(".blockquote-text"),B=document.querySelector(".quote-author"),M=JSON.parse(localStorage.getItem("quoteOfDay"));M&&M.date===R?($.innerHTML=M.quote,B.innerHTML=M.author):b.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:R})),$.innerHTML=t.quote,B.innerHTML=t.author):console.log(t)}).catch(()=>{$.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",B.innerHTML="Tom Brady"});let N=null;function de(){F=1,T=1,I=1}function ue(){T=1}function H(t){N!==t&&(de(),N=t)}let F=1;function me(t){F=t}function V(){return F}async function pe(t,e,...s){y(t,e,me,V,...s)}let T=1;function ge(t){T=t}function U(){return T}async function he(t,e,...s){y(t,e,ge,U,...s)}let I=1;function fe(t){I=t}function J(){return I}async function ye(t,e,...s){y(t,e,fe,J,...s)}function y(t,e,s,r,...n){const i=document.querySelector(".pagination");i.innerHTML="";const o=r(),u=C();i.appendChild(u);const m=5;let l=Math.max(1,o-Math.floor(m/2)),p=Math.min(t,l+m-1);p-l+1<m&&(l=Math.max(1,p-m+1)),l>1&&(g(1),l>2&&E());for(let a=l;a<=p;a++)g(a);p<t&&(p<t-1&&E(),g(t));const L=k();i.appendChild(L);function g(a){const S=document.createElement("button");S.textContent=a,S.classList.add("page-button"),a===o&&S.classList.add("active"),S.addEventListener("click",async()=>{s(a),await e(...n),y(t,e,s,r,...n)}),i.appendChild(S)}function E(){const a=document.createElement("span");a.textContent="...",a.classList.add("ellipsis"),i.appendChild(a)}function C(){const a=document.createElement("button");return a.innerHTML="←",a.classList.add("page-button"),a.disabled=o===1,a.addEventListener("click",async()=>{o>1&&(s(o-1),await e(...n),y(t,e,s,r,...n))}),a}function k(){const a=document.createElement("button");return a.innerHTML="→",a.classList.add("page-button"),a.disabled=o===t,a.addEventListener("click",async()=>{o<t&&(s(o+1),await e(...n),y(t,e,s,r,...n))}),a}}const c="/xa8thaeD/assets/icons-DfGzQ-YE.svg";class j{constructor(e,s=null){this.parentModal=s,this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=e,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${c}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",this.handleClose),document.body.appendChild(this.backdrop)}openModal(){if(this.parentModal)this.parentModal.backdrop.classList.remove("is-open");else{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${e}px`}document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}toggleModalVisibility(){this.backdrop.classList.toggle("is-open")}closeModal(e){!e||e.type==="keydown"&&e.key!=="Escape"||!this.backdrop.classList.contains("is-open")||e.target.closest(".modal-content")||(document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.parentModal?this.parentModal.backdrop.classList.add("is-open"):(document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight=""),this.backdrop.remove())}}const q=getComputedStyle(document.documentElement),ve=q.getPropertyValue("--color-popup-bg").trim(),be=q.getPropertyValue("--color-popup-txt").trim(),Le=q.getPropertyValue("--color-popup-main").trim(),Ee=q.getPropertyValue("--color-popup-line").trim();class Se{constructor(){w.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:Ee,backgroundColor:ve,titleColor:Le,messageColor:be,theme:"dark"})}success(e,s){w.success({title:e,message:s})}error(e,s){w.error({title:e,message:s})}warning(e,s){w.warning({title:e,message:s})}settings(e){w.settings(e)}}const x=new Se;class we{constructor(e,s=null){this.exerciseId=e,this.parentModal=s;const r=this.getFormHTML(e);this.modal=new j(r.outerHTML,s),this.modal.openModal();const n=this.modal.modal.querySelector(".rating-form"),i=n.querySelector(".rating-form__rating");n.addEventListener("submit",async o=>this.handleSubmit(o)),i.addEventListener("click",o=>this.handleRatingClick(o))}getFormHTML(e){const s=document.createElement("div");s.classList.add("rating-form__container");const r=document.createElement("form");r.classList.add("rating-form");const n=`
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
            `;return r.innerHTML=n,s.appendChild(r),s}handleRatingClick(e){e.stopPropagation();const s=e.target;if(s.tagName!=="INPUT")return;const r=s.value,n=e.currentTarget.querySelectorAll("label");n.forEach(o=>{o.classList.remove("active")});for(let o=0;o<r;o++)n[o].classList.add("active");const i=e.currentTarget.querySelector(".rating-form__value");i.textContent=r+".0"}handleEscapeKey(e){e.key==="Escape"&&(this.modal.closeModal(),this.parentModal&&this.parentModal.toggleModalVisibility(),document.removeEventListener("keydown",this.handleEsc))}async handleSubmit(e){e.preventDefault();const s=e.target,r=s.elements.exerciseId.value,n=parseInt(s.elements.rating.value),i=s.elements.email.value,o=s.elements.comment.value;if(!n||!i||!o){x.error("Error:","All fields are required");return}if(!i.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){x.error("Error:","Invalid email");return}try{const u=await b.addRating(r,n,i,o);u instanceof Object?(x.success("Success:","Rating added successfully"),this.modal.backdrop.classList.remove("is-open"),this.parentModal&&(this.parentModal.closeModal(),z(r)),this.modal.closeModal()):x.error("Error:",u)}catch(u){x.error("Error:",u)}}}xe();function W(){const t=document.querySelector(".all-time"),e=document.querySelector(".calories"),s=Math.floor((localStorage.getItem("timer")||0)/60),r=localStorage.getItem("burntCalories")||0;t.innerText=`${s||0} min`,e.innerText=Math.floor(Number(r)/1e3||0).toString(),s>110&&(t.style.color="green")}W();function xe(){const t=localStorage.getItem("lastUpdate"),e=new Date().toDateString();t!==e&&(localStorage.setItem("lastUpdate",e),localStorage.setItem("timer",0),localStorage.setItem("burntCalories",0))}function z(t){Ce(t).then(e=>{const s=_e(e),r=new j(s),n=r.modal.querySelector(".add-to-favorite-btn"),i=r.modal.querySelector(".give-rating-btn"),o=r.modal.querySelector(".start-btn"),u=r.modal.querySelector(".timer");let m,l,p;n.addEventListener("click",L=>{L.stopPropagation(),K(t)?Y(t):qe(t),n.innerHTML=Q(t)}),i.addEventListener("click",L=>{r.toggleModalVisibility(),new we(t,r)}),o.addEventListener("click",L=>{if(o.classList.contains("start-btn"))o.classList.remove("start-btn"),o.classList.add("stop-btn"),o.textContent="STOP",m=Date.now(),p=setInterval(()=>{const g=Date.now();u.textContent=ke(Math.floor((g-m)/1e3))},1e3);else{o.classList.remove("stop-btn"),o.classList.add("start-btn"),o.textContent="START",l=Date.now(),clearInterval(p);const g=l-m,E=Math.floor(g/1e3),C=Number(localStorage.getItem("timer"))||0;localStorage.setItem("timer",C+E);const k=Number(localStorage.getItem("burntCalories"))||0;localStorage.setItem("burntCalories",k+E*(e.burnedCalories||0)),localStorage.setItem("lastUpdate",new Date().toDateString()),W()}}),r.openModal()})}function _e(t){return`
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
    `}function Me(t){const e=[];return t.target&&e.push(`<li><span>Target</span><span class="details-target">${t.target}</span></li>`),t.bodyPart&&e.push(`<li><span>Body Part</span><span class="details-body-part">${t.bodyPart}</span></li>`),t.equipment&&e.push(`<li><span>Equipment</span> ${t.equipment}</li>`),t.popularity&&e.push(`<li><span>Popular</span> ${t.popularity}</li>`),t.burnedCalories&&e.push(`<li><span>Burned Calories</span><span class="details-calories">${t.burnedCalories}</span></li>`),e.join("")}function Te(t){const e=[];t=t.toFixed(1);const s=Math.floor(t),r=t-s,n=`<span class="exercise-info__rating-text">${t}</span>`;for(let i=0;i<s;i++)e.push(`<svg width="18" height="18">
                <use class="rating-star__full" href="${c}#icon-star-18"></use>
            </svg>`);if(r>0){const i=r*100;e.push(`<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${i}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="${c}#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`)}for(;e.length<5;)e.push(`<svg width="18" height="18">
                <use class="rating-star__empty" href="${c}#icon-star-18"></use>
            </svg>`);return`${n}<div class="exercise-info__rating-stars">${e.join("")}</div>`}function qe(t){const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t]));else{const s=JSON.parse(e);if(s.includes(t))return;s.push(t),localStorage.setItem("favorites",JSON.stringify(s))}}function Y(t){const e=localStorage.getItem("favorites");if(!e)return;const r=JSON.parse(e).filter(i=>i!==t);localStorage.setItem("favorites",JSON.stringify(r));const n=document.querySelector(".favorites");if(n){const i=n.querySelector(`.exercise-card[data-id="${t}"]`);i&&i.remove()}}function K(t){const e=localStorage.getItem("favorites");return e?JSON.parse(e).includes(t):!1}function Q(t){const e=K(t);return`
        ${e?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${c}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function Ce(t){return await b.getExerciseById(t)}function ke(t){const e=Math.floor(t/60),s=t%60;return`${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}function A(t){t.innerHTML='<div class="loader"></div>'}function Z(t){const e=t.querySelector(".loader");e&&e.remove()}const O=document.querySelector(".exercises-form"),f=document.querySelector(".group-list");let d="muscles",h="",v="";O&&O.addEventListener("submit",$e);function X(){return screen.width>767?10:8}function $e(t){if(t.preventDefault(),v=t.target.elements.search.value.trim(),console.log(v),!v){alert("Please, enter a search words");return}ee(),t.target.elements.search.value=""}async function ee(){const t=V();A(f);const e=X(),s=await b.getExercises({page:t,limit:e,[d]:h,keyword:v});console.group(t,"searchListOfExercises",d,h,v,s,s.totalPages),se(f,s.results),H("search"),pe(s.totalPages,ee,d,h,v),Z(f)}async function te(t,e){const s=J();switch(t){case"muscles":d="muscles";break;case"equipment":d="equipment";break;case"bodypart":d="bodypart";break}h=e,A(f);try{const r=X(),n=await b.getExercises({page:s,limit:r,[d]:h});O.classList.remove("visually-hidden"),console.group(s,"findListOfExercises",d,h,n,n.totalPages),se(f,n.results),H("exercises"),ye(n.totalPages,te,d,h)}catch(r){Pe(),console.log(r)}finally{Z(f),console.log("Buy")}}function se(t,e){const s=t.classList.contains("favorites"),r=e.map(i=>`
<li class="exercise-card" data-id=${i._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        ${s?`
            <button type="button" class="remove-favorite" data-id=${i._id}>
                <svg width="16" height="16">
                    <use class="remove-favorite__icon" href="${c}#icon-trash"></use>
                </svg>
            </button>`:`<div class="rating-star">
                <span class='text-star'>${i.rating}</span>
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
        <p class="exercise-name">${i.name}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span class="details-calories">${i.burnedCalories} / ${i.time} min</span></p>
        <p>Body part: <span class="details-calories">${i.bodyPart}</span></p>
        <p>Target: <span class="details-target">${i.target}</span></p>
    </div>
</li>`).join("");t.innerHTML=r,document.querySelectorAll(".exercise-card .start").forEach(i=>{i.addEventListener("click",Be)}),s&&document.querySelectorAll(".remove-favorite").forEach(o=>{o.addEventListener("click",Oe)})}function Be(t){const e=t.target.closest(".exercise-card").dataset.id;z(e)}function Oe(t){const s=t.target.closest(".exercise-card").dataset.id;Y(s)}function Pe(){f.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".exercises-input"),e=document.querySelector(".clear-button");t&&e?(e.style.display="none",t.addEventListener("input",()=>{t.value.trim()!==""?e.style.display="flex":e.style.display="none"}),e.addEventListener("click",()=>{t.value="",e.style.display="none",t.focus()})):console.warn(".exercises-input not found")});let _="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",s=>{const r=s.target.closest(".group-list__item");r&&(te(_,r.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${r.dataset.name}</span>`)}),D()):console.warn("Елемент .group-list не знайдено.")});const He=({filter:t,name:e,imgURL:s})=>`
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
  `,Fe=t=>t.map(He).join(""),Ie=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Fe(t);e.innerHTML=s},Ae=async t=>await b.getExercisesByFilter(t),D=async(t="Muscles",e=1,s=screen.width>767?12:9)=>{t=t.trim(),e=U(),_=t.toLowerCase(),_==="body parts"&&(_="bodypart"),A(document.querySelector(".group-list"));const r=await Ae({filter:t,page:e,limit:s});Ie(r.results),H("category"),console.group(e,"renderGroupListByFilter",_,t,r.totalPages),he(r.totalPages,D,t)},re=Array.from(document.querySelectorAll(".exercises-menu-button")),De=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",re.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),ue(),D(t.textContent)};re.forEach(t=>t.addEventListener("click",()=>De(t)));const P=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?P.style.display="flex":P.style.display="none"});P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{se as a,Z as b,A as r,x as t,b as y};
//# sourceMappingURL=main-zCV02vm1.js.map
