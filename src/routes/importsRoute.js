const {  DataTypes } = require("sequelize");
const db = require("../db/database");

// convert model res
const Imports = db.define('imports', {
    pur_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    import_date: DataTypes.DATE,
    equip_stock: DataTypes.INTEGER,
    equip_import: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
});

const Import_details = db.define('import_details', {
    import_id: DataTypes.INTEGER,
    equip_id: DataTypes.INTEGER,
    equip_qty: DataTypes.INTEGER,
    import_date: DataTypes.DATE,
});


const create = async (req, res) => {

    try{
        const {pur_id, user_id, import_date, equip_stock, equip_import,equip_id, equip_qty} = req.body;
        const createImpor = await Imports.create({pur_id, user_id, import_date, equip_stock, equip_import, active: true});
        if(createImpor.id > 0){
            await Import_details.create({import_id: createImpor.id, equip_id, equip_qty, import_date});
            res.status(200).json('create Imports done !');
        }else{
            res.status(200).json('create import error !');
        }  
    }catch(err){
        res.status(500).json(err);
    }
 

}

const deleteData = async (req, res) => {

    try{
        const findItem = await Imports.findOne({where: {id: req.params.id}});
        if(findItem){
            await Imports.update({active: false},{where: {id: req.params.id}});
            res.status(200).json('delete import done !')
        }else{
            res.status(500).json('delete import error !')
        }
    }catch(err){
        res.status(500).json(err);
    }

}


const update = async (req, res) => {

    try{
        const {id,pur_id, user_id, import_date, equip_stock, equip_import,equip_id, equip_qty, active} = req.body;
        const createImport = await Imports.update({pur_id, user_id, import_date, equip_stock, equip_import, active},{where:{id:id}});
        if(createImport){
            await Import_details.update({import_id: createImport.id, equip_id, equip_qty, import_date},{where:{import_id:id}});
            res.status(200).json('update Imports done !');
        }else{
            res.status(200).json('update import error !');
        }
    }catch(err){
        res.status(500).json(err);
    }

   
}

const findAll = async (req, res) => {

    try{
        const imports = await Imports.findAll({where: {active: true}});
        const imports_detail = await Import_details.findAll();
    
        if(imports, imports_detail){
    
            const importsList = imports.map(prod => ({ 
                ...prod.dataValues, 
                ...(imports_detail.find(item => item.import_id === prod.id).dataValues ?? {})
                }));
                res.status(200).json(importsList)
            }else{
                res.status(500).json('error !');
            }
    }catch(err){
        res.status(500).json(err);
    }
 
}

const findOne = async (req, res) => {

    try{
        const {id} = req.params;
        const imports = await Imports.findOne({where: {id:id}});
        const imports_detail = await Import_details.findOne({where:{import_id:id}});
        if(imports, imports_detail){
            const resl = {
                id: imports.id,
                pur_id: imports.pur_id,
                user_id: imports.user_id,
                equip_stock: imports.equip_stock,
                equip_import: imports.equip_import,
                equip_id: imports_detail.equip_id,
                equip_qty: imports_detail.equip_qty,
                import_date: imports.import_date,
        }
            res.status(200).json(resl);
        }else{
            res.status(500).json('error !');
        } 
    }catch(err){
        res.status(500).json(err);
    }
    
}

module.exports ={
    create,
    deleteData,
    update,
    findAll,
    findOne,
}

