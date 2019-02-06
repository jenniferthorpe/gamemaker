let points = document.getElementById("points");
let pointsText = document.getElementById("pointsText");
let answer = document.getElementsByName("list");
let winButton = document.getElementsByClassName("knappen")[0];
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
        computersChoise = "Engage in activity for enjoyment and recreation rather than a serious or practical purpose.";
    }
    else if (randomNumber === 2){
        computersChoise = "Physical harm that impairs the value, usefulness, or normal function of something.";
    }
    else {
        computersChoise = "A written or printed work consisting of pages glued or sewn together along one side and bound in covers."
    }
    
    //skriver ut det framslumpade ordet
    let el = document.getElementById("h2");
    el.innerHTML = computersChoise;
    
    //ändrar text på knapp
    let winButton = document.getElementsByClassName("knappen")[0];
    // winButton.innerText = "Press to generate a word";
    
    //visar svarsalternativen
    let usersList = document.getElementsByClassName("usersList")[0];
    usersList = usersList.style.display="block";
    
    //döljer tidigare meddelande
    let message = document.getElementById("message");
    message = message.style.display="none";
    let messageImg = document.getElementById("messageImg");
    messageImg = messageImg.style.display="none";
    
    //döljer knappen
    winButton = winButton.style.display="none";

    pointsText.innerHTML = "Points:";


    removeClass();
}


//kontrollerar användarens svar
function checkAnswer() {
    
    for(i=0;i<answer.length;i++){
        if(answer[i].checked){
            if(computersChoise == "Physical harm that impairs the value, usefulness, or normal function of something." && answer[i].value == "Damage"){
                // message.style.display="block";
                // message.innerHTML = "Well done!";
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 2000);
                addClass();
                break;
            }
            if(computersChoise == "Engage in activity for enjoyment and recreation rather than a serious or practical purpose." && answer[i].value == "Play"){
                // message.style.display="block";
                // message.innerHTML = "Well done!";
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 2000);
                addClass();
                break;
            }
            if(computersChoise == "A written or printed work consisting of pages glued or sewn together along one side and bound in covers." && answer[i].value == "Book"){
                // message.style.display="block";
                // message.innerHTML = "Well done!";
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 2000);
                addClass();
                break;
            }
            else {
                messageImg.style.display="block";
                messageImg.innerHTML = "<img src='../images/facepalm.jpg' alt='Italian Trulli' width='250px'></img>";
                totalPoints--;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 1500);
            }
        }
    }
    
    totalPoints = checkWin(totalPoints);
    
};

//kontrollera om spelet är vunnet
function checkWin (totalPoints){
    if(totalPoints == 5){
        message.style.display="block";
        message.innerHTML = "Congratulations! You won!"
        message.classList.add("textAnimation");
        winButton.style.display = "block";
        winButton.innerText = "Press to play again";
        totalPoints = 0;
        points.innerHTML = "";
        pointsText.innerHTML ="";
        clearTimeout(timer);        
        return totalPoints;
    }
    else {
        return totalPoints;
    }
};
