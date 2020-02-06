let adicionar = document.getElementById('add'); // Itens Globais !
let tarefas = document.getElementById('tarefas');
let digita = document.getElementById('digitar');
let listaTarefas = localStorage.getItem('listaTarefas')?JSON.parse(localStorage.getItem('listaTarefas')):[];

const salvarLocalStorage = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
localStorage.setItem("listaTarefas", tarefasEmJson)
console.log("Lista de tarefas salva com sucesso");

}
const mostrarNaTela = (arrayTarefas) => {
    arrayTarefas.forEach((textoTarefa)=>{
        let tarefaNova = `<div class="col-md-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
            ${textoTarefa}
            </div>
            <div class="botao">
                <img id="check" src="Imagens/check.png" alt="Check" title="Check">
            </div>
        </div>
        </div>`

        tarefas.insertAdjacentHTML('beforeend', tarefaNova);
        let novaTarefa = tarefas.lastElementChild.lastElementChild.lastElementChild
        novaTarefa.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove(window.alert("Tarefa Concluída"))
    }
})
}
mostrarNaTela(listaTarefas)

const teclaEnter = (event) => { // Adicionar Tarefa !
    if (event.keyCode == 13 || event.type == "click") {
        let valor = digita.value
        if (valor == "") {
            alert("Você deve digitar uma tarefa!");
            return
        }
        digita.value = ""

listaTarefas.push(valor);
salvarLocalStorage(listaTarefas);

        let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa">
    ${valor}
    </div>
    <div class="botao">
        <img id="check" src="Imagens/check.png" alt="Check" title="Check">
    </div>
</div>
</div>`

        tarefas.insertAdjacentHTML('beforeend', tarefaNova);
        // Remover tarefa ! --------------
        let novaTarefa = tarefas.lastElementChild.lastElementChild.lastElementChild
        novaTarefa.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove(window.alert("Tarefa Concluída"))
            localStorage.removeItem('listaTarefas');
            }

    }
}

digita.addEventListener('keypress', teclaEnter);
adicionar.addEventListener('click', teclaEnter);
