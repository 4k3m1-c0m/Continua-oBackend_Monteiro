// =============================================================
// routes/produtos.js — Rotas de Produtos (CRUD Completo)
// Pasta & Vino - Famiglia Monteiro
// =============================================================

const express = require('express');
const router = express.Router();
let db = require('../data/database');


// =============================================================
// ── ROTA ESPECIAL PARA TESTE DE ERRO ─────────────────────────
// =============================================================
router.get('/erro-teste', (req, res) => {

    // erro intencional para testar o middleware de erros
    throw new Error("O servidor do Pasta & Vino - Famiglia Monteiro tropeçou na cozinha!");
});


// =============================================================
// ── [GET] /api/produtos
// Lista todos os pratos do cardápio ou filtra por categoria
// =============================================================
router.get('/', (req, res) => {

    const categoriaId = req.query.categoriaId;

    if (categoriaId) {
        const produtosFiltrados = db.produtos.filter(p => p.categoriaId == categoriaId);
        return res.json(produtosFiltrados);
    }

    res.json(db.produtos);
});


// =============================================================
// ── [GET] /api/produtos/:id
// Busca um prato específico do cardápio
// =============================================================
router.get('/:id', (req, res) => {

    const produtoId = parseInt(req.params.id);

    const produto = db.produtos.find(p => p.id === produtoId);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ mensagem: 'Prato não encontrado no cardápio.' });
    }
});


// =============================================================
// ── [POST] /api/produtos
// Adiciona um novo prato ao cardápio
// =============================================================
router.post('/', (req, res) => {

    const novoId = db.produtos.length > 0
        ? Math.max(...db.produtos.map(p => p.id)) + 1
        : 1;

    const novoProduto = {
        id: novoId,
        categoriaId: req.body.categoriaId,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        imagem: req.body.imagem
    };

    db.produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});


// =============================================================
// ── [PUT] /api/produtos/:id
// Atualiza um prato existente do cardápio
// =============================================================
router.put('/:id', (req, res) => {

    const produtoId = parseInt(req.params.id);

    const index = db.produtos.findIndex(p => p.id === produtoId);

    if (index !== -1) {

        db.produtos[index] = { ...db.produtos[index], ...req.body };

        res.json(db.produtos[index]);

    } else {
        res.status(404).json({ mensagem: 'Prato não encontrado no cardápio.' });
    }
});


// =============================================================
// ── [DELETE] /api/produtos/:id
// Remove um prato do cardápio
// =============================================================
router.delete('/:id', (req, res) => {

    const produtoId = parseInt(req.params.id);

    db.produtos = db.produtos.filter(p => p.id !== produtoId);

    res.json({ mensagem: 'Prato removido do cardápio com sucesso!' });
});


// ─── Exportação do Router ─────────────────────────────────────
module.exports = router;