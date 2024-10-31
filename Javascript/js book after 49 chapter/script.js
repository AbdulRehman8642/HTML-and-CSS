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


// var student = {
//     name : "Abdul Rehman",
//     id : 12345,
//     class : 9
// }
// // delete student.name

// var propertyExists = "name" in student

// console.log(student.name)
// console.log(propertyExists)


// var plan1 = {
//     calcAnnual : function(){
//         alert("You are programmer")
//     }
// }\


// -----is se door raho jab tak js advance na reach out----------------------------------------------
// ------------------------------------------FAKE API DATA WITH ADVANCE METHODS-----------------------------------------
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
// let data = [];
// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then((response) => response.json())
//   .then((jsonData) => {
//     data = jsonData;
    
//     // Map through each item in data and generate a div for each
//     const divs = data.map((item, index) => `
//       <a href="JavaScript:void(0)">
//         <div class="userBox user${index + 1}" id="user${index + 1}">
//           <h1>User ${item.id}</h1>
//           <p>${item.title}</p>
//           <p>${item.userId}</p>
//           <p>${item.id}</p>
//           <p>Completed: ${item.completed}</p>
//         </div>
//       </a>
//     `).join(''); // Use .join('') to create a single string of HTML
    
//     document.getElementById('parent').innerHTML = divs; // Append all divs at once
//     console.log(data); 
//   })
//   .catch((error) => console.error('Error fetching data:', error));

                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
                                                //    I
// ------------------------------------------FAKE API DATA WITH ADVANCE METHODS-----------------------------------------
// -----is se door raho jab tak js advance na reach out----------------------------------------------

// var dealObject = {
//     name : "Abdul Rehman Khan",
//     fatherName : "Abdul Samad Khan",
//     class : 9,
//     rollNumber : 12345,
//     address : "Sector 41/B"
// }

// var checker = "address" in dealObject
// console.log(dealObject.rollNumber + 5)
// console.log(checker)
// console.log(typeof checker)

// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 7],
//     calcAnnual: function(percentIfDisc) {
//         var bestPrice = plan1.price
//         var currDate = new Date()
//         var thisMo = currDate.getMonth()
//         for (var i = 0; i < plan1.discountMonths.length; i++) {
//             if (plan1.discountMonths[i] === thisMo) {
//                 bestPrice = plan1.price * percentIfDisc
//                 break
//             }
//         }
//         return bestPrice * 12
//     }
// }

// var annualPrice = plan1.calcAnnual(0.8)
// console.log(annualPrice)

// var a = "is this capital"
// a = a.toUpperCase()
// console.log(a)
// var a = "IS THIS CAPITAL"
// a = a.toLowerCase()
// console.log(a)

// function Plan(name, price, space, transfer, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
// }

// var basicPlan = new Plan("MYNAME", 9000, 500, "unlimited", 10)

// console.log(basicPlan.name)
// console.log(basicPlan.price)
// basicPlan.price += 1000
// basicPlan.name += 20
// console.log(basicPlan.name)
// console.log(basicPlan.price)
// console.log(typeof basicPlan.name)

// var dont = null
// console.log(dont)

// function v(a, b){
//     alert("row")
//     var c = a + b
//     return c
// }

// v(1,2)
// var d = v(1, 2)
// console.log(d)

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Data received!"
//         callback(data)
//     }, 2000)
// }

// fetchData(function(data) {
//     console.log(data)
// })

var game = {
    userName : "Markh",
    age : 17,
    price : 900,

    welcomeMessage : function() {

        console.log(`${this.age} welcome to my website`);
        console.log(this);
        // console.log("welcome to my website");
    }
}
game.age = 90
game.welcomeMessage()