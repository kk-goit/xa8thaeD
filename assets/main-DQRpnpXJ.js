import{a as ce,i as b}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const J=document.querySelector(".mobile-menu"),le=document.querySelector(".mobile-menu-open-btn"),de=document.querySelector(".mobile-menu-close-btn");le.addEventListener("click",()=>{J.classList.add("is-open")});de.addEventListener("click",()=>{J.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const ue={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},pe=["Body parts","Muscles","Equipment"];class ge{constructor(){this.api=ce.create(ue),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:r}=e.response;return r.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,r,i){const n={rate:s,email:r,review:i};try{return await this.api.patch(`/exercises/${e}/rating`,n)}catch(a){switch(a.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(a)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!pe.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async i=>await this.getExerciseById(i));return(await Promise.allSettled(s)).filter(i=>i.status==="fulfilled").map(i=>i.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const p=new ge,V=new Date().toISOString().slice(0,10),$=document.querySelector(".blockquote-text"),C=document.querySelector(".quote-author"),S=JSON.parse(localStorage.getItem("quoteOfDay"));S&&S.date===V?($.innerHTML=S.quote,C.innerHTML=S.author):p.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:V})),$.innerHTML=t.quote,C.innerHTML=t.author):console.log(t)}).catch(()=>{$.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",C.innerHTML="Tom Brady"});let D=null;function me(){F=1,_=1,A=1}function he(){_=1}function H(t){D!==t&&(me(),D=t)}let F=1;function fe(t){F=t}function j(){return F}async function ye(t,e,...s){h(t,e,fe,j,...s)}let _=1;function ve(t){_=t}function U(){return _}async function be(t,e,...s){h(t,e,ve,U,...s)}let A=1;function Le(t){A=t}function W(){return A}async function Ee(t,e,...s){h(t,e,Le,W,...s)}function h(t,e,s,r,...i){const n=document.querySelector(".pagination");n.innerHTML="";const a=r(),g=ae();n.appendChild(g);const w=5;let m=Math.max(1,a-Math.floor(w/2)),y=Math.min(t,m+w-1);y-m+1<w&&(m=Math.max(1,y-w+1)),m>1&&(k(1),m>2&&G());for(let o=m;o<=y;o++)k(o);y<t&&(y<t-1&&G(),k(t));const ne=oe();n.appendChild(ne);function k(o){const v=document.createElement("button");v.textContent=o,v.classList.add("page-button"),o===a&&v.classList.add("active"),v.addEventListener("click",async()=>{s(o),await e(...i),h(t,e,s,r,...i)}),n.appendChild(v)}function G(){const o=document.createElement("span");o.textContent="...",o.classList.add("ellipsis"),n.appendChild(o)}function ae(){const o=document.createElement("button");return o.innerHTML="←",o.classList.add("page-button"),o.disabled=a===1,o.addEventListener("click",async()=>{a>1&&(s(a-1),await e(...i),h(t,e,s,r,...i))}),o}function oe(){const o=document.createElement("button");return o.innerHTML="→",o.classList.add("page-button"),o.disabled=a===t,o.addEventListener("click",async()=>{a<t&&(s(a+1),await e(...i),h(t,e,s,r,...i))}),o}}const c="/xa8thaeD/assets/icons-DfGzQ-YE.svg";class Y{constructor(e,s=null){this.parentModal=s,this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=e,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${c}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",this.handleClose),document.body.appendChild(this.backdrop)}openModal(){if(this.parentModal)this.parentModal.backdrop.classList.remove("is-open");else{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${e}px`}document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}toggleModalVisibility(){this.backdrop.classList.toggle("is-open")}closeModal(e){!e||e.type==="keydown"&&e.key!=="Escape"||!this.backdrop.classList.contains("is-open")||e.target.closest(".modal-content")||(document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.parentModal?this.parentModal.backdrop.classList.add("is-open"):(document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight=""),this.backdrop.remove())}}const T=getComputedStyle(document.documentElement),xe=T.getPropertyValue("--color-popup-bg").trim(),we=T.getPropertyValue("--color-popup-txt").trim(),Se=T.getPropertyValue("--color-popup-main").trim(),Me=T.getPropertyValue("--color-popup-line").trim();class _e{constructor(){b.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:Me,backgroundColor:xe,titleColor:Se,messageColor:we,theme:"dark"})}success(e,s){b.success({title:e,message:s})}error(e,s){b.error({title:e,message:s})}warning(e,s){b.warning({title:e,message:s})}settings(e){b.settings(e)}}const L=new _e;class Te{constructor(e,s=null){this.exerciseId=e,this.parentModal=s;const r=this.getFormHTML(e);this.modal=new Y(r.outerHTML,s),this.modal.openModal();const i=this.modal.modal.querySelector(".rating-form"),n=i.querySelector(".rating-form__rating");i.addEventListener("submit",async a=>this.handleSubmit(a)),n.addEventListener("click",a=>this.handleRatingClick(a))}getFormHTML(e){const s=document.createElement("div");s.classList.add("rating-form__container");const r=document.createElement("form");r.classList.add("rating-form");const i=`
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
            `;return r.innerHTML=i,s.appendChild(r),s}handleRatingClick(e){e.stopPropagation();const s=e.target;if(s.tagName!=="INPUT")return;const r=s.value,i=e.currentTarget.querySelectorAll("label");i.forEach(a=>{a.classList.remove("active")});for(let a=0;a<r;a++)i[a].classList.add("active");const n=e.currentTarget.querySelector(".rating-form__value");n.textContent=r+".0"}handleEscapeKey(e){e.key==="Escape"&&(this.modal.closeModal(),this.parentModal&&this.parentModal.toggleModalVisibility(),document.removeEventListener("keydown",this.handleEsc))}async handleSubmit(e){e.preventDefault();const s=e.target,r=s.elements.exerciseId.value,i=parseInt(s.elements.rating.value),n=s.elements.email.value,a=s.elements.comment.value;if(!i||!n||!a){L.error("Error:","All fields are required");return}if(!n.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){L.error("Error:","Invalid email");return}try{const g=await p.addRating(r,i,n,a);g instanceof Object?(L.success("Success:","Rating added successfully"),this.modal.backdrop.classList.remove("is-open"),this.parentModal&&(this.parentModal.closeModal(),z(r)),this.modal.closeModal()):L.error("Error:",g)}catch(g){L.error("Error:",g)}}}function z(t){Be(t).then(e=>{const s=qe(e),r=new Y(s),i=r.modal.querySelector(".add-to-favorite-btn"),n=r.modal.querySelector(".give-rating-btn");i.addEventListener("click",a=>{a.stopPropagation(),Q(t)?K(t):Ce(t),i.innerHTML=Z(t)}),n.addEventListener("click",a=>{r.toggleModalVisibility(),new Te(t,r)}),r.openModal()})}function qe(t){return`
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
                    ${Z(t._id)}
                </button>
                <button class="exercise-info__button give-rating-btn">Give a rating</button>
            </div>
        </div>
    `}function ke(t){const e=[];return t.target&&e.push(`<li><span>Target</span><span class="details-target">${t.target}</span></li>`),t.bodyPart&&e.push(`<li><span>Body Part</span><span class="details-body-part">${t.bodyPart}</span></li>`),t.equipment&&e.push(`<li><span>Equipment</span> ${t.equipment}</li>`),t.popularity&&e.push(`<li><span>Popular</span> ${t.popularity}</li>`),t.burnedCalories&&e.push(`<li><span>Burned Calories</span><span class="details-calories">${t.burnedCalories}</span></li>`),e.join("")}function $e(t){const e=[];t=t.toFixed(1);const s=Math.floor(t),r=t-s,i=`<span class="exercise-info__rating-text">${t}</span>`;for(let n=0;n<s;n++)e.push(`<svg width="18" height="18">
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
            </svg>`);return`${i}<div class="exercise-info__rating-stars">${e.join("")}</div>`}function Ce(t){const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t]));else{const s=JSON.parse(e);if(s.includes(t))return;s.push(t),localStorage.setItem("favorites",JSON.stringify(s))}}function K(t){const e=localStorage.getItem("favorites");if(!e)return;const r=JSON.parse(e).filter(n=>n!==t);localStorage.setItem("favorites",JSON.stringify(r));const i=document.querySelector(".favorites");if(i){const n=i.querySelector(`.exercise-card[data-id="${t}"]`);n&&n.remove()}}function Q(t){const e=localStorage.getItem("favorites");return e?JSON.parse(e).includes(t):!1}function Z(t){const e=Q(t);return`
        ${e?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${c}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function Be(t){return await p.getExerciseById(t)}function q(t){t.innerHTML='<div class="loader"></div>'}function I(t){const e=t.querySelector(".loader");e&&e.remove()}const x=document.querySelector(".favorites"),Pe=document.querySelector(".pagination"),B=10;let M=1;async function X(t,e=1){const s=(e-1)*B,r=s+B,i=t.slice(s,r);if(!i.length){x.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";return}try{const n=await p.getExercisesByIdList(i);N(x,n)}finally{I(x)}}function ee(t){const e=Math.ceil(t.length/B);let s="";for(let r=1;r<=e;r++)s+=`
            <button class="pagination-button ${r===M?"active":""}" data-page="${r}">
                ${r}
            </button>
        `;Pe.innerHTML=s,document.querySelectorAll(".pagination-button").forEach(r=>{r.addEventListener("click",()=>{M=Number(r.dataset.page),X(t,M),ee(t)})})}function Oe(t){X(t,M),ee(t)}function He(t){K(t)}const Fe=document.querySelector(".favorites");if(Fe){const t=JSON.parse(localStorage.getItem("favorites"));t&&Array.isArray(t)?(q(x),Oe(t)):x.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>"}const P=document.querySelector(".exercises-form"),u=document.querySelector(".group-list");let l="muscles",d="",f="";P&&P.addEventListener("submit",Ae);function te(){return screen.width>767?10:8}function Ae(t){if(t.preventDefault(),f=t.target.elements.search.value.trim(),console.log(f),!f){alert("Please, enter a search words");return}se(),t.target.elements.search.value=""}async function se(){const t=j();q(u);const e=te(),s=await p.getExercises({page:t,limit:e,[l]:d,keyword:f});console.group(t,"searchListOfExercises",l,d,f,s,s.totalPages),N(u,s.results),H("search"),ye(s.totalPages,se,l,d,f),I(u)}async function re(t,e){const s=W();switch(t){case"muscles":l="muscles";break;case"equipment":l="equipment";break;case"bodypart":l="bodypart";break}d=e,q(u);try{const r=te(),i=await p.getExercises({page:s,limit:r,[l]:d});P.classList.remove("visually-hidden"),console.group(s,"findListOfExercises",l,d,i,i.totalPages),N(u,i.results),H("exercises"),Ee(i.totalPages,re,l,d)}catch(r){Re(),console.log(r)}finally{I(u),console.log("Buy")}}function N(t,e){const s=t.classList.contains("favorites"),r=e.map(n=>`
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
        <p class="exercise-name">${n.name.split(" ").slice(0,2).join(" ")}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span class="details-calories">${n.burnedCalories} / ${n.time} min</span></p>
        <p>Body part: <span class="details-calories">${n.bodyPart}</span></p>
        <p>Target: <span class="details-target">${n.target}</span></p>
    </div>
</li>`).join("");t.innerHTML=r,document.querySelectorAll(".exercise-card .start").forEach(n=>{n.addEventListener("click",Ie)}),s&&document.querySelectorAll(".remove-favorite").forEach(a=>{a.addEventListener("click",Ne)})}function Ie(t){const e=t.target.closest(".exercise-card").dataset.id;z(e)}function Ne(t){const s=t.target.closest(".exercise-card").dataset.id;He(s)}function Re(){u.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".exercises-input"),e=document.querySelector(".clear-button");e.style.display="none",t.addEventListener("input",()=>{t.value.trim()!==""?e.style.display="flex":e.style.display="none"}),e.addEventListener("click",()=>{t.value="",e.style.display="none",t.focus()})});let E="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",s=>{const r=s.target.closest(".group-list__item");r&&(re(E,r.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${r.dataset.name}</span>`)}),R()):console.warn("Елемент .group-list не знайдено.")});const Ge=({filter:t,name:e,imgURL:s})=>`
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
  `,Ve=t=>t.map(Ge).join(""),De=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Ve(t);e.innerHTML=s},Je=async t=>await p.getExercisesByFilter(t),R=async(t="Muscles",e=1,s=screen.width>767?12:9)=>{t=t.trim(),e=U(),E=t.toLowerCase(),E==="body parts"&&(E="bodypart"),q(document.querySelector(".group-list"));const r=await Je({filter:t,page:e,limit:s});De(r.results),H("category"),console.group(e,"renderGroupListByFilter",E,t,r.totalPages),be(r.totalPages,R,t)},ie=Array.from(document.querySelectorAll(".exercises-menu-button")),je=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",ie.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),he(),R(t.textContent)};ie.forEach(t=>t.addEventListener("click",()=>je(t)));const O=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?O.style.display="flex":O.style.display="none"});O.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{L as t,p as y};
//# sourceMappingURL=main-DQRpnpXJ.js.map
