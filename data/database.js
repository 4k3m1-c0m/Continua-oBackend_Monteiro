// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos relacionados no cardápio.
let categorias = [
    { id: 1, nome: 'Massas' },
    { id: 2, nome: 'Pizzas' },
    { id: 3, nome: 'Bebidas' },
    { id: 4, nome: 'Sobremesas' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: 'Espaguete à Bolonhesa',
        descricao: 'Espaguete com molho de tomate e carne moída temperada.',
        preco: 42.90,
        imagem: 'espaguete-bolonhesa.png'
    },
    {
        id: 2,
        categoriaId: 1,
        nome: 'Lasanha à Bolonhesa',
        descricao: 'Camadas de massa, carne moída, molho de tomate e queijo.',
        preco: 48.90,
        imagem: 'lasanha.png'
    },
    {
        id: 3,
        categoriaId: 2,
        nome: 'Pizza Margherita',
        descricao: 'Molho de tomate, mussarela, tomate e manjericão.',
        preco: 55.00,
        imagem: 'pizza-margherita.png'
    },
    {
        id: 4,
        categoriaId: 2,
        nome: 'Pizza Calabresa',
        descricao: 'Molho de tomate, mussarela e calabresa fatiada.',
        preco: 58.00,
        imagem: 'pizza-calabresa.png'
    },
    {
        id: 5,
        categoriaId: 3,
        nome: 'Refrigerante Lata',
        descricao: 'Coca-Cola, Guaraná ou Fanta.',
        preco: 7.00,
        imagem: 'refrigerante.png'
    },
    {
        id: 6,
        categoriaId: 4,
        nome: 'Tiramisù',
        descricao: 'Sobremesa italiana com café, mascarpone e cacau.',
        preco: 22.00,
        imagem: 'tiramisu.png'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };
