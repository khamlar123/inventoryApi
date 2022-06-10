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
    await Suppliers.create(req.body);
    res.status(200).send('create suppliers done !');
}

const deleteData = async (req, res) => {
    await Suppliers.destroy({where: {id:req.params.id}});
    res.status(200).sned('delete suppliers done !');
}

const update = async (req, res) => {
    await Suppliers.update(req.body, {where:{id:req.body.id}});
    res.status(200).send('update suppliers done !');
}

const findAll = async (req, res) => {
    const units = Suppliers.findAll();
    res.status(200).json(units)
}

const findOne = async (req, res) => {
    const unit = Suppliers.findOne({where:{id:req.params.id}});
    res.status(200).json(unit);
}

module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}