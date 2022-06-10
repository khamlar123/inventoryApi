const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Units = db.define('units', {
    unit_name: DataTypes.STRING,
});


const create = async (req, res) => {


    try{
        await Units.create(req.body);
        res.status(200).json('create unit done !');
    }catch(err){
        res.status(500).json(err);
    }

}

const deleteData = async (req, res) => {

    try{
        await Units.destroy({where: {id:req.params.id}});
        res.status(200).json('delete unit done !');
    }catch(err){
        res.status(500).json(err);
    }
}

const update = async (req, res) => {

    try{
        await Units.update(req.body, {where:{id:req.body.id}});
        res.status(200).json('update unit done !');
    }catch(err){
        res.status(500).json(err);
    }
}

const findAll = async (req, res) => {
    try{
        const units = await Units.findAll();
        res.status(200).json(units)
    }catch (err){
        res.status(500).json(0)
    }
}

const findOne = async (req, res) => {

    try{
        const unit = Units.findOne({where:{id:req.params.id}});
        res.status(200).json(unit);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}