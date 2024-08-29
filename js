document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').innerHTML = `
            <div class="alert alert-success" role="alert">
                Cadastro realizado com sucesso!<br>
                Nome: ${name}<br>
                Email: ${email}
            </div>
        `;
    } else {
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Por favor, preencha todos os campos.
            </div>
        `;
    }
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('message').style.display = 'block'; 
    });
    
});
