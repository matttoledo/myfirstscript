var inputElement = document.getElementById('input');
var buttonElement = document.querySelector('button');
var listElement = document.querySelector('ul'); 

function Calcular(e){
    e.preventDefault();
    listElement.innerHTML ='';
    //var  valor, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12;
    //var valor;
    valor = document.getElementById('input').value;
    
    /*Criei um vetor para juros pois ele será o parâmetro de quantas parcelas teremos. O código está estruturado para atender a largura do vetor juros e assim, calcular a quantidade de parcelas.*/ 
    var juros = [0.0494, 0.0605, 0.0684, 0.0763, 0.0843, 0.0923, 0.1014, 0.1095, 0.1176, 0.1258, 0.1340, 0.1422];
    
    /*Vetor que guardará os valores com os juros.*/ 
    var resultados = new Array();
    /*Vetor que guardará o valor da parcela dividido.*/
    var resultadosdivididos = new Array();
    /*Vetor que guardará o primeiro texto*/ 
    var textors = new Array();
    /*Vetor que guardará o segundo texto*/
    var textors2 = new Array();

    for(var i = 0; i < juros.length; i++) {
        let r;
        let nparcelas = i + 1;
        r = valor/(1-juros[i]);
        resultados.push(r);
        resultadosdivididos.push((r/(i+1)));
        textors.push('Valor em ' + nparcelas.toString() +'x R$: ');
        textors2.push('    ' + nparcelas + 'x de R$: ');
    };

    
    for(let i = 0; i < juros.length; i++){
        var node = document.createElement("LI");
        var textnode = document.createTextNode (textors[i]);
        var rsnode = document.createTextNode(parseFloat(resultados[i].toFixed(2)));
        var rsnode2 = document.createTextNode(parseFloat(resultadosdivididos[i].toFixed(2)));
        var textnode2 = document.createTextNode(textors2[i]);

        node.appendChild (textnode);   
        node.appendChild(rsnode);
        node.appendChild (textnode2);
        node.appendChild (rsnode2);
        document.getElementById("Lista").appendChild(node);
        
    
    };
    

};

buttonElement.onclick = Calcular;