for (let index = 0; index <= 20; index=index+2) {
    console.log("El número que llevamos es: " + index);   
}

let contando = parseInt(prompt("contando hasta"));
for (let index = 0; index <= contando; index=index+2) {
    console.log("El número que llevamos es: " + index);
}

for (let index = 0; index <= 40; index++) {
    console.log("El número que llevamos es: " + index);
    if (index==24) {
        break; 
    } 
}
let colocar = parseInt(prompt("coloca hola la cantidad de veces que quieras"));
for (let index = 0; index <= colocar; index++) {
  console.log("hola");
}

