import{y as o,t as r}from"./assets/main-CBdZdOC_.js";import"./assets/vendor-v1Cmh7Ux.js";const t=document.querySelector(".footer-form");t.addEventListener("submit",async a=>{a.preventDefault();const s=t.elements.email.value;if(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s)){try{const e=await o.orderSubscription(s);typeof e=="string"?r.error("Error",e):r.success("Success","Subscription successful!")}catch(e){r.error("Error","Subscription failed: "+e)}t.elements.email.value=""}else r.warning("Warning","Please enter a valid email address.")});
//# sourceMappingURL=index.js.map
