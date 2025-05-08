        const inputNome = document.getElementById('nome');
        const botaoCurtir = document.getElementById('botao-curtir');
        const numeroCurtidas = document.getElementById('numero-curtidas');
        const saudacao = document.getElementById('saudacao');
        let contador = 0;
        
        function exibirSaudacao() {
            const nome = inputNome.value.trim();
            if (nome) {
                saudacao.innerText = `Olá, ${nome}! Obrigado por curtir!`;
                saudacao.style.display = 'block';
            } else {
                saudacao.innerText = 'Olá! Obrigado por curtir!';
                saudacao.style.display = 'block';
            }
        }
        
        function incrementarContador() {
            contador++;
            numeroCurtidas.innerText = contador;
            exibirSaudacao();
        }
        
        botaoCurtir.addEventListener('click', incrementarContador);
        
        inputNome.addEventListener('input', function() {
            if (inputNome.value.trim() !== '') {
                botaoCurtir.innerText = `Curtir como ${inputNome.value}`;
            } else {
                botaoCurtir.innerText = 'Curtir';
            }
        });
        
        inputNome.addEventListener('keydown', function(evento) {
            console.log(`Tecla pressionada: ${evento.key}`);
        });
        
        botaoCurtir.addEventListener('mouseover', function() {
            botaoCurtir.classList.add('destaque');
        });
        
        botaoCurtir.addEventListener('mouseout', function() {
            botaoCurtir.classList.remove('destaque');
        });