import{y as l}from"./assets/main-BIhmrRWL.js";import{i as o}from"./assets/vendor-v1Cmh7Ux.js";const r=getComputedStyle(document.documentElement),p=r.getPropertyValue("--color-popup-bg").trim(),c=r.getPropertyValue("--color-popup-txt").trim(),u=r.getPropertyValue("--color-popup-main").trim(),m=r.getPropertyValue("--color-popup-line").trim();class g{constructor(){o.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:m,backgroundColor:p,titleColor:u,messageColor:c,theme:"dark"})}success(e,t){o.success({title:e,message:t})}error(e,t){o.error({title:e,message:t})}warning(e,t){o.warning({title:e,message:t})}settings(e){o.settings(e)}}const s=new g,n=document.querySelector(".footer-form");n.addEventListener("submit",async a=>{a.preventDefault();const e=n.elements.email.value;if(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){try{const i=await l.orderSubscription(e);s.success("Success","Subscription successful!")}catch(i){s.error("Error","Subscription failed: "+i)}n.elements.email.value=""}else s.warning("Warning","Please enter a valid email address.")});
//# sourceMappingURL=index.js.map
