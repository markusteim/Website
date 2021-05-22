//Author of the code - Markus Teimann

let correctArrays = ["correctButton", "correctButton1" , "correctButton2"];
let inCorrectArrays = ["inCorrectButton", "inCorrectButton1", "inCorrectButton2", "inCorrectButton3", "inCorrectButton4", "inCorrectButton5" ];
//arrays that store the ID's of correct and incorrect values

function getID(clickedID){ 
    for (let x = 0; x < correctArrays.length; x++){
        if (clickedID == correctArrays[x]){ 
            let correctBtn = document.querySelector(`#${clickedID}`); //checks if the clickedID is one of the correct buttons and
            correctBtn.style.backgroundColor = '#61E786';             //if so then queries ID and sets its color to green 
            break;
    }    
    }

    for (let x = 0; x < inCorrectArrays.length; x++){
        if (clickedID == inCorrectArrays[x]){
            let inCorrectBtn = document.querySelector(`#${clickedID}`); //checks if the clickedID is one of the incorrect buttons and
            inCorrectBtn.style.backgroundColor = '#E71D36';             //if so then queries ID and sets its color to red 
            break;
    }    
    }
}

