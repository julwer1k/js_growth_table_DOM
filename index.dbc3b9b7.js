function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}var r=document.querySelector(".field"),t=r.rows,n=document.querySelector(".container"),o="column";function a(e){switch(e){case"row":var n=t[t.length-1].cloneNode(!0);r.appendChild(n);break;case o:var a=!0,l=!1,i=void 0;try{for(var u,s=t[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var d=u.value,f=document.createElement("td");d.appendChild(f)}}catch(e){l=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(l)throw i}}}c()}function l(e){switch(e){case"row":t[t.length-1].remove();break;case o:var r=!0,n=!1,a=void 0;try{for(var l,i=t[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;u.cells[u.cells.length-1].remove()}}catch(e){n=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw a}}}c()}function c(){var t,n=document.querySelector(".append-row"),o=document.querySelector(".append-column"),a=document.querySelector(".remove-row"),l=document.querySelector(".remove-column"),c=function(r){if(Array.isArray(r))return e(r)}(t=r.querySelectorAll("tr"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(r,t){if(r){if("string"==typeof r)return e(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=r.querySelector("tr").children;a.disabled=c.length<=2,n.disabled=c.length>=10,l.disabled=i.length<=2,o.disabled=i.length>=10}c(),n.addEventListener("click",function(e){switch([e.target.classList.contains("append-row"),e.target.classList.contains("remove-row"),e.target.classList.contains("append-column"),e.target.classList.contains("remove-column")].findIndex(function(e){return!0===e})){case 0:a("row");break;case 1:l("row");break;case 2:a(o);break;case 3:l(o)}});
//# sourceMappingURL=index.dbc3b9b7.js.map
