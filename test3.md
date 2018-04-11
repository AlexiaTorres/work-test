```
let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise
    .then((successMessage) => {
        console.log("Yes! " + successMessage);
    })
    .catch((failMessage) => {
        console.log("No! " + failMessage);
    });
```

**En este caso, tenemos un código usando el objeto Promise (Promesa). Las promises (promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, pero tenemos un pequeño problema… No es una solución totalmente cross-browser. Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo modificarías nuestro código (test.js) para que funcione correctamente.**

```
(function() {
   var resolve = function(message) {
     console.log("Yes! " + message);
   };

   var reject = function(message) {
     console.log("No! " + message);
   };

   setTimeout(function () {
     var success = Math.round(Math.random()) === 1
 
     if (success) {
       resolve('Success!');
     } else {
       reject('Fail!');
     }
   }, 1000);
})();
```
