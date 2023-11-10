// Dados mocados
const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';

//resolução 

function salesReceipt(stringReceipt){

    //criação de objeto
    const receipt = {
        listaDaVenda:[],
        total: "",
    };
    
    //Transforma a string em Array separando-a por ";" tendo um array com ['régua/valor3=cupom0',   'lápis/valor0.5=cupom0', ...]
    const arrayDaStringReceipt = stringReceipt.split(";");

    //Percorre o array criado e separa as string por ("/") gerando um array com pequenos arrays [[ 'régua', 'valor3=cupom0' ], ['lápis', 'valor0.5=cupom0'],['mochila', 'valor50=cupom10'], ...]
    const newArray = arrayDaStringReceipt.map(element => {
        return element.split("/");
    });

    //Percorre o Array criado pelo map()
    for(let i=0; i< newArray.length-1; i++){
        let elementTwo = newArray[i][1].split("="); // Transfora o index 1 dos arrays internos em outro array, separando os elementos por "="
        let arrayValue = elementTwo[0].split("valor"); // Utiliza do Array criado para criar outro array que conterá apenas o valor em número no index 1
        let arrayCupom = elementTwo[1].split("cupom"); // Utiliza do Array criado para criar outro array que conterá apenas o cupom em número no index 1

        let quantity = 1;
        
        //Conta quantas vezes o produto se repete dentro do array
        for(let j=0; j<newArray.length-1; j++){
            if(newArray[i][0] === newArray[j][0]){
                quantity +=1;
            }
        }

        // Cria o objeto e adiciona no array de lista de produtos
        receipt.listaDaVenda.push(
            {
                produto: newArray[i][0].charAt(0).toUpperCase() + newArray[i][0].slice(1),
                valor: Number(arrayValue[1]),
                cupom: Number(arrayCupom[1]),
                quantidade: quantity-1
            }
        )
    }

    // Cria variáveis para somar os valores do total
    let somaTotal = 0;
    let descontoTotal = 0;

    // Itera sobre o objeto e pega os valores e cupons
    receipt.listaDaVenda.forEach(item => {
        somaTotal+=item.valor;
        descontoTotal+=item.cupom;
    });

    // Cria um objeto com o total
    const objetTotal = {
        valorTotal: somaTotal,
        valorTotalDesconto: descontoTotal,
        quantidadeDeProdutos: arrayDaStringReceipt.length-1
    };

    // Adiciona ao objeto do recibo de vendas
    receipt.total = objetTotal;

    console.log(receipt);
    return receipt;

}

// Chamou a função
salesReceipt(reciboDeVenda);