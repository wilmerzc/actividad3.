alert("Hola bienvenido a signo de zodiaco");


function calcularSigno() {
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const mes = fechaNacimiento.getMonth() + 1; 

    let signo = "";

    switch (mes) {
      case 1:
        signo = (fechaNacimiento.getDate() <= 20) ? "Capricornio" : "Acuario";
        break;
      case 2:
        signo = (fechaNacimiento.getDate() <= 19) ? "Acuario" : "Piscis";
        break;
      case 3:
        signo = (fechaNacimiento.getDate() <= 20) ? "Piscis" : "Aries";
        break;
      case 4:
        signo = (fechaNacimiento.getDate() <= 20) ? "Aries" : "Tauro";
        break;
      case 5:
        signo = (fechaNacimiento.getDate() <= 21) ? "Tauro" : "Géminis";
        break;
      case 6:
        signo = (fechaNacimiento.getDate() <= 21) ? "Géminis" : "Cáncer";
        break;
      case 7:
        signo = (fechaNacimiento.getDate() <= 22) ? "Cáncer" : "Leo";
        break;
      case 8:
        signo = (fechaNacimiento.getDate() <= 23) ? "Leo" : "Virgo";
        break;
      case 9:
        signo = (fechaNacimiento.getDate() <= 23) ? "Virgo" : "Libra";
        break;
      case 10:
        signo = (fechaNacimiento.getDate() <= 23) ? "Libra" : "Escorpio";
        break;
      case 11:
        signo = (fechaNacimiento.getDate() <= 22) ? "Escorpio" : "Sagitario";
        break;
      case 12:
        signo = (fechaNacimiento.getDate() <= 21) ? "Sagitario" : "Capricornio";
        break;
      default:
        signo = "Fecha no válida";
    }

    document.getElementById("resultado").innerText = "Tu signo del zodiaco es: " + signo;
  }