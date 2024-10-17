// function checkAddress(fieldId){
//     if(document.getElementById(fieldId).value === ""){
//         alert("Email field is required")
//     }
// }

// function fillCity(){
//     var cityValue;
//     var zipValue = document.getElementById("zip").value;
//     switch(zipValue){
//         case "0020" :
//         cityValue = "Korangi"
//         break;

//         case "0021" :
//         cityValue = "Nazimabad"
//         break;

//         case "0022" :
//         cityValue = "Gulshan"
//         break;

//         case "0023" :
//         cityValue = "Clifton"
//         break;

//         case "0024" :
//         cityValue = "Bahria Town"
//         break;

//         case "0025" :
//         cityValue = "PowerHouse"
//         break;

//         case "0026" :
//         cityValue = "Bahadurabad"
//         break;
//     }
//     console.log(cityValue)
//     // console.log(document.getElementById("city").value)
//     document.getElementById("city").value = cityValue
// }

// function expandMore(){
//     var expParagraph = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo ad perferendis neque optio quo porro maxime id quia ipsa, molestias sint illo sapiente officia inventore, laboriosam eum. Voluptate, reprehenderit?"

//     document.getElementById("para").innerHTML = expParagraph
// }



// function checkPara(){
//     var realPara = document.getElementById("whatPara").innerHTML
//     console.log(realPara)
// }


// var hiddenClass = " hidden"
// function remove(){
//     document.getElementById("para").className = hiddenClass
// }

// ==========================================================================================================================//
// var t = document.getElementById("tableId")
// var td = t.getElementsByTagName("td")

// function colorChange(id){
//     // for(var i = 0; i < td.length; i++){
//         document.getElementById(id).style.backgroundColor = "yellow"
//     // }
// }

// function colorReset(id){
//     // for(var i = 0; i < td.length; i++){
//         document.getElementById(id).style.backgroundColor = "black"
//     // }
// }
// ==========================================================================================================================//

var element = document.childNodes[1].childNodes[2].childNodes[15].childNodes[3]
var ntype = element.nodeType
console.log(element)
console.log(element.innerHTML)
console.log(ntype)
// console.log(element.innerHTML)

// var element = document.querySelectorAll("#n2 p")
// console.log(element[1].innerHTML)