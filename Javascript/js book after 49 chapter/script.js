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

// var element = document.children[0].children[1].children[1].childNodes[0]
// var ntype = element.nodeType
// console.log(element)
// console.log(element.innerHTML)
// console.log(ntype)

// var d = document.getElementById("humpty")
// var pCounter = 0
// for (var i = 0; i < d.childNodes.length; i++) {
//     if (d.childNodes[i].nodeType === 1 ) {
//         pCounter++
//     }
//     if (pCounter === 2) {
//         d.childNodes[i].innerHTML = "All his men."
//         break
//     }
// }

// var p = document.getElementById("n")
// var q = p.parentNode
// var r = q.nodeType
// console.log(q)
// console.log(r)

// var a = document.getElementById("n")
// var b = a.nextSibling.nextSibling
// console.log(b.innerHTML)
// console.log(b.nodeType)

// var a = document.getElementById("p")
// var b = a.previousSibling.previousSibling
// console.log(b.innerHTML)

// var a = document.getElementById("h").lastChild.previousSibling
// var b = a.nodeName
// console.log(b)

// var a = document.getElementById("h")
// var b = a.firstChild
// console.log(b.nodevalue)

// var a = document.getElementById("e")
// var b = a.firstChild.nextSibling.innerHTML
// // var b = a.lastChild.nodeValue
// console.log(b)

// var a = document.getElementById("ap").getAttributeNode("class").value = "class2"
// a.value = "class2"
// console.log(a)

// var idees = document.getElementById("ap").attributes
// console.log(idees[4].value)

// var a = document.getElementById("ap").attributes
// var b = a[1].nodeName
// var c = a[1].nodeValue
// console.log(a)
// console.log(b)
// console.log(c)

// var pElement = document.createElement("p")

// var pText = document.createTextNode("created")

// pElement.appendChild(pText)
// document.write(pElement.innerHTML)  
// console.log(pElement.innerHTML)
// console.log(pElement.outerHTML)

// var div = document.getElementById("divP")
// var p = document.createElement("p")
// var t = document.createTextNode("Create for P & divP")
// p.appendChild(t)
// div.appendChild(p)

// var div = document.getElementById("divP")
// var nodeToRemove = div.childNodes[1]
// div.removeChild(nodeToRemove)
// var p = document.createElement("p")
// var t = document.createTextNode("This is 1 para")
// p.appendChild(t)
// var firstPara = div.firstChild
// // div.insertBefore(p, firstPara.nextSibling.nextSibling.nextSibling.nextSibling)


var student = {
    name : "Abdul Rehman",
    id : 12345,
    class : 9
}
// delete student.name

var propertyExists = "name" in student

console.log(student.name)
console.log(propertyExists)


