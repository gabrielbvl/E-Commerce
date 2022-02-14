function criarProdutos (produto, i){
    const produtos = document.querySelector(".produtos")
    const produtosIndividuais = document.createElement("li")
    produtosIndividuais.classList.add("produtosIndividuais")
    const imgProduto = document.createElement("div")
    imgProduto.classList.add("imgProduto")
    const imagem = document.createElement("img")
    imagem.setAttribute('src', produto.img);
    imgProduto.appendChild(imagem)
    const infoProdutos = document.createElement("div")
    infoProdutos.classList.add("infoProdutos")
    const categoria = document.createElement("div")
    categoria.classList.add("categoria")
    const pCategoria = document.createElement("p")
    const titulo = document.createElement("h3")
    const descricao = document.createElement("p")
    descricao.classList.add("descricao")
    const valor = document.createElement("p")
    valor.classList.add("valor")
    const addCarrinho = document.createElement("button")
    addCarrinho.id = i
    addCarrinho.innerText = "Adicionar ao carrinho"
    pCategoria.innerText = produto.categoria
    titulo.innerText = produto.nomeProduto
    descricao.innerText = produto.descricao
    valor.innerText = Number.isInteger(produto.preco) ? `R$ ${produto.preco},00` : `R$ ${(produto.preco).toString().replace(".",",")}0`
    infoProdutos.appendChild(categoria)
    infoProdutos.appendChild(titulo)
    infoProdutos.appendChild(descricao)
    infoProdutos.appendChild(valor)
    infoProdutos.appendChild(addCarrinho)
    categoria.appendChild(pCategoria)
    produtosIndividuais.appendChild(imgProduto)
    produtosIndividuais.appendChild(infoProdutos)
    produtos.appendChild(produtosIndividuais)
}

//Criar produtos
function creat(produtos){
    for (let i = 0; i < produtos.length; i++){
        criarProdutos(produtos[i], i)
    }
}

creat(produtos)