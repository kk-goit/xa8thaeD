import{a as g}from"./vendor-v1Cmh7Ux.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const d=document.querySelector(".mobile-menu"),m=document.querySelector(".mobile-menu-open-btn"),h=document.querySelector(".mobile-menu-close-btn");m.addEventListener("click",()=>{d.classList.add("is-open")});h.addEventListener("click",()=>{d.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;document.querySelectorAll(".nav-item .nav-link").forEach(e=>{e.closest(".nav-item").classList.toggle("active",t.endsWith(e.getAttribute("href").substring(1)))})});const L={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},E=["Body parts","Muscles","Equipment"];class b{constructor(){this.api=g.create(L),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:i}=e.response;return i.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(r){switch(r.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(r)}}}async addRating(e,r,i,s){const n={rate:r,email:i,review:s};try{return await this.api.patch(`/exercises/${e}/rating`,n)}catch(o){switch(o.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(o)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(r){switch(r.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(r)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!E.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(r){switch(r.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(r)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(r){switch(r.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(r)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const r=e.map(async s=>await this.getExerciseById(s));return(await Promise.allSettled(r)).filter(s=>s.status==="fulfilled").map(s=>s.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const y=new b,c=new Date().toISOString().slice(0,10),u=document.querySelector(".blockquote-text"),l=document.querySelector(".quote-author"),a=JSON.parse(localStorage.getItem("quoteOfDay"));a&&a.date===c?(u.innerHTML=a.quote,l.innerHTML=a.author):y.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:c})),u.innerHTML=t.quote,l.innerHTML=t.author):console.log(t)});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t?(t.addEventListener("click",r=>{const i=r.target.closest(".group-list__item");i&&(console.log(i.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category'>${i.dataset.name}</span>`)}),f()):console.warn("Елемент .group-list не знайдено.")});const v=({filter:t,name:e,imgURL:r})=>`
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
  `,x=t=>t.map(v).join(""),q=t=>{const e=document.querySelector(".group-list");if(!e)return;const r=x(t);e.innerHTML=r},S=async t=>await y.getExercisesByFilter(t),f=async({filter:t="Muscles",page:e=1,limit:r=12}={})=>{const i=await S({filter:t,page:e,limit:r});q(i.results)},p=Array.from(document.querySelectorAll(".exercises-menu-button")),w=t=>{const e=document.querySelector(".section-title");e.innerHTML="Exercises",p.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),f({filter:t.textContent})};p.forEach(t=>t.addEventListener("click",()=>w(t)));export{y};
//# sourceMappingURL=main-DPkf5FFp.js.map