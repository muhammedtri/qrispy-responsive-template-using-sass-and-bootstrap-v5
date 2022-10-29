const sections=document.querySelectorAll("section"),navLi=document.querySelectorAll(".navbar-nav .nav-item a");window.onscroll=()=>{let o="";sections.forEach((t=>{const e=t.offsetTop;scrollY>=e-60&&(o=t.getAttribute("id"),console.log(o))})),navLi.forEach((t=>{t.classList.remove("active"),t.classList.contains(o)&&t.classList.add("active")}))};
//# sourceMappingURL=index.fa24f8c6.js.map
