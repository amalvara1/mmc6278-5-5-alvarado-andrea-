var li = document.getElementById('#todo-list')
var form = document.querySelector('form');

form.onsubmit = function(e) {
    e.preventDefault()
    var input = document.querySelector('input')
    console.log(input.value)
    document.getElementById("todo-list").innerHTML = input;
    input.value = ""

    
    

}