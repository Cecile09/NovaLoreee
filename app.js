const express = require('express');

const {
    sequelize
} = require('./models');

const adminRoutes = require('./routes/adminRoutes.js');
const livroRoutes = require('./routes/livroRoutes.js');

const { engine } = require('express-handlebars');

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


app.use(express.static('public'));


app.engine(
    'handlebars',
    engine({
        defaultLayout: 'main'
    })
);

app.set('view engine', 'handlebars');

app.set('views', './views');

app.use('/admin', adminRoutes);
app.use('/livros', livroRoutes);


app.get('/', (req, res) => {
    res.redirect('/admin');
});


async function iniciar() {

    try {

        await sequelize.authenticate();

        console.log('Banco conectado com sucesso.');

        await sequelize.sync();

        console.log('Tabelas sincronizadas.');

        app.listen(3000, () => {

            console.log(
                'Servidor rodando em http://localhost:3000'
            );

        });

    } catch (error) {

        console.error(
            'Erro ao iniciar o servidor:',
            error
        );

    }
}

iniciar();