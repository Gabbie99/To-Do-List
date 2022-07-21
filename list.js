var input = document.getElementById("input")
var span = document.getElementById("addlist")
var ul = document.getElementById("ul")

span.addEventListener("click", gab)
input.addEventListener("keypress", G)

// CLICK EVENT FUNCTION
function gab() {
    var list = document.createElement("li")
    //TO CHECK IF IT IS NOT EMPTY TO PERFORM THE FOLLOWING OPERATION
    if(input.value !== ''){
    list.appendChild(document.createTextNode(input.value))    
    ul.appendChild(list)
    input.value =''
    }     
}

//KEY EVENT FUNCTION
function G(event) {
    if (event.key === "Enter"){
        //TO CHECK IF IT IS NOT EMPTY TO PERFORM THE FOLLOWING OPERATION
        if(input.value !== ''){
            var list = document.createElement("li")
            list.appendChild(document.createTextNode(input.value))    
            ul.appendChild(list)
            input.value =''
        }
        
    }
}
// TO STRIKE ITEMS DONE
let lists = document.querySelector("ul")
lists.addEventListener("click", function (emp){
    if (emp.target.tagName === "LI") {
        emp.target.classList.toggle("done")
    };

    
})


