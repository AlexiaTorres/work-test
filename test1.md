```
var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.assign(rgb, wb);
```

**1. En el fragmento de código de nuestro archivo (test.js) podemos encontrar hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al finalizar la ejecución del script?**

rgb y colors:
``` {red: "#FF0000", green: "#00FF00", blue: "#0000FF", white: "#FFFFFF", black: "#000000"} ```

wb:
```{white: "#FFFFFF", black: "#000000"}```

**2. Modifica el código para que las variables rgb y wb mantengan sus valores iniciales y colors tenga los valores de ambas al finalizar la ejecución del script.**
```
var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.assign({}, rgb, wb);
```
**3. Además, tenemos un bug localizado en dispositivos con Internet Explorer… El código de nuestro script no funciona y necesitamos que se ejecute también en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos propones?**

El problema es que Internet Explorer no soporta el método assign(),  eso se soluciona usando polyfill, así el método se usará de forma nativa.
