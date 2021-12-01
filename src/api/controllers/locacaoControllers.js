const Locacao = require('../models/locacaoModels');

module.exports = {
    async index(req, res){
        const locacao = await Locacao.findAll();
        console.log('Retorno Locações: ' + locacao);
        return res.json(locacao);
    },

    async store(req, res){
        const { loc_marca, loc_modelo, loc_cor, loc_diaslocacao, loc_valortotal } = req.body;
        const locacao = await Locacao.create({loc_marca, loc_modelo, loc_cor, loc_diaslocacao, loc_valortotal });
        return res.status(200).send({
            status: 1,
            message: "Locacao cadastrado com sucesso !!!",
            locacao
        })
    },

    async update(req, res){
        const { loc_marca, loc_modelo, loc_cor, loc_diaslocacao, loc_valortotal } = req.body;
        const { codigo } = req.params;

        await Locacao.update({
            loc_marca, loc_modelo, loc_cor, loc_diaslocacao, loc_valortotal
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Locação atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Locacao.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Locação excluido com sucesso !!!"
        })
    }
}