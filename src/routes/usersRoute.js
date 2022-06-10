const {  DataTypes } = require("sequelize");
const db = require("../db/database");
const base64 = require('../security/endCode');
// convert model res
const Users = db.define('Users', {
    staff_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
});


const create = async (req, res) => {
    const  {user_name, password, staff_id} = req.body;
    const endCode = base64.set(password.toString());
    const key = (await endCode).toString() ;
    await  Users.create({staff_id, user_name, password: key});
    res.status(200).send('create user done !');
}

const findAll = async (req, res) => {
    console.log('fffffffffffffffff');
    const users = await  Users.findAll();
    res.status(200).json(users);
}

const findOne = async (req, res) => {
    const  user = await Users.findOne({where: {id:req.params.id}});
    res.status(200).json(user);
}

const deleteData = async (req, res) => {
    const user = await Users.destroy({where: {id:req.params.id}});
    res.status(200).send('delete user done !');
}

const update = async (req, res) => {
    const model = {id, user_name, staff_id, password} = req.body;
    const findItem = await database.findByPk(model.id);     
    if(findItem){
    const endCode = base64.set(password.toString());
     const updateRes = await database.update({user_name: model.user_name,staff_id: model.staff_id, password: endCode }, {where: {id:model.id}});
     res.status(200).json(updateRes);
    }else{
      res.status(500).send('not have user !');
    }
}

module.exports = {
    create,
    findAll,
    findOne,
    deleteData,
    update
};