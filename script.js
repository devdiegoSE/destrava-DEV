function adicionar() {
    var input = document.getElementById("inputtask");
    var task = input.value.trim();

    if (task !== "") {
        var list = document.getElementById("tasklist");
        var listitem = document.createElement("li");
        listitem.textContent = task;
        var button = document.createElement("button");
        button.textContent = "Excluir";
        button.onclick = function() {
            list.removeChild(listitem);
        };
        listitem.appendChild(button);
        list.appendChild(listitem);
        input.value = "";
    }
}