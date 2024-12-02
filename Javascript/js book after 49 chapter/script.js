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

// var game = {
//     userName : "Markh",
//     age : 17,
//     price : 900,

//     welcomeMessage : function() {

//         console.log(`${this.age} welcome to my website`);
//         console.log(this);
//         // console.log("welcome to my website");
//     }
// }
// game.age = 90
// game.welcomeMessage()

// var abc = {
//     username : "anwar",
//     surname : "ali",
//     id : 343410,
//     action : function(){
//         console.log(this.username + this.surname)
//     }
// }
// console.log(abc.action())

// function CarManufacturingFactory(name, model, launchYear, engineCC, seat, color, sunroof, speed){
//     this.carName = name
//     this.carModel = model
//     this.carLaunchYear = launchYear
//     this.carEngineCC = engineCC
//     this.carSeat = seat
//     this.carColor = color
//     this.hasSunroof = sunroof
//     this.carSpeed = speed
// }

// var newCar = new CarManufacturingFactory("Audi A6", 2023, 2022, "1800 CC", 4, "grey", true, 300)
// console.log(newCar);
// console.log(typeof newCar.hasSunroof);

// function abc(){
//     document.write("creative")
//     console.log(this);
// }

// var a = 1
// function timer(){
//     var dateForTimer = new Date()
//     var hourForTimer = dateForTimer.getHours()
//     var minuteForTimer = dateForTimer.getMinutes()
//     var secondsForTimer = dateForTimer.getSeconds()
//     var millisecondsForTimer = dateForTimer.getMilliseconds()
//     console.log(hourForTimer +" : "+ minuteForTimer +" : "+ secondsForTimer +" : "+ millisecondsForTimer)
// }

// setInterval(timer, 1000)

// var a = (a,b) => {
//     return a + b
// }



// console.log(a(2,4))

// var abc = () => ({username: "hitesh"})

// console.log(abc().username)


// var abc = {
//     username : "Abdul Rehman",
//     price : 1900
// }

// var price
// var checkProperty = "price" in window
// console.log(checkProperty)

// var a = {
//     username : "Abdul Rehman",
//     role : "Graphic Designer",
//     Salary : 65000
// }
// // a.Salary = 75000

// console.log(a.Salary)

// var vegetables = {
//     potato : "2kg",
//     onion : "2kg",
//     cabbage : "2kg",
//     carrot : "1kg",
//     cocumber : "1kg",
//     lemon : "0.25kg"
// }

// var listOfProperties = []
// for(var a in vegetables){
//     listOfProperties.push(a)
// }

// listOfProperties.pop()
// console.log(listOfProperties)
// ----------------------------------------------------------------wrong
// var a = {
//     userName : "Abdul Rehman",
//     fatherName : "Abdul Samad",
//     GrandFatherName : "Abdul Hameed",
//     rollNo : 1138
// }

// function abc(){
//     console.log(" 'a' function is running")
//     this.rollNo = 343410
//     console.log(a.rollNo)
// }
// ----------------------------------------------------------------wrong

// function goBack(){
//     history.back()
// }

// function goForward(){
//     history.forward()
// }

// try{
//     aler("There is a problem")
// }
// catch(err){
//     alert(err)
// }

// // // // // // // // // // // // // NOT WORKING BECAUSE IT IS OLD⬇️

// var a = window.open()
// var b = "<h1>hello world</h1>"
// a.document.write(b)

// function checkForPopBlocker() {
//     var testPop = window.open("", "","width=100,height=100");
//     if (testPop === null) {
//         alert("Please disable your popup blocker.");
//     }
//     testPop.close();
// }

// checkForPopBlocker()
// // // // // // // // // // // // // NOT WORKING BECAUSE IT IS OLD⬇⬆️
// // // // // // // // // // // // // WORKING after disabling popup blockers⬇️

// var newWindow = window
// newWindow.open()
// newWindow.close()
// document.write("<h1 style='background-color: yellow'>hello world</h1>")

// var newWindow = window.open("https://www.youtube.com", "new", "width=100,height=150", "left=200,top=100")
// newWindow.document.location.href("https://www.youtube.com")
// newWindow.document.write("This is new window on new page")
// window.open().document.write("directly writing on new window without storing in variable")



// // // // // // // // // // // // // WORKING after disabling popup blockers⬆️


// var arrFunction = () => {
//     for(var i = 0; i < 10; i++){
//         console.log(`Abrar got ${i}`)
//     }
// }

// arrFunction()

// -----------------------------------------------------------------    QR CODE GENERATOR
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
// -----------------------------------------------------------------    QR CODE GENERATOR

// ASYNCHRONOUS AND SYNCHRONOUS PROGRAMMING

