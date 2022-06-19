
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

   btn.textContent = input.value
   ul.appendChild(li);
   li.appendChild(btn);
   input.value = ""


   btn.onclick = function() {
    if(this.style.has(line-through)) {
    this.style.remove(line-through)
    } else {
        this.style.add(line-through)
    }

   }

}

  