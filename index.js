
var form = document.querySelector('form');
var input = document.querySelector('input')


form.onsubmit = function(e) {
    e.preventDefault()

    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    var btn = document.createElement("button");

   btn.textContent = input.value
   ul.appendChild(li);
   li.appendChild(btn);
   input.value = ""

}

button.click = function() {
    if(this.style.has(line-through)) {
    this.classlist.remove(line-through)
    } else {
        this.classlist.add(line-through)
    }

   }
  