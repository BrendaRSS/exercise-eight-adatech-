const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';

function salesReceipt(stringReceipt){
    const receipt = {
        listaDaVenda:[],
        total: "",
    };
    
    const arrayDaStringReceipt = stringReceipt.split(";");

    const newArray = arrayDaStringReceipt.map(element => {
        return element.split("/");
    });

    for(let i=0; i< newArray.length-1; i++){
        let elementTwo = newArray[i][1].split("=");
        let arrayValue = elementTwo[0].split("valor");
        let arrayCupom = elementTwo[1].split("cupom");

        let quantity = 1;
        
        for(let j=0; j<newArray.length-1; j++){
            if(newArray[i][0] === newArray[j][0]){
                quantity +=1;
            }
        }

        receipt.listaDaVenda.push(
            {
                produto: newArray[i][0].charAt(0).toUpperCase() + newArray[i][0].slice(1),
                valor: Number(arrayValue[1]),
                cupom: Number(arrayCupom[1]),
                quantidade: quantity-1
            }
        )
    }

    console.log(receipt);

}


salesReceipt(reciboDeVenda);