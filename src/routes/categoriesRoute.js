const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Categories = db.define('categories', {
    cate_name: DataTypes.STRING,
});


const create = async (req, res) => {
    try{
        await Categories.create(req.body);
        res.status(200).json('create categories done !');
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteData = async (req, res) => {

    try{
        const {id} = req.params;
        await Categories.destroy({where: {id:id}});
        res.status(200).json('delete categories done !');
    }catch(err){
        res.status(500).json(err)
    }

}

const update = async (req, res) => {
    try{
        await Categories.update(req.body, {where:{id:req.body.id}});
        res.status(200).json('update categories done !');
    }catch(err){
        res.status(500).json(err)
    }

}

const findAll = async (req, res) => {
    try{
        const units = await Categories.findAll();
        res.status(200).json(units)
    }catch (err){
        res.status(500).json(0)
    }
}

const findOne = async (req, res) => {
    try{
        const {id} = req.params;
        const unit = Categories.findOne({where:{id:id}});
        res.status(200).json(unit);
    }catch(err){
        res.status(500).json(err)
    }


}

module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}