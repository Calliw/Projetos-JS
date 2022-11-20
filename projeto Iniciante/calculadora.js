const tela = document.getElementById('telaCalc');
        document.querySelectorAll('button').forEach(element => {
            
            element.onclick = function(e){
                
                switch(e.originalTarget.value){
                    case 'C':
                        tela.value = 0;
                        break
                    case 'apagar':
                        apagar();
                        break
                    case '+':
                        tela.value += '+';
                        break
                    case '-':
                        tela.value += '-';
                        break
                    case 'X':
                        tela.value += '*';
                        break
                    case '/':
                        tela.value += '/';
                        break
                    case '1':
                        if(tela.value == 0){
                            tela.value = 1;
                        }else{
                            tela.value += 1;
                        }
                        break
                    case '2':
                    if(tela.value == 0){
                            tela.value = 2;
                        }else{
                            tela.value += 2;
                        }
                        break
                    case '3':
                    if(tela.value == 0){
                            tela.value = 3;
                        }else{
                            tela.value += 3;
                        }
                        break
                    case '4':
                    if(tela.value == 0){
                            tela.value = 4;
                        }else{
                            tela.value += 4;
                        }
                        break
                    case '5':
                    if(tela.value == 0){
                            tela.value = 5;
                        }else{
                            tela.value += 5;
                        }
                        break
                    case '6':
                    if(tela.value == 0){
                            tela.value = 6;
                        }else{
                            tela.value += 6;
                        }
                        break
                    case '7':
                    if(tela.value == 0){
                            tela.value = 7;
                        }else{
                            tela.value += 7;
                        }
                        break
                    case '8':
                    if(tela.value == 0){
                            tela.value = 8;
                        }else{
                            tela.value += 8;
                        }
                        break
                    case '9':
                    if(tela.value == 0){
                            tela.value = 9;
                        }else{
                            tela.value += 9;
                        }
                        break
                    case '0':
                    if(tela.value == 0){
                            tela.value = 0;
                        }else{
                            tela.value += 0;
                        }
                        break
                    case '=':
                        resultado(tela.value);
                        break
                }
            }
        });

        function resultado(calculo){
            
            tela.value = tela.value+'\n'+eval(calculo); // eval() executa um argumento recebido como string
            tela.scrollTop = tela.scrollHeight;
        }

        function apagar(){
            var tamanhoTela = tela.value;
            tamanhoTela = tamanhoTela.substring(0, tamanhoTela.length - 1);
            tela.value = tamanhoTela;
        }