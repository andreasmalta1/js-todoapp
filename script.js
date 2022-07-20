ul = document.getElementById("stuff")

function checkTime(){
    if (window.getComputedStyle(clock).visibility === "hidden") {
        showTime();
    } else if (window.getComputedStyle(clock).visibility === "visible"){
        hideTime();
    }
}

function addList(inputField){
    document.getElementById("todoinput").value = ""
    console.log(inputField)
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(inputField))
    const buttonDlt = document.createElement('button');
    buttonDlt.innerText = 'X'
    buttonDlt.onclick = function(){
        buttonDlt.parentElement.remove()
        return;
    }

    const buttonDone = document.createElement('button');
    buttonDone.innerText = 'Done'
    buttonDone.onclick = function(){
        buttonDone.parentElement.style.textDecoration = "line-through"
        return;
    }

    li.appendChild(buttonDone)
    li.appendChild(buttonDlt)
    ul.appendChild(li)
}


document.getElementById("todoinput").onkeydown = function(e){
    if (!e) e = window.event;
    if (e.key == 'Enter'){
        if (this.value != ""){
            addList(this.value);
        }
    }
}
