
var turnChecker

function tic(id){
    if(turnChecker === false){
        document.getElementById(id).innerHTML = "tac"
        document.getElementById(id).style.backgroundColor = "#024e91"
        turnChecker = true
        document.getElementById(id).onclick = " "
    }
    else{
        document.getElementById(id).innerHTML = "tic"
        document.getElementById(id).style.backgroundColor = "#f5ad36"
        document.getElementById(id).onclick = " "
        turnChecker = false
    }

    var col1 = document.getElementById("box1").innerHTML + document.getElementById("box2").innerHTML + document.getElementById("box3").innerHTML
    var col2 = document.getElementById("box4").innerHTML + document.getElementById("box5").innerHTML + document.getElementById("box6").innerHTML
    var col3 = document.getElementById("box7").innerHTML + document.getElementById("box8").innerHTML + document.getElementById("box9").innerHTML

    var row1 = document.getElementById("box1").innerHTML + document.getElementById("box4").innerHTML + document.getElementById("box7").innerHTML
    var row2 = document.getElementById("box2").innerHTML + document.getElementById("box5").innerHTML + document.getElementById("box8").innerHTML
    var row3 = document.getElementById("box3").innerHTML + document.getElementById("box6").innerHTML + document.getElementById("box9").innerHTML

    var cross1 = document.getElementById("box1").innerHTML + document.getElementById("box5").innerHTML + document.getElementById("box9").innerHTML
    var cross2 = document.getElementById("box3").innerHTML + document.getElementById("box5").innerHTML + document.getElementById("box7").innerHTML

    var forTic = [col1, col2, col3, row1, row2, row3, cross1, cross2]
    var forTac = [col1, col2, col3, row1, row2, row3, cross1, cross2]
   
    for(var i = 0; i < forTic.length; i++){
        if(forTic[i] === "tictictic"){
            setTimeout(() => {
                alert("tic WON")
                location.reload();
            }, 300);
        }
    }

    for(var j = 0; j < forTic.length; j++){
        if(forTic[j] === "tactactac"){
            setTimeout(() => {
                alert("tac WON")
                location.reload();
            }, 300);

        }
    }
}   