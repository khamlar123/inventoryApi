const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Positions = db.define('positions', {
    equip_id: DataTypes.INTEGER,
    cate_id: DataTypes.INTEGER,
    pos_name: DataTypes.STRING,
});

const create = async (req, res) => {
    try{

        await Positions.create(req.body);
        res.status(200).json('create positions done !');

    }catch(err){
        res.status(500).json(err);
    }
}

const deleteData = async (req, res) => {
    try{
        await Positions.destroy({where: {id:req.params.id}});
        res.status(200).json('delete positions done !');
    }catch(err){
        res.status(500).json(err);
    }
 
}

const update = async (req, res) => {
    try{
        await Positions.update(req.body, {where:{id:req.body.id}});
        res.status(200).json('update positions done !');
    }catch(err){
        res.status(500).json(err);
    }

}

const findAll = async (req, res) => {
    try{
        const units = await Positions.findAll();3
        res.status(200).json(units);
    }catch(err){
        res.status(500).json(err);
    }
}

const findOne = async (req, res) => {
    try{
        const unit = Positions.findOne({where:{id:req.params.id}});
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