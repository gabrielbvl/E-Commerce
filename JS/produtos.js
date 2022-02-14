//Produtos da Vitrine

let produtos = [
    {
        img: "./imgs/caneca.jpeg",
        categoria: "Canecas",
        nomeProduto: "Caneca de Porcelana",
        descricao: "Caneca de porcelana branca de alta qualidade, personalizada como você quiser.",
        preco: 28,
    }
    ,
    {
        img: "./imgs/chopp.jpeg",
        categoria: "Canecas",
        nomeProduto: "Caneca de Chopp",
        descricao: "Caneca de chopp feita com vidro jateado de alta qualidade, personalizada como você quiser.",
        preco: 45,
    }
    ,
    {
        img: "./imgs/15x15.jpeg",
        categoria: "Cerâmicas",
        nomeProduto: "Cerâmica 15x15",
        descricao: "Cerâmica no tamanho de 15cm de alta qualidade, personalizada como você quiser.",
        preco: 25,
    }
    ,
    {
        img: "./imgs/20x20.jpeg",
        categoria: "Cerâmicas",
        nomeProduto: "Cerâmica 20x20",
        descricao: "Caneca de porcelana branca de alta qualidade, personalizada como você quiser.",
        preco: 30,
    }
    ,
    {
        img: "./imgs/termica.jpeg",
        categoria: "Garrafas",
        nomeProduto: "Garrafa Térmica",
        descricao: "Garrafa térmica de alta qualidade, conservando liquidos por até 12h, personalizada como você quiser.",
        preco: 90,
    }
    ,
    {
        img: "./imgs/nike.jpeg",
        categoria: "Garrafas",
        nomeProduto: "Garrafa Estilo Nike",
        descricao: "Garrafa estilo nike, de alta qualidade, personalizada como você quiser.",
        preco: 45,
    }
    ,
    {
        img: "./imgs/alcacoracao.jpeg",
        categoria: "Canecas",
        nomeProduto: "Caneca com alça coração",
        descricao: "Caneca de porcelana branca com alça de coração, de alta qualidade, personalizada como você quiser.",
        preco: 35,
    }
    ,
    {
        img: "./imgs/canecainterior.jpeg",
        categoria: "Canecas",
        nomeProduto: "Caneca com borda e interior coloridos",
        descricao: "Caneca de porcelana com alça e interior coloridos, de alta qualidade, personalizada como você quiser.",
        preco: 35,
    }
    ,
    {
        img: "./imgs/mousepadpequeno.jpeg",
        categoria: "MousePad",
        nomeProduto: "MousePad Retangular Pequeno",
        descricao: "MousePad retangular pequeno de alta qualidade, personalizado como você quiser.",
        preco: 15,
    }
    ,
    {
        img: "./imgs/mousepad-redondo.jpeg",
        categoria: "MousePad",
        nomeProduto: "MousePad Redondo",
        descricao: "MousePad redondo de alta qualidade, personalizado como você quiser.",
        preco: 20,
    }
    ,
    {
        img: "./imgs/mousepadquadrado.jpeg",
        categoria: "MousePad",
        nomeProduto: "MousePad Quadrado",
        descricao: "MousePad quadrado de alta qualidade, personalizado como você quiser.",
        preco: 20,
    }
    ,
    {
        img: "./imgs/mousepadretangular.jpeg",
        categoria: "MousePad",
        nomeProduto: "MousePad Retangular Grande",
        descricao: "MousePad retangular grande de alta qualidade, personalizado como você quiser.",
        preco: 20,
    }
    ,
    {
        img: "./imgs/bolinha.jpeg",
        categoria: "Garrafas",
        nomeProduto: "Garrafa Tampa Bolinha",
        descricao: "Garrafa com tampa bolinha, de alta qualidade, personalizada como você quiser.",
        preco: 35,
    }
    ,
    {
        img: "./imgs/quadro29x29.jpeg",
        categoria: "Quadros",
        nomeProduto: "Quadro 20x20",
        descricao: "Quadro no tamanho 20x20 com a foto ou a arte que você quiser.",
        preco: 25,
    }
    ,
    {
        img: "./imgs/quadro30x20.jpeg",
        categoria: "Quadros",
        nomeProduto: "Quadro 20x30",
        descricao: "Quadro no tamanho 20x30 com a foto ou a arte que você quiser.",
        preco: 30,
    }
    ,
    {
        img: "./imgs/quadrospotfy.jpeg",
        categoria: "Quadros",
        nomeProduto: "Quadro Estilo Spotfy",
        descricao: "Quadro estilo spotfy com a foto e música que você quiser.",
        preco: 25,
    }
    ,
    {
        img: "./imgs/fotop.jpeg",
        categoria: "Fotos",
        nomeProduto: "Foto P - 6x6",
        descricao: "Foto polaroide com foto e escrita ao seu gosto.",
        preco: 1.50,
    }
    ,
    {
        img: "./imgs/fotom.jpeg",
        categoria: "Fotos",
        nomeProduto: "Foto M - 7x9",
        descricao: "Foto polaroide com foto e escrita ao seu gosto.",
        preco: 2,
    }
    ,
    {
        img: "./imgs/fotog.jpeg",
        categoria: "Fotos",
        nomeProduto: "Foto G - 9x11",
        descricao: "Foto polaroide com foto e escrita ao seu gosto.",
        preco: 2.50,
    }
    ,
    {
        img: "./imgs/fototripla.jpeg",
        categoria: "Fotos",
        nomeProduto: "Foto Tripla - 18x6",
        descricao: "Foto ptripla com foto e escrita ao seu gosto.",
        preco: 2.50,
    }
    ,
    {
        img: "./imgs/fotoima.jpeg",
        categoria: "Fotos",
        nomeProduto: "Foto Imã M - 7x9",
        descricao: "Foto imã para geladeira com foto e escrita ao seu gosto.",
        preco: 4,
    }
    ,
    {
        img: "./imgs/Botton38.jpeg",
        categoria: "Bottons",
        nomeProduto: "Botton 38mm",
        descricao: "Botton com alfinete no tamanho de 38mm personalizado ao seu gosto.",
        preco: 3,
    }
    ,
    {
        img: "./imgs/botton45.jpeg",
        categoria: "Bottons",
        nomeProduto: "Botton 45mm",
        descricao: "Botton com alfinete no tamanho de 45mm personalizado ao seu gosto.",
        preco: 4,
    }
    ,
    {
        img: "./imgs/chaveiro38.jpeg",
        categoria: "Chaveiros",
        nomeProduto: "Chaveiro 38mm",
        descricao: "Chaveiro face unica, 38mm, personalizado ao seu gosto.",
        preco: 3,
    }
    ,
    {
        img: "./imgs/chaveiro45.png",
        categoria: "Chaveiros",
        nomeProduto: "Chaveiro 45mm",
        descricao: "Chaveiro face unica, 45mm, personalizado ao seu gosto.",
        preco: 4,
    }
    ,
    {
        img: "./imgs/duplaface.png",
        categoria: "Chaveiros",
        nomeProduto: "Chaveiro Dupla Face",
        descricao: "Chaveiro dupla face, 38mm, personalizado ao seu gosto.",
        preco: 7,
    }
    ,
    {
        img: "./imgs/grade.jpeg",
        categoria: "Fotos",
        nomeProduto: "Grade Para Fotos",
        descricao: "Grade de metal no tamanho 60x60 para fotos.",
        preco: 50,
    }
    ,
    {
        img: "./imgs/minipregador.jpeg",
        categoria: "Fotos",
        nomeProduto: "Mini Pregador Para Fotos",
        descricao: "Mini pregadores de diversas cores para fotos.",
        preco: 0.30,
    }
]

// Produtos do Carrinho