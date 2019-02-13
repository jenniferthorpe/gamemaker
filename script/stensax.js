let points = document.getElementById("points");
let pointsText = document.getElementById("pointsText");
let answer = document.getElementsByName("list");
let winButton = document.getElementsByClassName("knappen")[0];
let el = document.getElementById("h2");
let usersList = document.getElementsByClassName("usersList")[0];
let message = document.getElementById("message");


let computersChoise;
let totalPoints = 0;
let timer;

let animation = document.getElementById("points");

function addClass () {
    animation.classList.add("animation");
}
function addClassText () {
    animation.classList.add("textAnimation");
}
function removeClass () {
    animation.classList.remove("animation");
}

//Slumpar fram ett ord att matcha med
function randomFunction() {
    
    let randomNumber = Math.floor((Math.random() * 3) +1);
    
    if (randomNumber === 1){
        computersChoise = "Rock";
    }
    else if (randomNumber === 2){
        computersChoise = "Scissor";
    }
    else {
        computersChoise = "Paper";
    }

    //skriver ut det framslumpade ordet
    el.innerHTML = computersChoise;
    el = el.style.display = "none";
        
    //visar svarsalternativen
    usersList = usersList.style.display="block";
    
    //döljer tidigare meddelande
    message = message.style.display="none";
    
    //döljer knappen
    winButton = winButton.style.display="none";

    pointsText.innerHTML = "Points:";

    removeClass();
}


//kontrollerar användarens svar
function checkAnswer() {
    
    let el = document.getElementById("h2");

    for(i=0;i<answer.length;i++){
        if(answer[i].checked){
            if(computersChoise == "Rock" && answer[i].value == "Paper"){
                totalPoints++;
                points.innerHTML = totalPoints;
                
                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "Scissor" && answer[i].value == "Rock"){
                totalPoints++;
                points.innerHTML = totalPoints;

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "Paper" && answer[i].value == "Scissor"){
                totalPoints++;
                points.innerHTML = totalPoints;

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "Paper" && answer[i].value == "Paper"){
                points.innerHTML = totalPoints;

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "Scissor" && answer[i].value == "Scissor"){
                points.innerHTML = totalPoints;

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "Rock" && answer[i].value == "Rock"){
                points.innerHTML = totalPoints;

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            
            else {
                totalPoints--;
                points.innerHTML = totalPoints;

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
        }
    }
    

    totalPoints = checkWin(totalPoints);
    
};

//kontrollera om spelet är vunnet
function checkWin (totalPoints){
    if(totalPoints == 2){
        message.style.display="block";
        message.innerHTML = "Congratulations! You won!"
        message.classList.add("textAnimation");
        button.style.display = "block";
        button.innerText = "Press to play again";
        totalPoints = 0;
        points.innerHTML = "";
        pointsText.innerHTML ="";
        let usersList = document.getElementsByClassName("usersList")[0];   
        usersList = usersList.style.display="none";
        let el = document.getElementById("h2");
        el = el.style.display="none";
        return totalPoints;
    }
    else {
        return totalPoints;
    }
};
