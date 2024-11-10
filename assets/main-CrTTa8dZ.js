import{a as ae,i as b}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const J=document.querySelector(".mobile-menu"),ce=document.querySelector(".mobile-menu-open-btn"),le=document.querySelector(".mobile-menu-close-btn");ce.addEventListener("click",()=>{J.classList.add("is-open")});le.addEventListener("click",()=>{J.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const de={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},ue=["Body parts","Muscles","Equipment"];class pe{constructor(){this.api=ae.create(de),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:r}=e.response;return r.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,r,n){const i={rate:s,email:r,review:n};try{return await this.api.patch(`/exercises/${e}/rating`,i)}catch(o){switch(o.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(o)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!ue.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async n=>await this.getExerciseById(n));return(await Promise.allSettled(s)).filter(n=>n.status==="fulfilled").map(n=>n.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const p=new pe,V=new Date().toISOString().slice(0,10),$=document.querySelector(".blockquote-text"),C=document.querySelector(".quote-author"),S=JSON.parse(localStorage.getItem("quoteOfDay"));S&&S.date===V?($.innerHTML=S.quote,C.innerHTML=S.author):p.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:V})),$.innerHTML=t.quote,C.innerHTML=t.author):console.log(t)}).catch(()=>{$.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",C.innerHTML="Tom Brady"});let D=null;function ge(){F=1,M=1,A=1}function me(){M=1}function H(t){D!==t&&(ge(),D=t)}let F=1;function he(t){F=t}function j(){return F}async function fe(t,e,...s){h(t,e,he,j,...s)}let M=1;function ye(t){M=t}function U(){return M}async function ve(t,e,...s){h(t,e,ye,U,...s)}let A=1;function be(t){A=t}function W(){return A}async function Le(t,e,...s){h(t,e,be,W,...s)}function h(t,e,s,r,...n){const i=document.querySelector(".pagination");i.innerHTML="";const o=r(),g=ie();i.appendChild(g);const w=5;let m=Math.max(1,o-Math.floor(w/2)),y=Math.min(t,m+w-1);y-m+1<w&&(m=Math.max(1,y-w+1)),m>1&&(k(1),m>2&&G());for(let a=m;a<=y;a++)k(a);y<t&&(y<t-1&&G(),k(t));const ne=oe();i.appendChild(ne);function k(a){const v=document.createElement("button");v.textContent=a,v.classList.add("page-button"),a===o&&v.classList.add("active"),v.addEventListener("click",async()=>{s(a),await e(...n),h(t,e,s,r,...n)}),i.appendChild(v)}function G(){const a=document.createElement("span");a.textContent="...",a.classList.add("ellipsis"),i.appendChild(a)}function ie(){const a=document.createElement("button");return a.innerHTML="←",a.classList.add("page-button"),a.disabled=o===1,a.addEventListener("click",async()=>{o>1&&(s(o-1),await e(...n),h(t,e,s,r,...n))}),a}function oe(){const a=document.createElement("button");return a.innerHTML="→",a.classList.add("page-button"),a.disabled=o===t,a.addEventListener("click",async()=>{o<t&&(s(o+1),await e(...n),h(t,e,s,r,...n))}),a}}const c="/xa8thaeD/assets/icons-DfGzQ-YE.svg";class Y{constructor(e,s=null){this.parentModal=s,this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=e,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${c}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",this.handleClose),document.body.appendChild(this.backdrop)}openModal(){this.parentModal&&this.parentModal.backdrop.classList.remove("is-open");const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${e}px`,document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}toggleModalVisibility(){this.backdrop.classList.toggle("is-open")}closeModal(e){!e||e.type==="keydown"&&e.key!=="Escape"||!this.backdrop.classList.contains("is-open")||e.target.closest(".modal-content")||(document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.parentModal&&this.parentModal.backdrop.classList.add("is-open"),this.backdrop.remove(),document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight="")}}const T=getComputedStyle(document.documentElement),Ee=T.getPropertyValue("--color-popup-bg").trim(),xe=T.getPropertyValue("--color-popup-txt").trim(),we=T.getPropertyValue("--color-popup-main").trim(),Se=T.getPropertyValue("--color-popup-line").trim();class _e{constructor(){b.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:Se,backgroundColor:Ee,titleColor:we,messageColor:xe,theme:"dark"})}success(e,s){b.success({title:e,message:s})}error(e,s){b.error({title:e,message:s})}warning(e,s){b.warning({title:e,message:s})}settings(e){b.settings(e)}}const L=new _e;class Me{constructor(e,s=null){this.exerciseId=e,this.parentModal=s;const r=this.getFormHTML(e);this.modal=new Y(r.outerHTML,s),this.modal.openModal();const n=this.modal.modal.querySelector(".rating-form"),i=n.querySelector(".rating-form__rating");n.addEventListener("submit",async o=>this.handleSubmit(o)),i.addEventListener("click",o=>this.handleRatingClick(o))}getFormHTML(e){const s=document.createElement("div");s.classList.add("rating-form__container");const r=document.createElement("form");r.classList.add("rating-form");const n=`
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
            `;return r.innerHTML=n,s.appendChild(r),s}handleRatingClick(e){e.stopPropagation();const s=e.target;if(s.tagName!=="INPUT")return;const r=s.value,n=e.currentTarget.querySelectorAll("label");n.forEach(o=>{o.classList.remove("active")});for(let o=0;o<r;o++)n[o].classList.add("active");const i=e.currentTarget.querySelector(".rating-form__value");i.textContent=r+".0"}handleEscapeKey(e){e.key==="Escape"&&(this.modal.closeModal(),this.parentModal&&this.parentModal.toggleModalVisibility(),document.removeEventListener("keydown",this.handleEsc))}async handleSubmit(e){e.preventDefault();const s=e.target,r=s.elements.exerciseId.value,n=parseInt(s.elements.rating.value),i=s.elements.email.value,o=s.elements.comment.value;if(!n||!i||!o){L.error("Error:","All fields are required");return}if(!i.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){L.error("Error:","Invalid email");return}try{const g=await p.addRating(r,n,i,o);g instanceof Object?(L.success("Success:","Rating added successfully"),this.modal.backdrop.classList.remove("is-open"),this.parentModal&&this.parentModal.backdrop.classList.add("is-open"),this.modal.closeModal()):L.error("Error:",g)}catch(g){L.error("Error:",g)}}}function Te(t){Be(t).then(e=>{const s=qe(e),r=new Y(s),n=r.modal.querySelector(".add-to-favorite-btn"),i=r.modal.querySelector(".give-rating-btn");n.addEventListener("click",o=>{o.stopPropagation(),K(t)?z(t):Ce(t),n.innerHTML=Q(t)}),i.addEventListener("click",o=>{r.toggleModalVisibility(),new Me(t,r)}),r.openModal()})}function qe(t){return`
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${t.gifUrl}" alt="${t.name}" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${t.name}</h3>
                <div class="exercise-info__rating">
                    ${$e(t.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${ke(t)}
                </ul>
                <p class="exercise-info__description">${t.description}</p>
            </div>
            <div class="exercise-info__actions">
                <button class="exercise-info__button add-to-favorite-btn" data-id="${t._id}">
                    ${Q(t._id)}
                </button>
                <button class="exercise-info__button give-rating-btn">Give a rating</button>
            </div>
        </div>
    `}function ke(t){const e=[];return t.target&&e.push(`<li><span>Target</span> ${t.target}</li>`),t.bodyPart&&e.push(`<li><span>Body Part</span> ${t.bodyPart}</li>`),t.equipment&&e.push(`<li><span>Equipment</span> ${t.equipment}</li>`),t.popularity&&e.push(`<li><span>Popular</span> ${t.popularity}</li>`),t.burnedCalories&&e.push(`<li><span>Burned Calories</span> ${t.burnedCalories}</li>`),e.join("")}function $e(t){const e=[];t=t.toFixed(1);const s=Math.floor(t),r=t-s,n=`<span class="exercise-info__rating-text">${t}</span>`;for(let i=0;i<s;i++)e.push(`<svg width="18" height="18">
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
            </svg>`);return`${n}<div class="exercise-info__rating-stars">${e.join("")}</div>`}function Ce(t){const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t]));else{const s=JSON.parse(e);if(s.includes(t))return;s.push(t),localStorage.setItem("favorites",JSON.stringify(s))}}function z(t){const e=localStorage.getItem("favorites");if(!e)return;const r=JSON.parse(e).filter(i=>i!==t);localStorage.setItem("favorites",JSON.stringify(r));const n=document.querySelector(".favorites");if(n){const i=n.querySelector(`.exercise-card[data-id="${t}"]`);i&&i.remove()}}function K(t){const e=localStorage.getItem("favorites");return e?JSON.parse(e).includes(t):!1}function Q(t){const e=K(t);return`
        ${e?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${c}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function Be(t){return await p.getExerciseById(t)}function q(t){t.innerHTML='<div class="loader"></div>'}function I(t){const e=t.querySelector(".loader");e&&e.remove()}const x=document.querySelector(".favorites"),Pe=document.querySelector(".pagination"),B=10;let _=1;async function Z(t,e=1){const s=(e-1)*B,r=s+B,n=t.slice(s,r);if(!n.length){x.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";return}try{const i=await p.getExercisesByIdList(n);N(x,i)}finally{I(x)}}function X(t){const e=Math.ceil(t.length/B);let s="";for(let r=1;r<=e;r++)s+=`
            <button class="pagination-button ${r===_?"active":""}" data-page="${r}">
                ${r}
            </button>
        `;Pe.innerHTML=s,document.querySelectorAll(".pagination-button").forEach(r=>{r.addEventListener("click",()=>{_=Number(r.dataset.page),Z(t,_),X(t)})})}function Oe(t){Z(t,_),X(t)}function He(t){z(t)}const Fe=document.querySelector(".favorites");if(Fe){const t=JSON.parse(localStorage.getItem("favorites"));t&&Array.isArray(t)?(q(x),Oe(t)):x.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>"}const P=document.querySelector(".exercises-form"),u=document.querySelector(".group-list");let l="muscles",d="",f="";P&&P.addEventListener("submit",Ae);function ee(){return screen.width>767?10:8}function Ae(t){if(t.preventDefault(),f=t.target.elements.search.value.trim(),console.log(f),!f){alert("Please, enter a search words");return}te(),t.target.elements.search.value=""}async function te(){const t=j();q(u);const e=ee(),s=await p.getExercises({page:t,limit:e,[l]:d,keyword:f});console.group(t,"searchListOfExercises",l,d,f,s,s.totalPages),N(u,s.results),H("search"),fe(s.totalPages,te,l,d,f),I(u)}async function se(t,e){const s=W();switch(t){case"muscles":l="muscles";break;case"equipment":l="equipment";break;case"bodypart":l="bodypart";break}d=e,q(u);try{const r=ee(),n=await p.getExercises({page:s,limit:r,[l]:d});P.classList.remove("visually-hidden"),console.group(s,"findListOfExercises",l,d,n,n.totalPages),N(u,n.results),H("exercises"),Le(n.totalPages,se,l,d)}catch(r){Re(),console.log(r)}finally{I(u),console.log("Buy")}}function N(t,e){const s=t.classList.contains("favorites"),r=e.map(i=>`
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
        <p class="exercise-name">${i.name.split(" ").slice(0,2).join(" ")}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span>${i.burnedCalories} / ${i.time} min</span></p>
        <p>Body part: <span>${i.bodyPart}</span></p>
        <p>Target: <span>${i.target}</span></p>
    </div>
</li>`).join("");t.innerHTML=r,document.querySelectorAll(".exercise-card .start").forEach(i=>{i.addEventListener("click",Ie)}),s&&document.querySelectorAll(".remove-favorite").forEach(o=>{o.addEventListener("click",Ne)})}function Ie(t){const e=t.target.closest(".exercise-card").dataset.id;Te(e)}function Ne(t){const s=t.target.closest(".exercise-card").dataset.id;He(s)}function Re(){u.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".exercises-input"),e=document.querySelector(".clear-button");e.style.display="none",t.addEventListener("input",()=>{t.value.trim()!==""?e.style.display="flex":e.style.display="none"}),e.addEventListener("click",()=>{t.value="",e.style.display="none",t.focus()})});let E="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",s=>{const r=s.target.closest(".group-list__item");r&&(se(E,r.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${r.dataset.name}</span>`)}),R()):console.warn("Елемент .group-list не знайдено.")});const Ge=({filter:t,name:e,imgURL:s})=>`
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
  `,Ve=t=>t.map(Ge).join(""),De=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Ve(t);e.innerHTML=s},Je=async t=>await p.getExercisesByFilter(t),R=async(t="Muscles",e=1,s=screen.width>767?12:9)=>{t=t.trim(),e=U(),E=t.toLowerCase(),E==="body parts"&&(E="bodypart"),q(document.querySelector(".group-list"));const r=await Je({filter:t,page:e,limit:s});De(r.results),H("category"),console.group(e,"renderGroupListByFilter",E,t,r.totalPages),ve(r.totalPages,R,t)},re=Array.from(document.querySelectorAll(".exercises-menu-button")),je=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",re.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),me(),R(t.textContent)};re.forEach(t=>t.addEventListener("click",()=>je(t)));const O=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?O.style.display="flex":O.style.display="none"});O.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{L as t,p as y};
//# sourceMappingURL=main-CrTTa8dZ.js.map
