const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Positions = db.define('positions', {
    equip_id: DataTypes.INTEGER,
    cate_id: DataTypes.INTEGER,
    pos_name: DataTypes.STRING,
});

const create = async (req, res) => {
    await Positions.create(req.body);
    res.status(200).send('create positions done !');
}

const deleteData = async (req, res) => {
    await Positions.destroy({where: {id:req.params.id}});
    res.status(200).sned('delete positions done !');
}

const update = async (req, res) => {
    await Positions.update(req.body, {where:{id:req.body.id}});
    res.status(200).send('update positions done !');
}

const findAll = async (req, res) => {
    const units = await Positions.findAll();
    res.status(200).json(units)
}

const findOne = async (req, res) => {
    const unit = Positions.findOne({where:{id:req.params.id}});
    res.status(200).json(unit);
}

module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}