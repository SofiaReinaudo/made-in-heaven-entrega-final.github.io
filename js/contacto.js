alert("Bienvenido a la sección de contacto. Aquí puedes escribir tus datos personales para realizar una compra, o, consultar algo.");

edad = parseInt(prompt("Antes de continuar ingrese su edad. Se necesita ser mayor de 18 años para comprar."));

if( edad >= 18){
    alert("Eres mayor de 18 años! Puedes continuar.");
}
else if( edad < 18){
    alert("Eres menor de 18 años, no puedes continuar.");
}
else{
    alert("Sólo se permiten números.");
}

