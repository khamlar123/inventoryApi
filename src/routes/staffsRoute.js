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
    await Staffs.create(req.body);
    res.status(200).send('create staff done !');
}

const deleteData = async (req, res) => {
    await Staffs.destroy({where: {id:req.params.id}});
    res.status(200).sned('delete staff done !'); 
}

const update = async (req, res) => {
    await Staffs.update(req.body, {where:{id:req.body.id}});
    res.status(200).send('update staff done !');
}

const findAll = async (req, res) => {
    const units = Staffs.findAll();
    res.status(200).json(units)
}

const findOne = async (req, res) => {
    const unit = Staffs.findOne({where:{id:req.params.id}});
    res.status(200).json(unit);
}

module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}