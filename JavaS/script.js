let adicionar = document.getElementById('add');
let tarefas = document.getElementById('tarefas');
let digita = document.getElementById('digitar');
let fecha = document.getElementById('botao');
let card = document.getElementsByClassName('card-tarefa');

adicionar.onclick = () => {
    let valor = digita.value



    let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa">
    ${valor}
    </div>
    <div class="botao">
        <img src="Imagens/check.png" alt="Check" title="Check">
    </div>
</div>
</div>`


    tarefas.innerHTML += tarefaNova;
    
    fecha.onclick = () => {
    card.removeChild(tarefaNova)
}

}

