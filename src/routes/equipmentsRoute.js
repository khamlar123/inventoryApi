const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Equipments = db.define('equipments', {
    cate_id: DataTypes.INTEGER,
    unit_id: DataTypes.INTEGER,
    equip_name: DataTypes.STRING,
    equip_stock: DataTypes.INTEGER,
    equip_import: DataTypes.INTEGER,
});

const Units = db.define('units', {
    unit_name: DataTypes.STRING,
});

const Categories = db.define('categories', {
    cate_name: DataTypes.STRING,
});

const Positions = db.define('positions', {
    equip_id: DataTypes.INTEGER,
    cate_id: DataTypes.INTEGER,
    pos_name: DataTypes.STRING
})




Units.hasOne(Equipments, {foreignKey: 'unit_id'});
Equipments.belongsTo(Units, {foreignKey: 'unit_id'});

Categories.hasOne(Equipments, {foreignKey: 'cate_id'});
Equipments.belongsTo(Categories, {foreignKey: 'cate_id'});

Equipments.hasOne(Positions, {foreignKey: 'equip_id'});
Positions.belongsTo(Equipments, {foreignKey: 'equip_id'})




const create = async (req, res) => {
    try{
        const { id,cate_id,unit_id,equip_name,equip_stock,equip_import, pos_name , } = req.body
        const addEqu = await Equipments.create({cate_id:cate_id ,unit_id:unit_id, equip_name:equip_name,equip_stock: equip_stock,equip_import:equip_import});
        if(addEqu.dataValues.id > 0){
           
            await Positions.create({equip_id: addEqu.dataValues.id,cate_id:cate_id, pos_name:pos_name });
    
            res.status(200).json('create equipments done !');
        }else{
            res.status(200).json('create equipments error !');
        }

    }catch(err){
        res.status(500).json(err);
    }
}

const deleteData = async (req, res) => {
    try{
        const del =  await Equipments.destroy({where: {id:req.params.id}});
        res.status(200).json(del);
    }catch{
        res.status(500).json(0);
    }
}

const update = async (req, res) => {

    try{
        const { id,cate_id,unit_id,equip_name,equip_stock,equip_import, pos_name ,pos_id } = req.body
        const update =  await Equipments.update({cate_id:cate_id ,unit_id:unit_id, equip_name:equip_name,equip_stock: equip_stock,equip_import:equip_import}, {where:{id:id}});
      
          if(update[0] > 0){
              await Positions.update({pos_name:pos_name },{where: {id:pos_id} })
              res.status(200).json('update equipments done !');
          }else{
              res.status(200).json('update equipments error !');
          }
    }catch(err){
        res.status(500).json(err);
    }
   
}

const findAll = async (req, res) => {
    try{

        const equipments = await Equipments.findAll({
            include:[
                Units,
                Categories,
                Positions
            ]
        });
        const modle =  equipments.map(m => {return {
                id: m.id,
                cate_id: m.cate_id,
                unit_id: m.unit_id,
                equip_name: m.equip_name,
                equip_stock: m.equip_stock,
                equip_import: m.equip_import,
                unit_name:  m.unit.unit_name,
                cate_name: m.category.cate_name,
                pos_name: (m.position !== null)?m.position.pos_name: '',
                pos_id : (m.position !== null)? m.position.id: 0,
    
        }})
        
        res.status(200).json(modle)
    }catch(err){
        res.status(500).json(err);
    }
}

const findOne = async (req, res) => {
    try{
        const unit = await Equipments.findOne({where:{id:req.params.id}});
        res.status(200).json(unit);
    }catch{
        res.status(500).json(0);
    }   

}

module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}