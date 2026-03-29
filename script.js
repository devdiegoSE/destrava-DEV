let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function criarTarefaNaTela(novaTask) {
    var list = document.getElementById("tasklist");

    var listitem = document.createElement("li");
    listitem.textContent = novaTask.texto;

    var button = document.createElement("button");
    button.textContent = "Excluir";

    button.onclick = function() {
        list.removeChild(listitem);

        tasks = tasks.filter(function(t) {
            return t.id !== novaTask.id;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    listitem.appendChild(button);
    list.appendChild(listitem);
}

function adicionar() {
    var input = document.getElementById("inputtask");
    var task = input.value.trim();
    let novaTask = {
    id: Date.now(), 
    texto: task
};

    if (task !== "") {
        tasks.push(novaTask); 
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        criarTarefaNaTela(novaTask);

        input.value = "";
        input.focus();
    }
}
tasks.forEach(function(task) {
    criarTarefaNaTela(task);
});