
//Slumpar fram ett ord att matcha med
function randomFunction() {
    
    let randomNumber = Math.floor((Math.random() * 3) +1);
    
    if (randomNumber === 1){
        computersChoise = "Doggy";
    }
    else if (randomNumber === 2){
        computersChoise = "Brain";
    }
    else {
        computersChoise = "Game"
    }
    
    //skriver ut det framslumpade ordet
    let el = document.getElementById("h2");
    el.innerHTML = computersChoise;
    
    //ändrar text på knapp
    let winButton = document.getElementsByClassName("knappen")[0];
    winButton.innerText = "Press to generate a word";
    
    //visar svarsalternativen
    let usersList = document.getElementsByClassName("usersList")[0];
    usersList = usersList.style.display="block";
    
    //döljer tidigare meddelande
    let message = document.getElementById("message");
    message = message.style.display="none";
    
}

let points = document.getElementById("points");
let answer = document.getElementsByName("list");
let totalPoints = 0;


//kontrollerar användarens svar
function checkAnswer() {

    for(i=0;i<answer.length;i++){
        if(answer[i].checked){
            if(computersChoise == "Brain" && answer[i].value == "damage"){
                message.style.display="block";
                message.innerHTML = "Well done! Press the button to try again.";
                totalPoints++;
                points.innerHTML = totalPoints;
                break;
            }
            if(computersChoise == "Doggy" && answer[i].value == "bag"){
                message.style.display="block";
                message.innerHTML = "Well done! Press the button to try again.";
                totalPoints++;
                points.innerHTML = totalPoints;
                break;
            }
            if(computersChoise == "Game" && answer[i].value == "plan"){
                message.style.display="block";
                message.innerHTML = "Well done! Press the button to try again.";
                totalPoints++;
                points.innerHTML = totalPoints;
                break;
            }
            else {
                message.style.display="block";
                message.innerHTML = "<img src='../images/facepalm.jpg' alt='Italian Trulli' width='300px'></img>";
                totalPoints--;
                points.innerHTML = totalPoints;
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
        let winButton = document.getElementsByClassName("knappen")[0];
        winButton.innerText = "Press to play again";
        totalPoints = 0;
        points.innerHTML = totalPoints;
        return totalPoints;
    }
    else {
        return totalPoints;
    }
};
