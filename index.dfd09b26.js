(()=>{const e={openModalBtn:document.querySelector("[read-more-modal-open]"),closeModalBtn:document.querySelector("[read-more-modal-close]"),modal:document.querySelector("[read-more-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[location-modal-open]"),closeModalBtn:document.querySelector("[location-modal-close]"),modal:document.querySelector("[location-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[franchise-modal-open]"),closeModalBtn:document.querySelector("[franchise-modal-close]"),modal:document.querySelector("[franchise-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[prod-modal-open]"),closeModalBtn:document.querySelector("[prod-modal-close]"),modal:document.querySelector("[prod-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[prod-modal-open2]"),closeModalBtn:document.querySelector("[prod-modal-close]"),modal:document.querySelector("[prod-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[prod-modal-open3]"),closeModalBtn:document.querySelector("[prod-modal-close]"),modal:document.querySelector("[prod-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),window.onscroll=()=>function(){const e=document.querySelector("[data-header]"),o=e.offsetHeight;window.pageYOffset>o?e.classList.add("header--transparent"):e.classList.remove("header--transparent")}(),(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),d=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",d),t.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.dfd09b26.js.map
