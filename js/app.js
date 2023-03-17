function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    var d = hoy.getDay() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return `Tiene ${edad} años`;
}

let calcular = document.getElementById("calcular");
calcular.addEventListener("click", function(){
    let fecha = document.getElementById("fecha").value
    // console.log(new Date(fecha).getMonth())
    document.getElementById("output").innerHTML = calcularEdad(fecha)

})
// let fecha = prompt('Ingrese la fecha de nacimiento');
// alert(calcularEdad(fecha));