
const router = require('express').Router();
// add router
const userController = require('./usersRoute');
const categoriesController = require('./categoriesRoute');
const equipmentsController = require('./equipmentsRoute');
const importsController = require('./importsRoute');
const outequipmentsController = require('./outEquipmentRoute');
const positionsController = require('./positionsRoute');
const purchasesController = require('./purchasesRoute');
const staffController = require('./staffsRoute');
const suppliersController = require('./supplierRoute');
const unitController = require('./unitsRoute');
const loginController = require('./loginRoute');

// url for login
// router.post('/login', loginController.login);
// url for user
router.get('/user/get-user', userController.findAll);
router.get('/user/:id', userController.findOne);
router.put('/user/edit-user', userController.update);
router.post('/user/add-user', userController.create);
router.delete('/user/:id', userController.deleteData);
//url for categories 
router.get('/categories/get-categories', categoriesController.findAll);
router.get('/categories/:id', categoriesController.findOne);
router.put('/categories/edit-categories', categoriesController.update);
router.post('/categories/add-categories', categoriesController.create);
router.delete('/categories/:id', categoriesController.deleteData);
//url for equipments
router.get('/equipments/get-equipments', equipmentsController.findAll);
router.get('/equipments/:id', equipmentsController.findOne);
router.put('/equipments/edit-equipments', equipmentsController.update);
router.post('/equipments/add-equipments', equipmentsController.create);
router.delete('/equipments/:id', equipmentsController.deleteData);
//url for imports
router.get('/imports/get-imports', importsController.findAll);
router.get('/imports/:id', importsController.findOne);
router.put('/imports/edit-imports', importsController.update);
router.post('/imports/add-imports', importsController.create);
router.delete('/imports/:id', importsController.deleteData);
//url for outequipments
router.get('/outequipments/get-outequipments', outequipmentsController.findAll);
router.get('/outequipments/:id', outequipmentsController.findOne);
router.put('/outequipments/edit-outequipments', outequipmentsController.update);
router.post('/outequipments/add-outequipments', outequipmentsController.create);
router.delete('/outequipments/:id', outequipmentsController.deleteData);
//url for positions
router.get('/positions/get-positions', positionsController.findAll);
router.get('/positions/:id', positionsController.findOne);
router.put('/positions/edit-positions', positionsController.update);
router.post('/positions/add-positions', positionsController.create);
router.delete('/positions/:id', positionsController.deleteData);
//url for purchases
router.get('/purchases/get-purchases', purchasesController.findAll);
router.get('/purchases/:id', purchasesController.findOne);
router.put('/purchases/edit-purchases', purchasesController.update);
router.post('/purchases/add-purchases', purchasesController.create);
router.delete('/purchases/:id', purchasesController.deleteData);
//url for staff
router.get('/staff/get-staff', staffController.findAll);
router.get('/staff/:id', staffController.findOne);
router.put('/staff/edit-staff', staffController.update);
router.post('/staff/add-staff', staffController.create);
router.delete('/staff/:id', staffController.deleteData);
//url for suppliers
router.get('/suppliers/get-suppliers', suppliersController.findAll);
router.get('/suppliers/:id', suppliersController.findOne);
router.put('/suppliers/edit-suppliers', suppliersController.update);
router.post('/suppliers/add-suppliers', suppliersController.create);
router.delete('/suppliers/:id', suppliersController.deleteData);
//url for unit
router.get('/unit/get-unit', unitController.findAll);
router.get('/unit/:id', unitController.findOne);
router.put('/unit/edit-unit', unitController.update);
router.post('/unit/add-unit', unitController.create);
router.delete('/unit/:id', unitController.deleteData);

router.post('/login', loginController.login);

module.exports = router