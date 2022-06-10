const { DataTypes } = require("sequelize");
const db = require("../db/database");
const base64 = require("../security/endCode");

const database = db.define('users', {
    staff_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
});


const login = async(req, res) => {
   
    try{
        const { user_name,password } = req.body;
 
        const findUser = await database.findOne({where:{user_name: user_name}});
    
        let decode = (await base64.get(findUser.dataValues.password)).toString();
      
        if(decode === password.toString()){
            res.status(200).json('login !!!!!');
        }else{
            res.status(500).json('login error');
        }
    }catch{
        res.status(500).json('login error');
    }

}

module.exports = {
    login
}