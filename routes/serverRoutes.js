const express = require('express');
const router = express.Router();
const bytController = require('../controller/bytController');
// const validate = require('../validations/product.validation');

router.route('/')
      .get(bytController.getBytAllTask)
 
router.route('/task')
      .post(bytController.postBytTask)

router.route('/task/id')
      .get(bytController.getBytTaskById)
      .delete(bytController.deleteBytTaskById)
      .put(bytController.updateBytTaskById)
      

module.exports=router;
