let portal = document.getElementById('portal');
for (let i = 0; i < 360; i++) {
    let chispa = document.createElement("div");
    chispa.className = "chispa";
    let chispaTranslation = Math.random() * (120 - 100) + 100;
    chispa.style.transform = 'rotate(' + (i * 2) + 'deg) translate('+chispaTranslation+'px)';
    portal.appendChild(chispa);
    
}


// let portal = document.getElementById('portal');
// for(let i = 0; i < 1; i++){
// 	let chispa = document.createElement('div');
// 	chispa.className = "chispa";

// 	let chispaTranslation = Math.random() * (120 - 100) + 100;
// 	chispa.style.transform = 'rotate('+(i * 2) +'deg)';
// 	chispa.style.transform = 'translate('+chispaTranslation+'px)';
// 	portal.appendChild(chispa);
// }