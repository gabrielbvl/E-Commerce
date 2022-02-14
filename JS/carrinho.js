let itemDoCarrinho = []

//Carrinho
function itemCarrinho(nomeProduto){
    let item = produtos.find((item)=>item.nomeProduto===nomeProduto)
    const li = document.createElement("li")
    li.classList.add("produtosCarrinho")
    const imagem = document.createElement("img")
    imagem.setAttribute('src', item.img);
    const div = document.createElement("div")
    div.classList.add("infoProdutosCar")
    const h3 = document.createElement("h3")
    h3.innerText = item.nomeProduto
    const p = document.createElement("p")
    p.classList.add("valor")
    p.innerText = Number.isInteger(item.preco) ? `R$ ${item.preco},00` : `R$ ${(item.preco).toString().replace(".",",")}0`
    const botao = document.createElement("button")
    botao.innerText = "Remover do carrinho"
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(botao)
    li.appendChild(imagem)
    li.appendChild(div)
    return li
}


//Evento de click
const vitrine = document.querySelector(".produtos")
const carrinho = document.querySelector(".carrinhoItens")

vitrine.addEventListener("click", interceptador)
carrinho.addEventListener("click", interceptadorCarrinho)

//Interceptador (me diz aonde foi o click)
function interceptador (evento){
    const button = evento.target
        if(button.tagName === "BUTTON"){
            const produto = button.closest("li")  
                addProductCar(produto)
    }
}

//Adicionar Itens no Carrinho
function addProductCar(produto){
    let produtoCarrinho = produto.lastChild.children[1].innerText
    if(itemDoCarrinho.find((item)=>item===produtoCarrinho)===undefined){
        carrinho.classList.remove("carrinhoVazio")
        const carItem = itemCarrinho(produtoCarrinho)
        if(itemDoCarrinho.length === 0){
            carrinho.innerHTML = ""
        }
        carrinho.appendChild(carItem)
        itemDoCarrinho.push(produtoCarrinho)
        alterarQtd()
        alterarValor()
    }
}

//Interceptador (me diz aonde foi o click)
function interceptadorCarrinho (evento){
    const button = evento.target
        if(button.tagName === "BUTTON"){
            const produto = button.closest("li")
            removerCarrinho(produto)
    }
}

//Remover Itens do Carrinho
function removerCarrinho(produto){
    let produtoCarrinho = produto.lastChild.firstChild.innerText
            let index = itemDoCarrinho.indexOf(produtoCarrinho)
            itemDoCarrinho.splice(index,1)
            produto.parentNode.removeChild(produto)
            alterarQtd()
            alterarValor()
            carEmpty()
}

//Alteração de quantidade
function alterarQtd(){
    const qtd = document.querySelector("#qtd")
    qtd.innerText = itemDoCarrinho.length
}

//Alteração de valor
function alterarValor(){
    const valor = document.querySelector("#valor")
    let soma = 0
    for(let i = 0; i < itemDoCarrinho.length; i++){
        soma += produtos.find((item)=>item.nomeProduto===itemDoCarrinho[i]).preco
    }
    valor.innerText = Number.isInteger(soma) ? `R$ ${soma},00` : `R$ ${(soma).toString().replace(".",",")}0`
}

//Carrinho Vazio
function carEmpty(){
    if(itemDoCarrinho.length===0){
        const p = document.createElement("p")
        p.classList.add("um")
        p.innerText = "Carrinho Vazio"
        const p2 = document.createElement("p")
        p2.classList.add("dois")
        p2.innerText = "Adicione Itens"
        carrinho.appendChild(p)
        carrinho.appendChild(p2)
        carrinho.classList.add("carrinhoVazio")
    }
}




