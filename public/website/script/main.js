var loadDeferredStyles = function() {
    var e = document.getElementById("deferred-styles"), n = document.createElement("div");
    n.innerHTML = e.textContent, document.body.appendChild(n), e.parentElement.removeChild(e)
},
raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
raf ? raf(function() {
    window.setTimeout(loadDeferredStyles, 0)
}) : window.addEventListener("load", loadDeferredStyles);