import{r as p,y as v,a as h}from"./assets/main-Bwg1xY49.js";import"./assets/vendor-v1Cmh7Ux.js";const a=document.querySelector(".favorites"),y=document.querySelector(".pagination"),c=10;let n=1;async function g(t,o=1){const s=(o-1)*c,e=s+c,d=t.slice(s,e);if(!d.length){a.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";return}try{const l=(await v.getExercisesByIdList(d)).map(r=>`
<li class="exercise-card" data-id=${r._id}>
  <div class="top-row">
    <div class="rating">
        <p class="badge">WORKOUT</p>
        <button class="delete-btn" onclick="removeExercise('${r._id}')">
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
    <p class="exercise-name">${r.name.split(" ").slice(0,2).join(" ")}</p>
  </div>
  <div class="details">
    <p>Burned calories: <strong>${r.burnedCalories}</strong></p>
    <p>Body part: <strong>${r.bodyPart}</strong></p>
    <p>Target: <strong>${r.target}</strong></p>
  </div>
</li>`).join("");a.innerHTML=l}finally{h(a)}}function u(t){const o=Math.ceil(t.length/c);let s="";for(let e=1;e<=o;e++)s+=`
            <button class="pagination-button ${e===n?"active":""}" data-page="${e}">
                ${e}
            </button>
        `;y.innerHTML=s,document.querySelectorAll(".pagination-button").forEach(e=>{e.addEventListener("click",()=>{n=Number(e.dataset.page),g(t,n),u(t)})})}function f(t){g(t,n),u(t)}const i=JSON.parse(localStorage.getItem("favorites"));console.log("favoriteExercises",i);i&&Array.isArray(i)?(p(a),f(i)):a.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";
//# sourceMappingURL=favorites.js.map
