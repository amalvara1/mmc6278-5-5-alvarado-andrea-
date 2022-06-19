
/*var form = document.getElementById('add-todo');
//var li = document.getElementById('todo-list');
 var li = document.createElement('li')


form.onsubmit = function(e) {
    e.preventDefault()
    var input = document.querySelector('input')

    //console.log(input.value)
    document.getElementById("todo-list").innerHTML = input.value;
    input.value = ""

}
    var li = document.createElement('li')
    document.body.appendChild(li)
    for (let i = 0; i < form.length; i++) {
        var item = form[i];
        var btn = document.createElement('btn')
        btn.textContent = form
        li.appendChild(btn)
        
    }

*/

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

button.onclick = function() {
    if(this.style.has(line-through)) {
    this.classlist.remove(line-through)
    } else {
        this.classlist.add(line-through)
    }

   }
  