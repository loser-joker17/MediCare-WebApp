
const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log("Router Loaded");
router.get('/',homeController.home);


// use another routes
router.use('/users',require('./users'));
router.use('/mdr',require('./mdr'));
router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));
router.use('/appointments',require('./appointments'));
router.use('/api',require('./api'));
router.use('/consultations',require('./consultations'));
router.use('/treatments',require('./treatments'));
// for exporting to outer files
module.exports=router; 

