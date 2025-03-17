let claveValida = null;
let NumeroValido = null;

function Control(Numero, TipoRetiro, clave, ClaveDinamica, color, logo) {
    ValidarDatos(Numero, TipoRetiro);
    ValidarClave(clave, TipoRetiro, ClaveDinamica);

    if (NumeroValido !== null && claveValida !== null) {
        let numeroString = Array.isArray(NumeroValido) ? NumeroValido.join('') : Numero;

        let url = './Pantalla_de_retiro.html' +
                  '?numero=' + encodeURIComponent(numeroString) +
                  '&clave=' + encodeURIComponent(claveValida) +
                  '&color=' + encodeURIComponent(color) +
                  '&logo=' + encodeURIComponent(logo);

        window.location.href = url;
    } else {
        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "Numero o clave incorrecta. Intente nuevamente",
        });
    }
}


function ValidarDatos (Numero,TipoRetiro){
    let VNumero = [];
    
    switch (TipoRetiro) {
        case "Nequi":

            VNumero[0] = 0;
            for (let i = 0; i < Numero.length; i++) {
                VNumero[i+1]= parseInt(Numero[i]);
            }
            break;
        case "Ahorro":
            if (Numero[1]==3 && (Numero[0]== 0 || Numero[0]==1)) {
                for (let i = 0; i < Numero.length; i++) {
                    VNumero[i]= parseInt(Numero[i]);
                }
            }
            
            
            break;

        case "Cuenta":
            for (let i = 0; i < Numero.length; i++) {
                VNumero[i]= parseInt(Numero[i]);
            }
            break;
        default:
            break;
    }
    if(VNumero.length!=0){
        NumeroValido=VNumero;
    }

}

function ValidarClave(clave,TipoRetiro,ClaveDinamica) {
    switch (TipoRetiro) {
        case "Nequi":
            if (clave==ClaveDinamica){
                claveValida=clave;
            }
            break;

        default:
            if(clave.length==4){
                claveValida="XXXX";
            }
            break;
    }
}

function GenerarClave(){
    return Math.floor(100000 + Math.random() * 900000);
}