//Campo de Pesquisa "digite sua pesquisa"
function pesquisa(evento){
    const inputText = document.querySelector(".textBox").value
    const vitrine = document.querySelector(".produtos")
    vitrine.innerHTML = ""
    creat(produtos.filter((item) => {
        return ((item.nomeProduto).toLowerCase().indexOf(inputText.toLowerCase()) > -1 || (item.categoria).toLowerCase().indexOf(inputText.toLowerCase()) > -1) && item.nomeProduto
    }))
}

// Pesquisa por categoria mobile //

const x = document.getElementById("find")
x.addEventListener("keyup", pesquisa)

const menuDeNavegacao = document.querySelector(".menuDeNavegacao")
menuDeNavegacao.addEventListener("click", interceptadorMenuNavegacao)

//Interceptador (me diz aonde foi o click)
function interceptadorMenuNavegacao (evento){
    const ancora = evento.target
        if(ancora.tagName === "A"){
            if(ancora.innerText === "Todos"){
                pesquisaMenuNavegacao("")
            } else {
                pesquisaMenuNavegacao(ancora.innerText)
            }
        }
}

function pesquisaMenuNavegacao(inputText){
    const vitrine = document.querySelector(".produtos")
    vitrine.innerHTML = ""
    creat(produtos.filter((item) => {
        return ((item.nomeProduto).toLowerCase().indexOf(inputText.toLowerCase()) > -1 || (item.categoria).toLowerCase().indexOf(inputText.toLowerCase()) > -1) && item.nomeProduto
    }))
}


// Pesquisa por categoria desktop //

const menuDeNavegacaoDesktop = document.querySelector(".menuDeNavegacaoDesktop")
menuDeNavegacaoDesktop.addEventListener("click", interceptadorMenuNavegacaoDesktop)

function interceptadorMenuNavegacaoDesktop (evento){
    const ancora = evento.target
        if(ancora.tagName === "A"){
            const element = document.querySelector(".todosDesktop")
            element.classList.remove("todosDesktop")
            ancora.classList.add("todosDesktop")
            if(ancora.innerText === "Todos"){
                pesquisaMenuNavegacaoDesktop("")
            } else {
                pesquisaMenuNavegacaoDesktop(ancora.innerText)
            }
        }
}

function pesquisaMenuNavegacaoDesktop(inputText){
    const vitrine = document.querySelector(".produtos")
    vitrine.innerHTML = ""
    creat(produtos.filter((item) => {
        return ((item.nomeProduto).toLowerCase().indexOf(inputText.toLowerCase()) > -1 || (item.categoria).toLowerCase().indexOf(inputText.toLowerCase()) > -1) && item.nomeProduto
    }))
}