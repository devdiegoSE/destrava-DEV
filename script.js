function adicionar() {
    var input = document.getElementById("inputtask");
    var task = input.value.trim();

    if (task !== "") {
        var list = document.getElementById("tasklist");
        var listitem = document.createElement("li");
        listitem.textContent = task;
        list.appendChild(listitem);
        input.value ="";
        
    }
}
