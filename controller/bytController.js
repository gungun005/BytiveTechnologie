const bytServices = require("../services/bytServices");

const getBytAllTask = async (req, res) => {
  let  getBytAllTask = await bytServices.getBytAllTask(req.body);
  res.send(getBytAllTask);
};

const getBytTaskById = async (req, res) => {
    let getBytTaskById = await bytServices.getBytTaskById(req.body);
    res.send(getBytTaskById);
  };

const postBytTask = async (req, res) => {
    console.log("in controller");
    let postBytTask = await bytServices.postBytTask(req.body);
    console.log("Response from post call ");
    console.log(postBytTask);
    if (postBytTask === true) {
      res.sendStatus(201);
    }
    else
      res.send(postBytTask);
  };
  const deleteBytTaskById = async (req, res) => {
    let deleteBytTaskById = await bytServices.deleteBytTaskById(req.body);
    res.send(deleteBytTaskById);
  };

  const updateBytTaskById = async (req, res) => {
    let updateBytTaskById = await bytServices.updateBytTaskById(req.body);
    res.send(updateBytTaskById);
  };
  
module.exports={
    getBytAllTask,
    getBytTaskById,
    postBytTask,
    deleteBytTaskById,
    updateBytTaskById
};