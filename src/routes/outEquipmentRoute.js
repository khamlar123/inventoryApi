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

const Equipments = db.define('equipments', {
    cate_id: DataTypes.INTEGER,
    unit_id: DataTypes.INTEGER,
    equip_name: DataTypes.STRING,
    equip_stock: DataTypes.INTEGER,
    equip_import: DataTypes.INTEGER,
});

const create = async (req, res) => {
    try{
        const {staff_id, out_qty, out_date, equip_id} = req.body;
        const out = await Out_equipments.create({staff_id, out_date, active: true});
        if(out.id > 0){
             await Outequipment_details.create({out_id:out.id, equip_id, out_qty, out_date});

             const findItrem = await Equipments.findOne({where: {id: equip_id}});
             const totalQty = findItrem.dataValues.equip_stock - out_qty;
             await Equipments.update({equip_stock:totalQty }, {where:{id: equip_id}});
             res.status(200).json('create out equipment done !');
        }else{
             res.status(500).json('create out equipment error !');
        }

    }catch (err){
        res.status(500).json(err);
    }
}

const deleteData = async (req, res) => {
    try{
        const findItem = await Out_equipments.findOne({where: {id: req.params.id}});
        if(findItem){
            await Out_equipments.update({active: false},{where: {id: req.params.id}});

            const findDetail = await Outequipment_details.findOne({where: {out_id: req.params.id}});
            const findItem = await Equipments.findOne({where: {id:  findDetail.dataValues.equip_id}});
            const totalQty = (findItem.dataValues.equip_stock + findDetail.dataValues.out_qty );
            await Equipments.update({equip_stock:totalQty},{where: {id:  findDetail.dataValues.equip_id}});


            res.status(200).json('delete out equipment done !')
        }else{
            res.status(500).json('delete out equipment error !')
        }
    }catch(err){
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try{
        const {id,staff_id, out_qty, out_date, equip_id,active} = req.body;
        const out = await Out_equipments.update({staff_id, out_date, active}, {where: {id:id}});
        if(out){
             await Outequipment_details.update({out_id:out.id, equip_id, out_qty, out_date}, {where:{id:id}});

             const findItrem = await Equipments.findOne({where: {id: equip_id}});
             const totalQty = findItrem.dataValues.equip_stock - equip_qty;
             const updateequ =  await Equipments.update({equip_stock:totalQty }, {where:{id: equip_id}});

             res.status(200).json('update out equipment done !');
        }else{
             res.status(500).json('update out equipment error !');
        }
    }catch (err){
        res.status(500).json(err) 
    }
}

const findAll = async (req, res) => {
    try{
        const imports = await Out_equipments.findAll({where: {active: true}});
        const imports_detail = await Outequipment_details.findAll();
        if(imports, imports_detail){
        const importsList = imports.map(prod => ({ 
            ...prod.dataValues, 
            ...(imports_detail.find(item => item.out_id === prod.id).dataValues ?? {})
            }));
            res.status(200).json(importsList)
        }else{
            res.status(500).json('error !');
        }
    }catch(err){
        res.status(500).json(err)
    }
}

const findOne = async (req, res) => {
    try{

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
            res.status(500).json('error !');
        } 

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