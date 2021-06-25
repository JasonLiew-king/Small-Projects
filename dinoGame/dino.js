let character = document.getElementById('character');
let block = document.getElementById('block');
let counter = 0;

function jump()
{
	if(character.classList != "animate")
	{
		character.classList.add("animate");
	}
	setTimeout(function(){
		character.classList.remove("animate");
		counter++;
	}, 500);
}

var checkDead = setInterval(() => {
	 var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	 var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	 if(blockLeft<20 && blockLeft>0 && characterTop >= 130)
	 {
		 block.style.animation = "none";
		 block.style.display = "none";
		 alert("u lose!!!, the score:" + counter);
	 }
}, 10);


//setTimeout : allows us to run a function once after the interval of time.

//setInterval allows us to run a function repeatedly, starting after the 
//interval of time, then repeating continuously at that interval.


/*
character.addEventListener('click', function(){
    character.classList.add('animate');
});
*/ //only can jump once