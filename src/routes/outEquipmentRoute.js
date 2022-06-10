const {  DataTypes } = require("sequelize");
const db = require("../db/database");

const Out_equipments = db.define('out_equipments', {
    staff_id: DataTypes.INTEGER,
    out_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
});

const Outequipment_details = db.define('Outequipment_details', {
    out_id: DataTypes.INTEGER,
    equip_id: DataTypes.INTEGER,
    out_qty: DataTypes.INTEGER,
    out_date: DataTypes.DATE,
});

const create = async (req, res) => {
    const {staff_id, out_qty, out_date, equip_id} = req.body;

   const out = await Out_equipments.create({staff_id, out_date, active: true});

   if(out.id > 0){
        await Outequipment_details.create({out_id:out.id, equip_id, out_qty, out_date});
        res.status(200).send('create out equipment done !');
   }else{
        res.status(500).send('create out equipment error !');
   }
}

const deleteData = async (req, res) => {
    const findItem = await Out_equipments.findOne({where: {id: req.params.id}});
    if(findItem){
        await Out_equipments.update({active: false},{where: {id: req.params.id}});
        res.status(200).send('delete out equipment done !')
    }else{
        res.status(500).send('delete out equipment error !')
    }
}


const update = async (req, res) => {
    const {id,staff_id, out_qty, out_date, equip_id,active} = req.body;

    const out = await Out_equipments.update({staff_id, out_date, active}, {where: {id:id}});
 
    if(out){
         await Outequipment_details.update({out_id:out.id, equip_id, out_qty, out_date}, {where:{id:id}});
         res.status(200).send('create out equipment done !');
    }else{
         res.status(500).send('create out equipment error !');
    }
}

const findAll = async (req, res) => {
    const imports = await Out_equipments.findAll({where: {active: true}});
    const imports_detail = await Outequipment_details.findAll();

    if(imports, imports_detail){

        const importsList = imports.map(prod => ({ 
            ...prod.dataValues, 
            ...(imports_detail.find(item => item.out_id === prod.id).dataValues ?? {})
            }));
            res.status(200).json(importsList)
        }else{
            res.status(500).send('error !');
        }
}

const findOne = async (req, res) => {
    const {id} = req.params;
    const out = await Out_equipments.findOne({where: {id:id}});
    const out_detail = await Outequipment_details.findOne({where:{out_id:id}});
    if(imports, imports_detail){
        const resl = {
            id: out.id,
            staff_id: out.staff_id,
            out_date: out.out_date,
            equip_id: out_detail.equip_id,
            out_qty: out_detail.out_qty,

    }
        res.status(200).json(resl);
    }else{
        res.status(500).send('error !');
    } 
}


module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}