const botaoMobile = document.getElementById("btn-mobile")
const a = document.querySelector(".menuDeNavegacao")

function abrirMenu(evento){
    if (evento.type === "click"){
        evento.preventDefault()
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
    }
}

botaoMobile.addEventListener("click", abrirMenu)

function fecharMenu (evento){
    const a = evento.target
        if(a.tagName === "A"){
            const nav = document.getElementById("nav")
            nav.classList.remove("active")
    }
}

a.addEventListener("click", fecharMenu)