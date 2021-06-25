let btnClick = document.getElementById('btn-change');
let circle = document.getElementById('color-change');
let colours = ['red','green','yellow','blue','orange','violet','purple'];

document.getElementById("color-change").style.backgroundColor = "violet";
btnClick.addEventListener('click', changeBackground);

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colours.length);
    circle.style.backgroundColor = colours[colorIndex];
}

//===============================================================================================//

(function() {
    const button = document.querySelector('#btn2')
    const body = document.querySelector('#hex-change')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', changeHex)

    function changeHex(){
        let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
        value.textContent = hex
        body.style.backgroundColor = hex
    }
} )();