function adicionar() {
    var input = document.getElementById("inputtask");
    var task = input.value.trim();
    if (task !== "") // Verifica se a tarefa não está vazia ou composta apenas por espaços em branco
         {
        var taskList = document.getElementById("tasklist"); // Obtém a referência à lista de tarefas
        var listItem = document.createElement("li"); // Cria um novo elemento de lista (li) para a nova tarefa, ainda não exibida na tela.
        listItem.textContent = task;    // Define o texto do item de lista como a tarefa digitada pelo usuário
        taskList.appendChild(listItem); // Adiciona o novo item de lista à lista de tarefas, fazendo com que ele apareça na tela.
        input.value = "";
    } else {
        alert("Por favor, digite uma tarefa.");
    }
}
