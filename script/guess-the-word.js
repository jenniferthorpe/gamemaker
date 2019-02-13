let points = document.getElementById("points");
let pointsText = document.getElementById("pointsText");
let answer = document.getElementsByName("list");
let winButton = document.getElementsByClassName("knappen")[0];
let el = document.getElementById("h2");
let message = document.getElementById("message");

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
    
    let randomNumber = Math.floor((Math.random() * 5) +1);
    
    if (randomNumber === 1){
        computersChoise = "Engage in activity for enjoyment and recreation rather than a serious or practical purpose.";
    }
    else if (randomNumber === 2){
        computersChoise = "Physical harm that impairs the value, usefulness, or normal function of something.";
    }
    else if (randomNumber === 3){
        computersChoise = "A large primate that lacks a tail, including the gorilla, chimpanzees, orangutan, and gibbons.";
    }
    else if (randomNumber === 4){
        computersChoise = "A system for transmitting voices over a distance using wire or radio, by converting acoustic vibrations to electrical signals.";
    }
    else {
        computersChoise = "A written or printed work consisting of pages glued or sewn together along one side and bound in covers.";
    }
    
    //skriver ut det framslumpade ordet
    let el = document.getElementById("h2");
    el.innerHTML = computersChoise;
    el = el.style.display = "block";
    
    //visar svarsalternativen
    let usersList = document.getElementsByClassName("usersList")[0];
    usersList = usersList.style.display="block";
    
    //döljer tidigare meddelande
    let message = document.getElementById("message");
    message = message.style.display="none";
    
    //döljer knappen
    let winButton = document.getElementsByClassName("knappen")[0];
    winButton = winButton.style.display="none";

    pointsText.innerHTML = "Points:";

    removeClass();
}


//kontrollerar användarens svar
function checkAnswer() {
    
    for(i=0;i<answer.length;i++){
        if(answer[i].checked){
            if(computersChoise == "Physical harm that impairs the value, usefulness, or normal function of something." && answer[i].value == "Damage"){
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "Engage in activity for enjoyment and recreation rather than a serious or practical purpose." && answer[i].value == "Play"){
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "A written or printed work consisting of pages glued or sewn together along one side and bound in covers." && answer[i].value == "Book"){
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "A large primate that lacks a tail, including the gorilla, chimpanzees, orangutan, and gibbons." && answer[i].value == "Ape"){
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            if(computersChoise == "A system for transmitting voices over a distance using wire or radio, by converting acoustic vibrations to electrical signals." && answer[i].value == "Telephone"){
                totalPoints++;
                points.innerHTML = totalPoints;
                timer = setTimeout(randomFunction, 1500);
                addClass();
                break;
            }
            else {
                totalPoints--;
                points.innerHTML = totalPoints;
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
