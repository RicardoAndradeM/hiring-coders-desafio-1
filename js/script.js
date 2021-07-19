const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const carregando = `<p>Carregando...</p>`;
    const concluido = '<p>Cadastrado com sucesso! =)</p>';
    //adiquirindo dados
    const formCotainer = document.getElementById('cotainer-singup');
    const userName = document.getElementById('name');
    const email = document.getElementById('email');
    console.log(userName);
    console.log(email);

    const user = {
        nome:userName.value,
        email:email.value
    }

    // mudando tela para carregando
    formCotainer.innerHTML = carregando;

    localStorage.setItem('lead', JSON.stringify(user));

    // mudando tela para sucesso

    formCotainer.innerHTML = concluido;
});