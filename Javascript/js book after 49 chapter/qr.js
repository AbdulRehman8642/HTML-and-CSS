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

var randomIds = [
    "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box9", "box10", "box11",
"box12", "box13", "box14", "box15", "box16", "box17", "box19", "box20", "box21",
"box22", "box23", "box24", "box25", "box26", "box32", "box34", "box35", "box36",
"box37", "box38", "box39", "box40", "box41", "box42", "box44", "box50", "box51",
"box53", "box54", "box55", "box57", "box59", "box60", "box61", "box62", "box63",
"box64", "box65", "box66", "box67", "box69", "box71", "box72", "box73", "box75",
"box76", "box78", "box79", "box80", "box82", "box84", "box85", "box86", "box87",
"box88", "box89", "box90", "box91", "box92", "box94", "box96", "box97", "box98",
"box100", "box101", "box103", "box104", "box105", "box107", "box109", "box110",
"box111", "box112", "box113", "box114", "box115", "box116", "box117", "box119",
"box121", "box122", "box123", "box125", "box126", "box132", "box134", "box135",
"box136", "box137", "box138", "box139", "box140", "box141", "box142", "box144",
"box150", "box151", "box152", "box153", "box154", "box155", "box156", "box157",
"box159", "box160", "box161", "box162", "box163", "box164", "box165", "box166",
"box167", "box169", "box170", "box171", "box172", "box173", "box174", "box175",
"box184", "box185", "box186", "box187", "box188", "box189", "box190", "box191",
"box192", "box201", "box202", "box203", "box204", "box205", "box206", "box207",
"box208", "box209", "box210", "box211", "box212", "box213", "box214", "box215",
"box216", "box217", "box218", "box219", "box220", "box221", "box222", "box223",
"box224", "box225", "box226", "box227", "box228", "box229", "box230", "box231",
"box232", "box233", "box234", "box235", "box236", "box237", "box238", "box239",
"box240", "box241", "box242", "box243", "box244", "box245", "box246", "box247",
"box248", "box249", "box250", "box251", "box252", "box253", "box254", "box255",
"box256", "box257", "box258", "box259", "box260", "box261", "box262", "box263",
"box264", "box265", "box266", "box267", "box268", "box269", "box270", "box271",
"box272", "box273", "box274", "box275", "box276", "box277", "box278", "box279",
"box280", "box281", "box282", "box283", "box284", "box285", "box286", "box287",
"box288", "box289", "box290", "box291", "box292", "box293", "box294", "box295",
"box296", "box297", "box298", "box299", "box300", "box301", "box302", "box303",
"box304", "box305", "box306", "box307", "box308", "box309", "box310", "box311",
"box312", "box313", "box314", "box315", "box316", "box317", "box318", "box319",
"box320", "box321", "box322", "box323", "box324", "box325", "box326", "box327",
"box328", "box329", "box330", "box331", "box332", "box333", "box334", "box335",
"box336", "box337", "box338", "box339", "box340", "box341", "box342", "box343",
"box344", "box345", "box346", "box347", "box348", "box349", "box350", "box351",
"box352", "box353", "box354", "box355", "box356", "box357", "box358", "box359",
"box360", "box361", "box362", "box363", "box364", "box365", "box366", "box367",
"box368", "box369", "box370", "box371", "box372", "box373", "box374", "box375",
"box376", "box377", "box378", "box379", "box380", "box381", "box382", "box383",
"box384", "box385", "box386", "box387", "box388", "box389", "box390", "box391",
"box392", "box393", "box394", "box395", "box396", "box397", "box398", "box399",
"box400", "box401", "box402", "box403", "box404", "box405", "box406", "box407",
"box408", "box409", "box410", "box411", "box412", "box413", "box414", "box415",
"box416", "box417", "box418", "box419", "box420", "box421", "box422", "box423",
"box424", "box425", "box434", "box435", "box436", "box437", "box438", "box439",
"box440", "box441", "box442", "box443", "box444", "box445", "box446", "box447",
"box448", "box449", "box450", "box451", "box452", "box453", "box454", "box455",
"box456", "box457", "box459", "box460", "box461", "box462", "box463", "box464",
"box465", "box466", "box467", "box468", "box469", "box470", "box471", "box472",
"box473", "box474", "box475", "box476", "box482", "box484", "box485", "box486",
"box487", "box488", "box489", "box490", "box491", "box492", "box493", "box494",
"box495", "box496", "box497", "box498", "box499", "box500", "box501", "box503",
"box504", "box505", "box507", "box509", "box510", "box511", "box512", "box513",
"box514", "box515", "box516", "box517", "box518", "box519", "box520", "box521",
"box522", "box523", "box524", "box525", "box526", "box528", "box529", "box530",
"box532", "box534", "box535", "box536", "box537", "box538", "box539", "box540",
"box541", "box542", "box543", "box544", "box545", "box546", "box547", "box548",
"box549", "box550", "box551", "box553", "box554", "box555", "box557", "box559",
"box560", "box561", "box562", "box563", "box564", "box565", "box566", "box567",
"box568", "box569", "box570", "box571", "box572", "box573", "box574", "box575",
"box576", "box582", "box584", "box585", "box586", "box587", "box588", "box589",
"box590", "box591", "box592", "box593", "box594", "box595", "box596", "box597",
"box598", "box599", "box600", "box601", "box602", "box603", "box604", "box605",
"box606", "box607", "box609", "box610", "box611", "box612", "box613", "box614",
"box615", "box616", "box617", "box618", "box619", "box620", "box621", "box622",
"box623", "box624", "box625"
]

