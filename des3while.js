let datos = prompt("Ingresa los datos (Al colocar ESC se finaliza)")
while(datos != "ESC"){
    console.log("Se ingresó" + datos);
    datos = prompt("Ingresa los datos (Al colocar ESC se finaliza)")
}

let clave
do { 
   	clave = prompt("coloca tus claves (escribe exit para salir)","") 
} while (clave != "exit")