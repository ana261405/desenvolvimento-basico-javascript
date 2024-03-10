            var anterior ="principal";
            function tela(atual)
             {
	
                if(atual == "mostrar")
            {   mostrar();
                document.getElementById(anterior).className = "invisivel";
                document.getElementById(atual).className = "visivel";
             }
                document.getElementById(anterior).className = "invisivel" ;
                document.getElementById(atual).className = "visivel";
                anterior = atual;
              
            }

            class Contato{
                constructor()
                {
                    let nome;
                    let telefone;
                    let email;
                    let senha;
                }
            }
            function salvar (n,e,t,s1,s2){
                if (n.length == 0 || e.length == 0 || t.length == 0 || s1.length == 0 || s2.length== 0) {
                    alert("Todos os campos devem ser preenchidos!!!")
                }else{
                    let vetor = [];
                    let nomeBanco= "cadastro";
                    let agenda= new Contato();
                    agenda.nome= n;
                    agenda.telefone= t;
                    agenda.email= e;
                    if (s1 == s2) {
                        agenda.senha= s1;
                        if(localStorage.getItem(nomeBanco)==null)
                        {
                            vetor.push(agenda);
                            localStorage.setItem(nomeBanco,JSON.stringify(vetor));
                            alert("Contato cadastrado com sucesso!");
                            tela('principal');
                        }
                        else
                        {
                            vetor = JSON.parse(localStorage.getItem(nomeBanco));
                            vetor.push(agenda);
                            localStorage.setItem(nomeBanco,JSON.stringify(vetor));
                            alert("Contato cadastrado com sucesso!");
                            tela('principal');
                        }
                    }else{
                        alert("Por favor as senhas devem ser iguais!")
                    }
                    
                    
                }
            }
            function conferir(u,s){
                let achou= false;
                let nomeBanco= "cadastro";
                let vetor= JSON.parse(localStorage.getItem(nomeBanco));
                let resposta= document.getElementById('textologin');
                resposta.innerHTML= "";

                for (i=0; i<vetor.length; i++){
                    if (u == vetor[i].nome && s== vetor[i].senha) {
                        achou= true;
                    }
                }
                     if (achou) {
                        resposta.innerHTML += " <h1>Bem-vindo(a) ao sistema!!! </h1> ";
                        resposta.innerHTML += " <button onclick=\"tela(\'principal\')\">Voltar</button> "
                        tela('loginrealizado');

                    }else{
                        resposta.innerHTML += "<h1> Usuário não encontrado!!! </h1>";
                        resposta.innerHTML += " <button onclick=\"tela(\'principal\')\">Voltar</button> "
                        tela('loginrealizado')
                    }
            }
            function mostrar() {
                let nomeBanco = "cadastro";
                let vetor = [];
                resposta = document.getElementById('textoM');
                resposta.innerHTML = "";
                vetor = JSON.parse(localStorage.getItem(nomeBanco));
                if (vetor ==  null) {
                    resposta.innerHTML += "<h1> Não existem cadastros!!! </h1>"
                    resposta.innerHTML += " <button onclick=\"tela(\'principal\')\">Voltar</button> "

                }else{
                    for(i=0;i<vetor.length;i++)
                        {                  
                            resposta.innerHTML += "<hr><p>Nome: "+vetor[i].nome+"</p>";
                            resposta.innerHTML += "<p>Telefone: "+vetor[i].telefone+"</p>"
                            resposta.innerHTML += "<p>E-mail: "+vetor[i].email+"</p>"
                        }
                        resposta.innerHTML += "<button class= 'botao_interno' onclick=\"tela(\'principal\')\">Voltar</button>";
                }
            }
