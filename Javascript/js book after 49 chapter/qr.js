// // -----------------------------------------------------------------    QR CODE GENERATOR
// var parentRow = document.createElement("div")
// parentRow.className = "row"
// var parentRowCopy = document.createElement("div")
// parentRowCopy.className = "row"
// for(var k = 0; k < 30; k++){
//     for(var j = 0; j < 30; j++){
//         var boxCopy = document.createElement("div")
//         boxCopy.className = "box"
//         parentRowCopy.append(boxCopy)
//         document.getElementById("parentQR").append(parentRowCopy)
//     }
// }
// // -----------------------------------------------------------------    QR CODE GENERATOR


// QR CODE MISSION //
// QR CODE MISSION //

var boxParent = document.getElementById("boxParent")

var nextLineStartingNumber = 0

for(var j = nextLineStartingNumber; j <= nextLineStartingNumber + 24; j++){
    for(var i = 1; i <= 25; i++){
        var smallBox = document.createElement("div")
        smallBox.className = "box"
        boxParent.appendChild(smallBox)
    }
    var lineBreaker = document.createElement("br")
    boxParent.appendChild(lineBreaker)
}

var test = document.getElementById("test")
var lineBreaker = document.createElement("br")
test.appendChild(lineBreaker)





// QR CODE MISSION //
// QR CODE MISSION //
