let unidadesBtn = document.getElementById("unidades-btn");
let siguientesBtn = document.getElementById("siguientes-btn");
let tutorialesBtn = document.getElementById("tutoriales-btn");
let currentPage = window.location.pathname;

console.log("Current page:", currentPage);
console.log("Current page number:", parseInt(currentPage.split("/").pop().split(".")[0].split("").pop()));

console.log("siguientesBtn:", siguientesBtn);

if(!currentPage.includes("unidad")) {
    unidadesBtn.addEventListener("click", function() {
        window.location.href = "unidades/unidad1.html";
    });
}

if(currentPage.includes("unidad")) {
    siguientesBtn.addEventListener("click", function() {
    console.log("siguientesBtn clicked");
    if(currentPage.includes("unidad")) {
        if(currentPage.includes("unidad1")) {
            window.location.href = "unidad2.html";
        } else if(currentPage.includes("unidad2")) {
            window.location.href = "unidad3.html";
        }   else if(currentPage.includes("unidad3")) {  
            window.location.href = "unidad4.html";
        }   else if(currentPage.includes("unidad4")) { 
            window.location.href = "unidad5.html";
        }   else if(currentPage.includes("unidad5")) {
            window.location.href = "unidad1.html";
        }
    }
});
}


tutorialesBtn.addEventListener("click", function() {
    window.location.href = "tutoriales/tutorial1.html";
});

