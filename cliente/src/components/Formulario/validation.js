export const validation = (values) => {
    let errors = {};

    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const regexPrimerNumero = /^[0-9]/;

    if (!values.email) {
        errors.email = "El email es requerido";
    } 
    else if (!regexEmail.test(values.email)) {
        errors.email = "El email es inválido";
    }

    if (values.password.length > 35) {
        errors.password = "Password muy larga";
    }

    else if (!values.password) {
        errors.password = "La contraseña es requerida";
    } 

    else if (regexPrimerNumero.test(values.password)) {
        errors.password = "La contraseña no puede comenzar con un número";
    }

    if (values.password.length < 6 || values.password.length > 10) {
        errors.password = "La contraseña debe tener al menos entre 6 y 10 caracteres";
    }

    return errors;
}