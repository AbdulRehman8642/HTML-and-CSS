var qtyValue = document.getElementById("qtyInput")
function addition(){
    qtyValue.value++
}

function subtraction(){
    if(qtyValue.value > 0){
        qtyValue.value--
    }
}

var input = document.getElementById("qtyInput")
// input.type = "text"
// input.inputMode = "numeric"

input.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, ''); // Only allow numbers
});