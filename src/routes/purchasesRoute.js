const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Purchases = db.define('purchases', {
    equip_id: DataTypes.INTEGER,
    pur_date: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
});

const Purchase_details = db.define('purchase_details', {
    pur_id: DataTypes.INTEGER,
    equip_id: DataTypes.INTEGER,
    equip_qty: DataTypes.INTEGER,
    pur_date: DataTypes.INTEGER,

});

const create = async (req, res) => {
    const {equip_id, pur_date, equip_qty} = req.body;
    const purchases = await Purchases.create({equip_id, pur_date, active: true});

    if(purchases.id > 0){
        await Purchase_details.create({pur_id:purchases.id, equip_id, equip_qty,pur_date});
        res.status(200).send('create out Purchases done !');
    }else{
        res.status(500).send('create out Purchases error !');
    }
}

const deleteData = async (req, res) => {
    const findItem = await Purchases.findOne({where: {id: req.params.id}});
    if(findItem){
        await Purchases.update({active: false},{where: {id: req.params.id}});
        res.status(200).send('delete out Purchases done !')
    }else{
        res.status(500).send('delete out Purchases error !')
    }
}


const update = async (req, res) => {
    const {id,equip_id, pur_date, active} = req.body;
    const purchases = await Purchases.findOne({where:{id:id}});

    if(purchases){
        await Purchase_details.update({equip_id,pur_date, active},{where:{id:id}});
        res.status(200).send('create out Purchases done !');
    }else{
        res.status(500).send('create out Purchases error !');
    }
}

const findAll = async (req, res) => {
    const purchases = await Purchases.findAll({where: {active: true}});
    const purchase_details = await Purchase_details.findAll();

    if(purchases, purchase_details){

    const importsList = purchases.map(prod => ({ 
        ...prod.dataValues, 
        ...(purchase_details.find(item => item.pur_id === prod.id).dataValues ?? {})
        }));
        res.status(200).json(importsList)
    }else{
        res.status(500).send('error !');
    }
}


const findOne = async (req, res) => {
    const {id} = req.params;
    const purchases = await Purchases.findOne({where:{id:id}});
    const purchases_detail = await Purchase_details.findOne({where:{id:id}})

    if(purchases, purchases_detail){
        const resl = {
            id: purchases.id,
            pur_date: purchases.pur_date,
            active: purchases.active,
            equip_id: purchases.equip_id,
            equip_qty: purchases_detail.equip_qty,
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



