let openers = document.getElementsByClassName('openers');
let titles = document.getElementsByClassName('title');

for (let i = 0; i < openers.length; i++) {
    openers[i].classList.add("reveal-animation");   
}

setTimeout(() => {
    for (let i = 0; i < openers.length; i++) {
        openers[i].style.height = "0%";
        openers[i].classList.remove("reveal-animation");   
        // openers[i].style.display = "none";
    }
}, 3000);


titles[0].addEventListener('mouseover', function(){
    alert('fffff');
})

