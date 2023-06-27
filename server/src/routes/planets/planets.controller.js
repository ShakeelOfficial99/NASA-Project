const {result} = require('./../../models/planets.model');

function getAllPlanets(req,res){
    return res.status(200).json(result);
}


module.exports = {
    getAllPlanets
};