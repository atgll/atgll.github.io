

/*Metodo Class + forEach. */

    /* document.querySelectorAll(".screenbtn").forEach(boton=> {
        boton.addEventListener("click", function() {
            document.querySelectorAll(".content").forEach(article=> {
                article.style.display = "none"
            })
            const targetId = this.getAttribute("data-target")
            document.getElementById(targetId).style.display = "block"
        })
    })*/

/*Sencillo: Script para cada elemento*/

    const aboutButton = document.getElementById("aboutme");
    const prButton = document.getElementById("projects");
    const contactButton = document.getElementById("contact")


    const about = document.getElementById("aboutmetext");
    const projects = document.getElementById("projectslist");
    const contactlist =document.getElementById("contacttext");

    contactlist.style.display = "block";
    contactButton.style.fontWeight = "bold";

    prButton.addEventListener("click", function() {
        prButton.style.fontWeight = "bold";
        aboutButton.style.fontWeight = "normal";
        contactButton.style.fontWeight = "normal";
        about.style.display = "none";
        projects.style.display = "block";
        contactlist.style.display = "none";
    })

    aboutButton.addEventListener("click", function() {
        aboutButton.style.fontWeight = "bold";
        prButton.style.fontWeight = "normal";
        contactButton.style.fontWeight = "normal";
        about.style.display = "block";
        projects.style.display = "none";
        contactlist.style.display = "none";
    })

    contactButton.addEventListener("click", function() {
        contactButton.style.fontWeight = "bold";
        aboutButton.style.fontWeight = "normal";
        prButton.style.fontWeight = "normal";
        about.style.display = "none";
        projects.style.display = "none";
        contactlist.style.display = "block";
    })