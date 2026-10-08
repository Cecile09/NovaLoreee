const express = require('express');
const router = express.Router();

const {
    Usuario,
    Livro
} = require('../models');
Depois pode colocar sua rota:

router.get('/', async (req, res) => {

    try {

        const usuarios = await Usuario.findAll({
            include: {
                model: Livro,
                as: 'livros'
            },

            order: [
                ['nome', 'ASC']
            ]
        });

        const livros = await Livro.findAll({
            include: {
                model: Usuario,
                as: 'usuario'
            },

            order: [
                ['createdAt', 'DESC']
            ]
        });

        res.render('admin/tela', {
            usuarios,
            livros
        });

router.get('/livros', async (req, res) => {

    try {

        const { status } = req.query;

        const where = {};

        if (status) {
            where.status = status;
        }

        const livros = await Livro.findAll({

            where,

            include: {
                model: Usuario,
                as: 'usuario'
            },

            order: [
                ['createdAt', 'DESC']
            ]

        });

        res.render('admin/livro', {
            livros,
            statusSelecionado: status
        });

    router.post('/livros/:id/status', async (req, res) => {

    try {

        const { id } = req.params;
        const { status } = req.body;

        const livro = await Livro.findByPk(id);

        if (!livro) {
            return res.status(404).send(
                'Livro não encontrado.'
            );
        }

        livro.status = status;

        await livro.save();

        res.redirect('/admin/livros');

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Erro ao atualizar status.'
        );

    }

});

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Erro ao carregar livros.'
        );

    }

});














    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Erro ao carregar painel administrativo.'
        );

    }

});












