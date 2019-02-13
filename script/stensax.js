let points = document.getElementById("points");
let pointsText = document.getElementById("pointsText");
let answer = document.getElementsByName("list");
let winButton = document.getElementsByClassName("knappen")[0];
let usersList = document.getElementsByClassName("usersList")[0];
let message = document.getElementById("message");

let computersChoise;
let totalPoints = 0;
let totalPointsCPU = 0;
let timer;

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

    //döljer ut det framslumpade ordet
    let el = document.getElementById("h2");
    el.innerHTML = computersChoise;
    el = el.style.display = "none";
        
    //visar svarsalternativen
    usersList = usersList.style.display="block";
    
    //döljer tidigare meddelande
    message = message.style.display="none";
    
    //döljer knappen
    winButton = winButton.style.display="none";

    pointsText.innerHTML = "Points:";
    pointsTextCPU.innerHTML = "Points:";

}


//kontrollerar användarens svar
function checkAnswer() {
    
    for(i=0;i<answer.length;i++){
        if(answer[i].checked){
            if(computersChoise == "Rock" && answer[i].value == "Paper"){
                totalPoints++;
                points.innerHTML = totalPoints;
                let el = document.getElementById("h2");

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                break;
            }
            if(computersChoise == "Scissor" && answer[i].value == "Rock"){
                totalPoints++;
                points.innerHTML = totalPoints;
                let el = document.getElementById("h2");

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                break;
            }
            if(computersChoise == "Paper" && answer[i].value == "Scissor"){
                totalPoints++;
                points.innerHTML = totalPoints;
                let el = document.getElementById("h2");

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                break;
            }
            if(computersChoise == "Paper" && answer[i].value == "Paper"){
                points.innerHTML = totalPoints;
                pointsCPU.innerHTML = totalPointsCPU;
                let el = document.getElementById("h2");

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                break;
            }
            if(computersChoise == "Scissor" && answer[i].value == "Scissor"){
                points.innerHTML = totalPoints;
                pointsCPU.innerHTML = totalPointsCPU;
                let el = document.getElementById("h2");

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                break;
            }
            if(computersChoise == "Rock" && answer[i].value == "Rock"){
                points.innerHTML = totalPoints;
                pointsCPU.innerHTML = totalPointsCPU;
                let el = document.getElementById("h2");

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
                break;
            }
            
            else {
                totalPointsCPU++;
                pointsCPU.innerHTML = totalPointsCPU;
                let el = document.getElementById("h2");

                el.innerHTML = computersChoise;
                el = el.style.display = "block";
                timer = setTimeout(randomFunction, 1500);
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
        pointsCPU.innerHTML = "";
        pointsTextCPU.innerHTML ="";
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
