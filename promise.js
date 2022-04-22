// A promise recebe uma função f como argumento

// E essa função recebe como argumento duas funções (opcional)
// function f(g, h){ // Essa função f por sua vez recebe como argumento duas funções G e H (opcional)

    // g("p")        // Se durante a execução da logica da função f a função g for chamada com o argumento
                  // p (opcional), então o estado da promise mudará para "fulfilled", e o resultado da promise será o valor p
    
    
    
    // h("q")      // Se durante a execução da logica da função f a função h for chamada com o argumento Q (opcional),
                // então o resultado da promise mudará para "refected", e o resultado da promise sera o valor Q.


                // Isso significa que uma promise vai ser instanciada com uma função f, e nessa função f vamos ter alguma logica
                //de resolver ou rejeitar a promise       
// }

// EXEMPLO FULFILLED:

// function f(g, h){
    // if( 10 > 0 ){       // Se o retorno dessa chamada for true, então vai dar "fulfilled" e o resultado da promise vai ser o valor p
        // g("p")
    // }else{              // Se o retorno dessa chamada for false, então vai dar "rejected" e o resultado da promise vai ser o valor q
    //     h("q")
    // }
// }

//  EXEMPLO REJECTED:


// Ela vai dar um erro no console, mostrando que foi rejeitada, podemos ver com mais clareza chamando nossa const         
function f (g, h){           
   
    if( 10 < 0 ){           // Vai retornar false então vai dar "rejected" e o resultado da promise vai ser o valor q
        g("p")
    }else{
        h("q")
    }
}



const myPromise = new Promise(f)


// ============== THEN

// O método then de uma promise recebe como argumento uma função, e executa esta função passando o valor p para ela

// myPromise.then(valor=>{
//     console.log("Resolveu com o valor " + valor)
// })

// ============== CATCH

// O método catch de uma promise recebe como argumento uma função, e executa esta função passando o valor Q para ela

// myPromise.catch(valor=>{
//     console.log("Rejeitou com o valor " + valor)
// })

// Podemos encadear as duas para que não mostre o erro no console falando que foi rejeitada:

myPromise
.then(valor=>{
    console.log("Resolveu com o valor " + valor) // Se mudarmos a logica da function f para " 10 > 0", ela vai cair no then e imprimir oque esta escrito
})
.catch(valor=>{
    console.log("Rejeitou com o valor " + valor);
});                                                                 

