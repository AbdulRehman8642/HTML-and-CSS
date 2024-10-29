// =========================================================================================================================
// -----------------------------------------LUDO-PROJECT--------------------------------------------------------------------
// =========================================================================================================================

// ---------------------------------------------DESIGNING-------------------------------------------------------------------
// ---------------------------------------------DESIGNING-------------------------------------------------------------------

var oneDice
var twoDice
var threeDice
var fourDice
var fiveDice
var sixDice

var oneDice2
var twoDice2
var threeDice2
var fourDice2
var fiveDice2
var sixDice2

var blueGot = "./ludo assets/blue.png"
var blueGotIdArray = ["blueHouseGot1", "blueHouseGot2", "blueHouseGot3", "blueHouseGot4"]

var a
var diceNumber

var c
var d

var id

var flipChecker = false
function diceFlip(){
    a = Math.random().toString()

    for(var i = 0; i <= a.length; i++){
        if(a[i] > 0 && a[i] < 7){
            diceNumber= a[i]
        }
    }
    console.log(diceNumber)

    oneDice = "./ludo assets/dice1.png"
    twoDice = "./ludo assets/dice2.webp"
    threeDice = "./ludo assets/dice3.webp"
    fourDice = "./ludo assets/dice4.png"
    fiveDice = "./ludo assets/dice5.png"
    sixDice = "./ludo assets/dice6.png"

    if(diceNumber== 1){
        document.getElementById("flipDicePic").getAttributeNode("src").value = oneDice
    }

    else if(diceNumber== 2){
        document.getElementById("flipDicePic").getAttributeNode("src").value = twoDice
    }

    else if(diceNumber== 3){
        document.getElementById("flipDicePic").getAttributeNode("src").value = threeDice
    }

    else if(diceNumber== 4){
        document.getElementById("flipDicePic").getAttributeNode("src").value = fourDice
    }

    else if(diceNumber== 5){
        document.getElementById("flipDicePic").getAttributeNode("src").value = fiveDice
    }

    else{
        document.getElementById("flipDicePic").getAttributeNode("src").value = sixDice
    }   


// ------------------------------------DICE-2------------------------------------------------------------

    c = Math.random().toString()
    d

    for(var i = 0; i <= c.length; i++){
        if(c[i] > 0 && c[i] < 7){
            d = c[i]
        }
    }
    console.log(d)

    oneDice2 = "./ludo assets/dice1.png"
    twoDice2 = "./ludo assets/dice2.webp"
    threeDice2 = "./ludo assets/dice3.webp"
    fourDice2 = "./ludo assets/dice4.png"
    fiveDice2 = "./ludo assets/dice5.png"
    sixDice2 = "./ludo assets/dice6.png"

    if(d == 1){
        document.getElementById("flipDicePic2").getAttributeNode("src").value = oneDice2
    }

    else if(d == 2){
        document.getElementById("flipDicePic2").getAttributeNode("src").value = twoDice2
    }

    else if(d == 3){
        document.getElementById("flipDicePic2").getAttributeNode("src").value = threeDice2
    }

    else if(d == 4){
        document.getElementById("flipDicePic2").getAttributeNode("src").value = fourDice2
    }

    else if(d == 5){
        document.getElementById("flipDicePic2").getAttributeNode("src").value = fiveDice2
    }

    else{
        document.getElementById("flipDicePic2").getAttributeNode("src").value = sixDice2
    }   


    flipChecker = true


    // ---------------------------------------------------turn-canceller---------------------------------------------------
    // ---------------------------------------------------turn-canceller---------------------------------------------------

    if(diceNumber == 6 || d == 6){
            document.getElementById(blueGotIdArray[0]).style.display = "none"
            blueGotIdArray.shift()
    }
    // var img = document.createElement("img")
    // var src = img.setAttribute("src", blueGot)
    // var clas = img.setAttribute("class", "gotImage")
    // var mainElement = document.getElementById(id)
    // mainElement.appendChild(img)
}
    

// ---------------------------------------------DESIGNING-------------------------------------------------------------------
// ---------------------------------------------DESIGNING-------------------------------------------------------------------


// ---------------------------------------------FUNTIONALITY---------------------------------------------------------------
// ---------------------------------------------FUNTIONALITY---------------------------------------------------------------

// var row1Array = [document.getElementById("df").innerHTML, document.getElementById("opp").innerHTML]
// document.write(row1Array[0], row1Array[1])

// if(diceNumber === 6){
//     var img = document.createElement("img")
//     var src = img.setAttribute("src", "./ludo assets/blue.png")
//     var clas = img.setAttribute("class", "gotImage")
//     var mainElement = document.getElementById("blueStart")
//     mainElement.appendChild(img)
//     document.write(img.getAttribute("src"))
//     document.write("<br>")
//     document.write(img.getAttribute("class"))
// }





// ---------------------------------------------FUNTIONALITY---------------------------------------------------------------
// ---------------------------------------------FUNTIONALITY---------------------------------------------------------------

// =========================================================================================================================
// -----------------------------------------LUDO-PROJECT--------------------------------------------------------------------
// =========================================================================================================================