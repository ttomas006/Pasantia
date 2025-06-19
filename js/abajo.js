function irAbajo(event){
    event.preventDefault();
    document.getElementById("seccion-destino").scrollIntoView({
        behavior: "smooth"
    });
}