// const backEndHost = 'http://localhost:5000/pessoa';
const backEndHost = 'http://44.193.202.97:5000/pessoa';
const btnpost = document.getElementById('post');
const btnget = document.getElementById('get');
const nomeInput = document.getElementById('name');
const resultadoDiv = document.getElementById('resultado');

btnpost.addEventListener('click', () => {
    const nome = nomeInput.value;

    console.log(nome);
    
    if(!nome){
        alert('Coloque um nome');
        return
    }
    fetch(backEndHost,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome})
    })
    .then(response => {
        if (!response.ok) throw new Error('Erro ao enviar dados.');
        return response.json();
    })
    .then(data => {
        resultadoDiv.textContent = `Pessoa criada com sucesso: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        resultadoDiv.textContent = `Erro: ${error.message}`;
      });
});

btnget.addEventListener('click', () => {
    fetch(backEndHost, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },

    })
    .then(response => {
        if(!response.ok) throw new Error('Erro ao buscar dados.');
        return response.json();
    })
    .then(data => {
        resultadoDiv.textContent = `Pessoas: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        resultadoDiv.textContent = `Erro: ${error.message}`;
      });
})
