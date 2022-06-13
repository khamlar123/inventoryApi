const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Suppliers = db.define('suppliers', {
    conmpany_name: DataTypes.STRING,
    sup_name: DataTypes.STRING,
    village: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    contact_info: DataTypes.STRING,
});


const create = async (req, res) => {
    try{
        await Suppliers.create(req.body);
        res.status(200).json('create suppliers done !');
    }catch(err){
        res.status(500).json(err);
    }

}

const deleteData = async (req, res) => {
    try{
        await Suppliers.destroy({where: {id:req.params.id}});
        res.status(200).json('delete suppliers done !');
    }catch(err){
        res.status(500).json(err);
    }

}

const update = async (req, res) => {
    try{
        await Suppliers.update(req.body, {where:{id:req.body.id}});
        res.status(200).json('update suppliers done !');
    }catch(err){
        res.status(500).json(err);
    }

}

const findAll = async (req, res) => {
    try{
        const units = await Suppliers.findAll();
        res.status(200).json(units)
    }catch(err){
        res.status(500).json(err);
    }

}

const findOne = async (req, res) => {
    try{
        const unit = await Suppliers.findOne({where:{id:req.params.id}});
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