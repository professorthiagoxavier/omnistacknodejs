const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async  index(request, response) {
        const { page = 1 } = request.query;
        const [count] = await connection('cliente').count();
        const res = await connection('cliente')
            .limit(5)
            .offset((page - 1) * 5) //paginacao
            .select('*');

        response.header('X-Total-Count', count['count(*)']);
        return response.json(res);
    },

    async create(request, response) {
        const { usuario, senha } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await conn('cliente').insert({
            id,
            usuario,
            senha
        })
        return response.json({
            'success': 'cadastro com sucesso',
            'id': id
        });
    },
    async delete(request, response) {
        const { id } = request.params;
        await conn('cliente').where('id', id).delete();
        return response.status(204).send();
    }
};