let adicionar = document.getElementById('add'); // Itens Globais !
let tarefas = document.getElementById('tarefas');
let digita = document.getElementById('digitar');
let listaTarefas = localStorage.getItem('listaTarefas') ? JSON.parse(localStorage.getItem('listaTarefas')) : [];

const salvarLocalStorage = tarefas => {        // Salvar no diretório local
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefas", tarefasEmJson)
    console.log("Lista de tarefas salva com sucesso");

}
const mostrarNaTela = (arrayTarefas) => {       // Mostrar na tela as tarefas salvas
    arrayTarefas.forEach((textoTarefa) => {
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
            listaTarefas = listaTarefas.filter(valor => valor != textoTarefa);

            salvarLocalStorage(listaTarefas);
        }
    })
}
mostrarNaTela(listaTarefas)


const teclaEnter = (event) => { // Adicionar Tarefa Click e Enter !
    if (event.keyCode == 13 || event.type == "click") {
        let valorDigitado = digita.value
        if (valorDigitado == "") {
            alert("Você deve digitar uma tarefa!");
            return
        }
        digita.value = ""

        listaTarefas.push(valorDigitado);
        salvarLocalStorage(listaTarefas);

        let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa">
    ${valorDigitado}
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
            listaTarefas = listaTarefas.filter(valor => valor != valorDigitado);

            salvarLocalStorage(listaTarefas);
        }

    }
}

digita.addEventListener('keypress', teclaEnter);
adicionar.addEventListener('click', teclaEnter);