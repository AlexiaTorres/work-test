### Test 2

```
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}
```


**1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría por consola el script? ¿Cuál es el motivo?**

Imprime 5, porque setTimeout() envía la ejecución a la cola, cuando el bucle termina de ejecutarse la variable i vale 5

**2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?**

```
    > 0
    > 1
    > 2
    > 3
    > 4
```
    
    
    
```
    for (let i=1; i<=5; i++) {
      setTimeout( function timer(){
        console.log( i );
      }, i*1000 );
    }
```

Si tengo que usar var:

```
var seconds = 0; 
for (var i=0;i<5;i++) {
   (function(ind) {
       setTimeout(function(){console.log(ind);}, 1000*seconds++);
   })(i);
}
```
