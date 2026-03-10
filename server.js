// =============================================================
// server.js — Servidor Principal da API do Pasta & Vino - Famiglia Monteiro
// =============================================================
// Aula 6: API Middleware and Error Handling
//
// O que aprendemos nesta aula?
//   1. O que são Middlewares e para que servem
//   2. Criar um Middleware de Log (logger.js)
//   3. Criar um Middleware de Tratamento de Erros (errorHandler.js)
//   4. Tratar rotas não encontradas (Erro 404)
//   5. A ORDEM dos middlewares importa muito!
// =============================================================


// ─── 1. Importações das Dependências ─────────────────────────
const express = require('express');
const cors = require('cors');


// ─── 2. Importação dos Middlewares Customizados ───────────────
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');


// ─── 3. Criação da Aplicação Express ─────────────────────────
const app = express();


// ─── 4. Middlewares Globais do Express ────────────────────────
app.use(cors());
app.use(express.json());

// Middleware de Log
app.use(logger);


// ─── 5. Rota de Boas-Vindas ───────────────────────────────────
app.get('/', (req, res) => {
    res.json({ mensagem: '🍝 Bem-vindo à API do Pasta & Vino - Famiglia Monteiro!' });
});


// ─── 6. Importação e Registro das Rotas ───────────────────────
const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');

app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);


// ─── Tratamento de Rota não encontrada (404) ─────────────────
app.use((req, res) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `Rota '${req.url}' não encontrada na API do Pasta & Vino - Famiglia Monteiro.`
    });
});


// ─── Middleware de Erros Global ──────────────────────────────
app.use(errorHandler);


// ─── 7. Iniciando o Servidor ─────────────────────────────────
const PORTA = 3000;

app.listen(PORTA, () => {
    console.log('');
    console.log('🚀 =======================================');
    console.log(`🚀 Servidor do Pasta & Vino - Famiglia Monteiro rodando!`);
    console.log(`🚀 Acesse: http://localhost:${PORTA}`);
    console.log('🚀 =======================================');
    console.log('');
    console.log('📋 Rotas disponíveis:');
    console.log(`   GET    http://localhost:${PORTA}/api/categorias`);
    console.log(`   POST   http://localhost:${PORTA}/api/categorias`);
    console.log(`   GET    http://localhost:${PORTA}/api/produtos`);
    console.log(`   GET    http://localhost:${PORTA}/api/produtos/:id`);
    console.log(`   POST   http://localhost:${PORTA}/api/produtos`);
    console.log(`   PUT    http://localhost:${PORTA}/api/produtos/:id`);
    console.log(`   DELETE http://localhost:${PORTA}/api/produtos/:id`);
    console.log('');
    console.log('💣 Rota de teste de erro:');
    console.log(`   GET    http://localhost:${PORTA}/api/produtos/erro-teste`);
    console.log('');
});