const choices = ['Rock', 'Paper', 'Scissors'];

let wins = 0;
let loses = 0;
let draws = 0;

function draw(){
    document.getElementById("conclusion").innerHTML = "Draw!";
    draws += 1;
    document.getElementById("draws").textContent = "Draws : " + draws;
}

function win(){
    document.getElementById("conclusion").innerHTML = "You Win!";
    wins += 1;
    document.getElementById("wins").textContent = "Wins : " + wins;
}

function loss(){
    document.getElementById("conclusion").innerHTML = "You lose!";
    loses += 1;
    document.getElementById("loses").textContent = "Loses : " + loses;
}

function rock(){
    const random = Math.floor(Math.random() * choices.length);
    document.getElementById("computer-output").innerHTML = "Computer : " + choices[random];

    if(random == 0){
        draw();

    } else if(random == 1){
        loss();

    } else {
        win();
    }

}

function paper(){
    const random = Math.floor(Math.random() * choices.length);
    document.getElementById("computer-output").innerHTML = "Computer : " + choices[random];

    if(random == 1){
        draw();

    } else if(random == 2){
        loss();

    } else {
        win();
    }
}

function scissors(){
    const random = Math.floor(Math.random() * choices.length);
    document.getElementById("computer-output").innerHTML = "Computer : " + choices[random];

    if(random == 2){
        draw();

    } else if(random == 0){
        loss();

    } else {
        win();
    }
}