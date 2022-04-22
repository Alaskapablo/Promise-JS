

# Promise JS

A promise é uma função construtora normal do JS.





## Modo de uso

A promise recebe uma função f como argumento, e essa
função recebe como argumento duas funções (opcional).

Essa função f por sua vez recebe como argumento duas
funções "g" e "h" (opcional).

Se durante a execução da logica da função f a função "g"
for chamada com o argumento "P" (opcional), então o estado
da promise mudará para "fulfilled"(resolvida), e o resultado
da promise será o valor "P"





## Uso/Exemplos

```javascript
function f(g, h){
    g("P")
}
```

Se durante a execução da logica da função f, a função
"h" for chamada com o argumento "Q"(opcional), então
o estado da promise mudará para "rejected", e o resultado
da promise será o valor "Q"

```javascript
function f(g, h)
    h("Q")
}
```

Oque isso significa? Que uma promise vai ser instanciada
com uma função f, e nessa função f vamos ter alguma logica
de resolver ou rejeitar a promise

```javascript
function f(g, h)
    if( 10 > 0 ){
        g("P")
    }else{
        h("Q")
    }
}
```

## Exemplo de Fulfilled

```javascript
function f(g, h)
    if( 10 > 0 ){
        g("P")
    }else{
        h("Q")
    }
}
```

O retorno dessa chamada vai ser true, então vai dar 
"fulfilled" e o resultado da promise vai ser o valor "p".

## Exemplo de Rejected

```javascript
function f(g, h)
    if( 10 < 0 ){
        g("P")
    }else{
        h("Q")
    }
}
```


O retorno dessa chamada vai ser false, então vai dar
"rejected" e o resultado da promise vai ser o valor "q"
