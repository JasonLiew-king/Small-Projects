function moveLeft(){
    let left =
    parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
    left -= 100;
    if(left >= 0)
    {
        character.style.left = left + "px";
    }
}

function moveRight(){
    let left =
    parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
    left += 100;
    if(left<300)
    {
        character.style.left = left + "px";
    }
}

document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});

var block = document.getElementById("block");
var count = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random()*3);
    left = random * 100;
    block.style.left = left + "px";
    count++;
});

setInterval(function() {
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft == blockLeft && blockTop <400 && blockTop>200)
    {
        alert("You lose. score:" + count);
        block.style.animation = "none";
    }
}, 1);