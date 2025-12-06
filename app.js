function openTab(tabName) {
    // 1. Ocultar todas las vistas
    var i;
    var x = document.getElementsByClassName("category-view");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    
    // 2. Quitar clase 'active' de todos los botones
    var tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Mostrar la vista actual y activar el botón
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}