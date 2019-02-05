
//Slumpar fram ett ord att matcha med
function randomFunction() {
    let randomNumber = Math.floor((Math.random() * 3) +1);

    if (randomNumber === 1){
        computersChoise = "Hund";
    }
    else if (randomNumber === 2){
        computersChoise = "Kaffe";
    }
    else {
        computersChoise = "SL-"
    }

    //skriver ut det framslumpade ordet
    let el = document.getElementById("h2");
    el.innerHTML = computersChoise;

    //visar svarsalternativen
    let usersList = document.getElementsByClassName("usersList")[0]
    usersList = usersList.style.display="block";

    //döljer tidigare meddelande
    let message = document.getElementById("message");
    message = message.style.display="none";

}


//kontrollerar användarens svar
function checkAnswer() {
    let answer = document.getElementsByName("list");
    let message = document.getElementById("message");

    for(i=0;i<answer.length;i++){
        if(answer[i].checked){
            if(computersChoise == "Kaffe" && answer[i].value == "sump"){
                message.style.display="block";
                message.innerHTML = "Rätt! Klicka på knappen för att köra igen.";
                break;
            }
            if(computersChoise == "Hund" && answer[i].value == "valp"){
                message.style.display="block";
                message.innerHTML = "Rätt! Klicka på knappen för att köra igen.";
                break;
            }
            if(computersChoise == "SL-" && answer[i].value == "minut"){
                message.style.display="block";
                message.innerHTML = "Rätt! Klicka på knappen för att köra igen.";
                break;
            }
            else {
                message.style.display="block";
                message.innerHTML = "<img src='../images/facepalm.jpg' alt='Italian Trulli' width='300px'></img>";
            }
        }
    }

}