// testing
// document.write("hello world")
// document.write("<img src='https://static.toiimg.com/photo/80452572.cms'>")

// console.log("before settimeout")

// setTimeout(() => {
//     console.log("message in wait")
// }, 2000);
// console.log("after settimeout")
// PROMISES

// function abc(){
//     setTimeout(() => {
//         console.log("first code");
//     }, 3000);
// }

// var promise = abc()

// function xyz(){
//     console.log("second code")
// }
// promise.then(xyz())

// var sampleAPI = "https://fake-json-api.mock.beeceptor.com/users"
// var user = fetch(sampleAPI)
// console.log(user)
// // // ------------------------------------------------------------
// // --------------
// var cart = ["shirt", "trouser", "jogger"]

// var promise = createOrder()
// console.log
// promise.then(function (data){
//     console.log(data)
//     // proceedToPayment(data)
//     return data
// })
// .then(function(orderDetails){
//     return proceedToPayment(orderDetails)
// })
// .then(function(paymentData){
//     console.log(paymentData)
// })
// .catch(function(realError){
//     alert(realError.message)
// })

// ///

// function createOrder(){
//     var pr = new Promise(function(resolve, reject){
//         if(!validateCart(cart)){
//             var err = new Error("Cart is not valid")
//             reject(err)
//         }
//         var orderId = "12345"
//         if(orderId){
//             setTimeout(function() {
//                 resolve(orderId)
//             }, 3000)
//         }
//     })

//     return pr
// }

// function validateCart(cart){
//     return true
//     // return false
// }

// function proceedToPayment(orderId){
//     return new Promise((resolve, reject) => {
//         // setTimeout(()=>{
//             resolve("Payment Successful")
//         // },2000)
//     })
// }
// // --------------
// // // ------------------------------------------------------------
// // --------------

// var cart = ["vegetables", "ball", "mobile"]
// var orderId = 12345

// takeOrder()
// .then(function (ID){
//     alert(ID)
//     return ID
// })
// .then(function(){
//     return paymentCalculation()
// })
// .then(function (data){
//     console.log(data)
// })
// .catch(function (err){
//     alert(err)
// })
// function takeOrder(){
//     var confirmation = Number(prompt("Enter your order id"))
//     var promise = new Promise(function (resolve, reject){
//         if(confirmation == orderId){
//             resolve(orderId)
//         }
//         if(confirmation != orderId){
//             var error = new Error("Order Id is not valid")
//             reject(error)
//         }
//     })
    
//     return promise
// }

// function paymentCalculation(){
//     var itemQty = prompt("Enter Item quantity")
//     var promise2 = new Promise(function (resolve, reject){
//         var totalPrice = 0
//         if(itemQty == 0){
//             var error = new Error("Your Cart is empty")
//             reject(error)
//         }
//         for(var i = 0; i < itemQty; i++){
//             totalPrice += 250
//         }
//         resolve(totalPrice)
//     })
//     return promise2
// }
// // --------------
// // // ------------------------------------------------------------
// // --------------
var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p1 is successful")
        reject("p1 is fail")
    }, 3000)
})

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p2 is successful")
        reject("p2 is fail")
    }, 1000);
})

var p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 is successful")
        reject("p3 is fail")
    }, 2000);
})

Promise.any([p1,p2,p3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err.errors)
})
// // --------------
// // // ------------------------------------------------------------
// --------------
// async await
// var pr = new Promise(function (resolve, reject) {
//     resolve("Resolved Promise value")
// })

// console.log(pr)
// pr
// .then(function(res) {
//     console.log(res)
// })

// async function abc () {
//     // return "how"
//     return pr
// }

// abc()
// .then((res) => {
//     console.log(res)
// })
// await is a keyword that is only to be used inside an async funtion
// --------------
// // // ------------------------------------------------------------




// // // ------------------------------------------------------------
// --------------
// var pr = new Promise(function (resolve, reject) {
//     resolve("Promise is resolved")
// })

// async function asyncFunction() {
//     var actualData = await pr
//     console.log(pr)
//     // console.log(actualData)
// }

// asyncFunction()
// --------------
// // // ------------------------------------------------------------



// // // ------------------------------------------------------------
// --------------

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is 1st resolved promise value")
    }, 5000);
})

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is 2nd resolved promise value")
    }, 8000);
})

async function solving () {
    var p1Value = await p1
    console.log("This is gap 1")
    console.log(p1Value)

    var p2Value = await p2
    console.log("This is gap 2")
    console.log(p2Value)
}

solving()
// --------------
// // // ------------------------------------------------------------
// ASYNCHRONOUS AND SYNCHRONOUS PROGRAMMING 