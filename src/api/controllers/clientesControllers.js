const Clientes = require('../models/clientesModels.js');

module.exports = {
    async index(req, res){
        const clientes = await Clientes.findAll();
        console.log('Retorno clientes: ' + clientes);
        return res.json(clientes);
    },

    async store(req, res){
        const { cli_nome, cli_apelido, cli_telefone, cli_cadastro } = req.body;
        const cliente = await Clientes.create({cli_nome, cli_apelido, cli_telefone, cli_cadastro});
        return res.status(200).send({
            status: 1,
            message: "Cliente cadastrado com sucesso !!!",
            cliente
        })
    },

    async update(req, res){
        const { cli_nome, cli_apelido, cli_telefone, cli_cadastro } = req.body;
        const { codigo } = req.params;

        await Clientes.update({
            cli_nome, cli_apelido, cli_telefone, cli_cadastro 
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Cliente atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Clientes.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Cliente excluido com sucesso !!!"
        })
    }
}