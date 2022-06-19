
var form = document.querySelector('form');
var input = document.querySelector('input');

form.onsubmit = function(e) {
    e.preventDefault()


    if(input.value.trim() ===""){
        return false;
    }

    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    var btn = document.createElement("button");

   btn.textContent = (input.value);
   ul.appendChild(li);
   li.appendChild(btn);
   input.value = ""


   btn.onclick = function() {
    this.style = "text-decoration: line-through";

    btn.onclick = function (){
        this.remove()
    }
   }

}

  