var sideBoxesWithSpace =  [
    "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box18", "box19", 
    "box20", "box21", "box22", "box23", "box24", "box25", "box26", "box27", "box28", 
    "box29", "box30", "box31", "box32", "box33", "box43", "box44", "box45", "box46", 
    "box47", "box48", "box49", "box50", "box51", "box52", "box53", "box54", "box55", 
    "box56", "box57", "box58", "box68", "box69", "box70", "box71", "box72", "box73", 
    "box74", "box75", "box76", "box77", "box78", "box79", "box80", "box81", "box82", 
    "box83", "box93", "box94", "box95", "box96", "box97", "box98", "box99", "box100", 
    "box101", "box102", "box103", "box104", "box105", "box106", "box107", "box108", 
    "box118", "box119", "box120", "box121", "box122", "box123", "box124", "box125", 
    "box126", "box127", "box128", "box129", "box130", "box131", "box132", "box133", 
    "box143", "box144", "box145", "box146", "box147", "box148", "box149", "box150", 
    "box151", "box152", "box153", "box154", "box155", "box156", "box157", "box158", 
    "box168", "box169", "box170", "box171", "box172", "box173", "box174", "box175", 
    "box176", "box177", "box178", "box179", "box180", "box181", "box182", "box183", 
    "box193", "box194", "box195", "box196", "box197", "box198", "box199", "box200", 
    "box426", "box427", "box428", "box429", "box430", "box431", "box432", "box433", 
    "box451", "box452", "box453", "box454", "box455", "box456", "box457", "box458", 
    "box476", "box477", "box478", "box479", "box480", "box481", "box482", "box483", 
    "box501", "box502", "box503", "box504", "box505", "box506", "box507", "box508", 
    "box526", "box527", "box528", "box529", "box530", "box531", "box532", "box533", 
    "box551", "box552", "box553", "box554", "box555", "box556", "box557", "box558", 
    "box576", "box577", "box578", "box579", "box580", "box581", "box582", "box583", 
    "box601", "box602", "box603", "box604", "box605", "box606", "box607", "box608"
]
  

// making all boxes Ids
for(var k = 0; k < allBoxesArray.length; k++){
    allBoxesArray[k].id = `box${k+1}`
}

// making side wale boxes white

for(var s = 0; s < sideBoxIDs.length; s++){
    document.getElementById(sideBoxIDs[s]).style.backgroundColor = "transparent"
}

// var idNumber

// for(var n = 0; n < sideBoxIDs.length; n++){
//     idNumber = sideBoxIDs[n].slice(3)
// }

for(var h = 0; h < randomIds.length; h++){

    var mathRandom1 = Math.random().toString()
    var random1 = mathRandom1.slice(2, 3)
    var newId1 = `box${random1}`

    var mathRandom2 = Math.random().toString()
    var random2 = mathRandom2.slice(2, 4)
    var newId2 = `box${random2}`
    
    var mathRandom3 = Math.random().toString()
    var random3 = mathRandom3.slice(2, 5)
    var newId3 = `box${random3}`
    
    for(var r = 0; r < sideBoxesWithSpace.length; r++){
        var toCheckId = sideBoxesWithSpace[r].slice(3)
        var completeCheckId = `box${toCheckId}`
        for(var d = 0; d < sideBoxesWithSpace.length; d++){
            if(newId1.slice(3) <= 625 && newId1 != completeCheckId && newId1.slice(3,4) != 0){
                document.getElementById(newId1).style.backgroundColor = "transparent"
            }
        }

        for(var d = 0; d < sideBoxesWithSpace.length; d++){
            if(newId2.slice(3) <= 625 && newId2 != completeCheckId && newId2.slice(3,4) != 0 && newId2.slice(4,5) != 0){
                document.getElementById(newId2).style.backgroundColor = "transparent"
            }
        }

        for(var d = 0; d < sideBoxesWithSpace.length; d++){
            if(newId3.slice(3) <= 625 && newId3 != completeCheckId && newId3.slice(3,4) != 0 && newId3.slice(3,4) <= 6 && newId3.slice(4,5) != 0 && newId3.slice(4,5) <= 2 && newId3.slice(5,6) != 0 && newId3.slice(5,6) <= 5){
                document.getElementById(newId3).style.backgroundColor = "transparent"
            }
        }
        
    }

}
// console.log(idNumber)

console.log(Math.random())
console.log(newId1)
console.log(newId2)
console.log(newId3)
// console.log(randomIds.length)

// QR CODE MISSION //
// QR CODE MISSION //
