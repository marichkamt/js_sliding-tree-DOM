var e=document.querySelector(".tree");e.querySelectorAll("li").forEach(function(e){if(e.querySelector("ul")){var t=document.createElement("span"),n=e.firstChild;t.textContent=n.textContent,e.insertBefore(t,n),n.remove()}}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.nextSibling;t&&"UL"===t.tagName&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.a27f3c8a.js.map
