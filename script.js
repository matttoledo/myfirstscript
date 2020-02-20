var inputElement = document.getElementById('input');
var buttonElement = document.querySelector('button');
var listElement = document.querySelector('ul'); 

function Calcular(e){
    e.preventDefault();
    listElement.innerHTML ='';
    //var  valor, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12;
    //var valor;
    valor = document.getElementById('input').value;
    
    r1 = valor/(1-0.0494);
    r2 = valor/(1-0.0605);
    r3 = valor/(1-0.0684);
    r4 = valor/(1-0.0763);
    r5 = valor/(1-0.0843);
    r6 = valor/(1-0.0923);
    r7 = valor/(1-0.1014);
    r8 = valor/(1-0.1095);
    r9 = valor/(1-0.1176);
    r10 = valor/(1-0.1258);
    r11 = valor/(1-0.1340);
    r12 = valor/(1-0.1422);

    var resultados = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12];
    var textors = ['Valor em 1x R$: ','Valor em 2x R$: ','Valor em 3x R$: ','Valor em 4x R$: ','Valor em 5x R$: ','Valor em 6x R$: ','Valor em 7x R$: ','Valor em 8x R$: ','Valor em 9x R$: ','Valor em 10x R$: ','Valor em 11x R$: ','Valor em 12x R$: '];
    var resultadosdivididos =[r1,r2/2,r3/3,r4/4,r4/5,r6/6,r7/7,r8/8,r9/9,r10/10,r11/11,r12/12];
    var textors2 = ['    1x de R$: ','    2x de R$: ','  3x de R$: ','   4x de R$: ','   5x de R$: ','   6x de R$: ','   7x de R$: ','   8x de R$: ','   9x de R$: ','   10x de R$: ','  11x de R$: ','  12x de R$: '];
    
    for(let i = 0; i <= 11; i++){
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