const express = require('express');

const router = express.Router();

const {
    Usuario,
    Livro
} = require('../models');


router.get('/novo', async (req, res) => {

    const usuarios = await Usuario.findAll({
        order: [
            ['nome', 'ASC']
        ]
    });

    res.render('livros/novo', {
        usuarios
    });
});

router.post('/', async (req, res) => {

    try {

        const {
            titulo,
            autor,
            categoria,
            usuarioId
        } = req.body;

        await Livro.create({
            titulo,
            autor,
            categoria,
            usuarioId,
            status: 'PENDENTE'
        });

        res.redirect('/admin/livros');

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Erro ao cadastrar livro.'
        );
    }
});


module.exports = router;