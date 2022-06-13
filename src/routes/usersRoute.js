const {  DataTypes, where } = require("sequelize");
const db = require("../db/database");
const base64 = require('../security/endCode');
// convert model res
const Users = db.define('Users', {
    staff_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
});


const create = async (req, res) => {

    try{
        const  {user_name, password, staff_id} = req.body;
        const endCode = base64.set(password.toString());
        const key = (await endCode).toString() ;
        await  Users.create({staff_id, user_name, password: key});
        res.status(200).json('create user done !');
    }catch (err){
        res.status(500).json(err)
    }
}

const findAll = async (req, res) => {

    try{
        const users = await  Users.findAll();
        res.status(200).json(users);
    }catch (err){
        res.status(500).json(err)
    }


}

const findOne = async (req, res) => {
    try{
        const  user = await Users.findOne({where: {id:req.params.id}});
        res.status(200).json(user);
    }catch (err){
        res.status(500).json(err)
    }

}

const deleteData = async (req, res) => {
    try{
        const user = await Users.destroy({where: {id:req.params.id}});
        res.status(200).json('delete user done !');
    }catch (err){
        res.status(500).json(err)
    }

}

const update = async (req, res) => {
    try{
        const model = {id, user_name, staff_id, password} = req.body;
        const findItem = await Users.findOne({where:{id:model.id}});    
        const endCode = base64.set(password.toString());
        const key = (await endCode).toString() ;
        const updateRes = await Users.update({user_name: model.user_name,staff_id: model.staff_id, password: key }, {where: {id:model.id}});
        res.status(200).json('create user done !');
    }catch (err){
        res.status(500).json(err)
    }
}

module.exports = {
    create,
    findAll,
    findOne,
    deleteData,
    update
};