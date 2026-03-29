let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function criarTarefaNaTela(task) {
    var list = document.getElementById("tasklist");

    var listitem = document.createElement("li");
    listitem.textContent = task;

    var button = document.createElement("button");
    button.textContent = "Excluir";

    button.onclick = function() {
        list.removeChild(listitem);

        tasks = tasks.filter(function(t) {
            return t !== task;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    listitem.appendChild(button);
    list.appendChild(listitem);
}

function adicionar() {
    var input = document.getElementById("inputtask");
    var task = input.value.trim();

    if (task !== "") {
        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        criarTarefaNaTela(task);

        input.value = "";
        input.focus();
    }
}
tasks.forEach(function(task) {
    criarTarefaNaTela(task);
});