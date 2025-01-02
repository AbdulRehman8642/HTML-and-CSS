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

for(var j = 0; j < 25; j++){
    var rowSingle = document.createElement("div")
    rowSingle.className = "row"
    for(var i = 0; i < 25; i++){
        var smallBox = document.createElement("div")
        smallBox.className = "box"
        rowSingle.appendChild(smallBox)
    }
    boxParent.appendChild(rowSingle)
    // var lineBreaker = document.createElement("br")
    // boxParent.appendChild(lineBreaker)
}

var allBoxesArray = document.getElementsByClassName("box")

var sideBoxIDs = [
    "box8", "box18", "box33", "box43", "box58", "box68", "box83", "box93",
    "box108", "box118", "box133", "box143", "box158", "box168", "box176",
    "box177", "box178", "box179", "box180", "box181", "box182", "box183",
    "box193", "box194", "box195", "box196", "box197", "box198", "box199",
    "box200", "box426", "box427", "box428", "box429", "box430", "box431",
    "box432", "box433", "box458", "box483", "box508", "box533", "box558",
    "box583", "box608", "box52", "box56", "box70", "box74", "box77", "box81", "box95", "box99",
    "box102", "box106", "box120", "box124", "box502", "box506", "box527", 
    "box531", "box552", "box556", "box27", "box28", "box29", "box30", "box31",
    "box127", "box128", "box129", "box130", "box131",
    "box45", "box46", "box47", "box48", "box49",
    "box145", "box146", "box147", "box148", "box149",
    "box477", "box478", "box479", "box480", "box481",
    "box577", "box578", "box579", "box580", "box581"
];
  

// making all boxes Ids
for(var k = 0; k < allBoxesArray.length; k++){
    allBoxesArray[k].id = `box${k+1}`
}

// making side wale boxes white

for(var s = 0; s < sideBoxIDs.length; s++){
    document.getElementById(sideBoxIDs[s]).style.backgroundColor = "transparent"
}

console.log(allBoxesArray)
console.log(typeof allBoxesArray)

// QR CODE MISSION //
// QR CODE MISSION //
