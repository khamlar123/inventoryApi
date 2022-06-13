const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Staffs = db.define('staffs', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    gender: DataTypes.STRING,
    bod: DataTypes.DATE,
    village: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    phone: DataTypes.STRING,
    contact_info: DataTypes.STRING,
});

const create = async (req, res) => {
    try{
        await Staffs.create(req.body);
        res.status(200).json('create staff done !');
    }catch (err){
        res.status(500).json(err);
    }

}

const deleteData = async (req, res) => {
    try{
        await Staffs.destroy({where: {id:req.params.id}});
        res.status(200).json('delete staff done !'); 
    }catch (err){
        res.status(500).json(err);
    }

}

const update = async (req, res) => {
    try{
        await Staffs.update(req.body, {where:{id:req.body.id}});
        res.status(200).json('update staff done !');
    }catch (err){
        res.status(500).json(err);
    }

}

const findAll = async (req, res) => {
    try{
        const units = await Staffs.findAll();
        res.status(200).json(units)
    }catch (err){
        res.status(500).json(err);
    }

}

const findOne = async (req, res) => {
    try{
        const unit =  await Staffs.findOne({where:{id:req.params.id}});
        res.status(200).json(unit);
    }catch (err){
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