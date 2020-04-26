const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const {id } = request.body; 
        const client = await connection('cliente')
        .where('id', id)
        .select('usuario')
        .first();

        if (!client){
            return response.status(400)
            .json({error : 'User not found!'});
        }


        return response.json(client);
    }

}