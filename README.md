
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

<img src="https://web.whatsapp.com/d5758e02-7175-4c34-9ca1-88b7e82ca49f">
