import{r as l,y,a as f,b as p}from"./assets/main-Dgqzv7lz.js";import"./assets/vendor-v1Cmh7Ux.js";const a=document.querySelector(".favorites"),g=document.querySelector(".pagination"),s=10;let n=1;async function c(e,o=1){const r=(o-1)*s,t=r+s,i=e.slice(r,t);if(!i.length){a.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";return}try{const d=await y.getExercisesByIdList(i);f(a,d)}finally{p(a)}}function u(e){const o=Math.ceil(e.length/s);let r="";for(let t=1;t<=o;t++)r+=`
            <button class="pagination-button ${t===n?"active":""}" data-page="${t}">
                ${t}
            </button>
        `;g.innerHTML=r,document.querySelectorAll(".pagination-button").forEach(t=>{t.addEventListener("click",()=>{n=Number(t.dataset.page),c(e,n),u(e)})})}function v(e){c(e,n),u(e)}const m=document.querySelector(".favorites");if(m){const e=JSON.parse(localStorage.getItem("favorites"));e&&Array.isArray(e)?(l(a),v(e)):a.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>"}
//# sourceMappingURL=favorites.js.map
