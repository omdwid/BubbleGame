var timer = 60;
var hitValue = 0;
var Score = 0;

function changeHitValue(){
    hitValue = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = `${hitValue}`;
}

function changeScore(){
    Score += 10;
    document.querySelector("#scoreval").textContent = `${Score}`;
}

function makeBubble(){
    let bubbles = '';
    for (let i = 1; i <= 130; i++) {
        let num  = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${num}</div>`;
    }
    
    document.querySelector(".pbtm").innerHTML = bubbles;
}

function changeTimer(){
    var my_interval = setInterval(function(){
        if(timer <= 0){
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over. Score: ${Score} 🥳🎊</h1>`
           clearInterval(my_interval);
        }
        else{
            timer--;
            document.querySelector("#timerval").textContent = `${timer}`;
        }
    }, 1000)
}

// now i have to add a event listener to the #pbtm div
// here the number of bubbles is very large so adding a event listener to each of the bubble is hectic task so 
// we will add event listerner to the parent

document.querySelector('.pbtm').addEventListener("click", function(event){
    let n = Number(event.target.textContent);
    if(n === hitValue){
        changeScore();
        changeHitValue();
        makeBubble();
    }
});

makeBubble();
changeTimer();
changeHitValue();