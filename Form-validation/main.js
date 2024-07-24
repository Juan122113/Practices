const form = document.getElementById('form');

function handleSubmit(e) {
    e.preventDefault() // prevent the default behaviour

    const data = Object.fromEntries(new FormData(e.target));

    for (const dat in data) {
        if (data[dat].length > 0) {
            if (typeof data[dat] == "string") {
                switch (dat) {
                    case "name":
                        if (data[dat].length < 3 || data[dat].length > 10) {
                            alert("Se necesita que el nombre sea de entre tres y diez caracteres.");
                        }
                    break;
                    case "email":
                        if ((/(^\W+)(\w+)@/i).test(data[dat])) {
                            alert("Es necesaior que el email sea de un formato válido.")
                         } else if ((/(^\w+)(\W)@/i).test(data[dat])) {
                            alert("Es necesario que el email sea de un formato válido.")
                         }
                    break
                    case "password":
                        if (data[dat].length < 3 || data[dat].length > 10) {
                            alert("Se necesita que el password sea de entre tres y diez caracteres.");
                        }
                    break;
                    case "confirm-password":
                        if (data[dat] != data["password"]) {
                            alert("las contraseñas deben coincidir")
                        }

                        

    
                }
            }
            
        } else {
            alert(dat + ": Campo requerido");
        }
    }

    console.log(data);
}

form.addEventListener('submit', handleSubmit);