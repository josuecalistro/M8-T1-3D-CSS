const form = document.querySelector("form");


form.addEventListener("submit", function(e){


    e.preventDefault();


    const name =
    document.querySelector("#name").value;


    const email =
    document.querySelector("#email").value;



    if(name.length < 3){

        alert("El nombre debe tener mínimo 3 caracteres");

        return;

    }



    if(!email.includes("@")){

        alert("Ingrese un email válido");

        return;

    }



    alert("Formulario enviado correctamente");


    form.reset();


});