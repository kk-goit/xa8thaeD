import"./assets/main-DTz_dqdW.js";import"./assets/vendor-v1Cmh7Ux.js";const c=document.querySelector(".favorites"),l=document.querySelector(".pagination"),o=10;let r=1;function g(t,a=1){const n=(a-1)*o,e=n+o,u=t.slice(n,e).map(s=>`
<li class="exercise-card" data-id=${s._id}>
  <div class="top-row">
    <div class="rating">
        <p class="badge">WORKOUT</p>
        <button class="delete-btn" onclick="removeExercise('${s._id}')">
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
    <p class="exercise-name">${s.name.split(" ").slice(0,2).join(" ")}</p>
  </div>
  <div class="details">
    <p>Burned calories: <strong>${s.burnedCalories}</strong></p>
    <p>Body part: <strong>${s.bodyPart}</strong></p>
    <p>Target: <strong>${s.target}</strong></p>
  </div>
</li>`).join("");c.innerHTML=u}function d(t){const a=Math.ceil(t.length/o);let n="";for(let e=1;e<=a;e++)n+=`
            <button class="pagination-button ${e===r?"active":""}" data-page="${e}">
                ${e}
            </button>
        `;l.innerHTML=n,document.querySelectorAll(".pagination-button").forEach(e=>{e.addEventListener("click",()=>{r=Number(e.dataset.page),g(t,r),d(t)})})}function p(t){g(t,r),d(t)}const i=JSON.parse(localStorage.getItem("favorites"));i&&Array.isArray(i)?p(i):c.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";
//# sourceMappingURL=favorites.js.map
