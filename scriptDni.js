function calcular(){

    var numdni = Number(document.getElementById("NoDni").value);
    console.log(numdni);

    var letra = document.getElementById("LetraDni").value;
    console.log(letra);

    var calculoLetra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    console.log(calculoLetra);

    var residuo;

    if(numdni.length == 0 || letra == ""){

        alert("No se llenaron los campos");

    }else{

        if (numdni < 0 || numdni > 99999999) {
            alert("Introduzca un número válido");
        
        } else if (/^[0-9]+$/.test(numdni)) {
        
            if (/^[A-Za-z]+$/.test(letra)) {
        
                if (letra.length === 1) {
        
                    residuo = numdni % 23;
                    console.log(residuo);
                    console.log(calculoLetra[residuo]);
        
                    var letraObtenida = calculoLetra[residuo];
        
                    if (letraObtenida === letra) {
                        alert("La letra es correcta");
                    } else {
                        alert("Las letras no coinciden");
                    }
        
                } else {
                    alert("Se solicita solo una letra");
                }
        
            } else {
                alert("Solo se permiten letras");
            }
        
        } else {
            alert("Solo se permiten caracteres numéricos");
        }
        
    }

}

function limpiar(){

    document.getElementById("NoDni").value = "";
    document.getElementById("LetraDni").value = "";

    alert("Se limpiaron los datos correctamente");


}



