const bytRepository = require("../repository/bytRepository");

const getBytAllTask = () => {
  let getBytAllTask = bytRepository.getBytAllTask();
  return getBytAllTask;
};

const getBytTaskById= (body) => {
    console.log("in service");
    console.log(body);
    let getBytTaskById = bytRepository.getBytTaskById(body);
    return getBytTaskById;
  };

const postBytTask = async (req, res) => {
    console.log("in services");
    console.log(req.body);
    let postBytTask = bytRepository.postBytTask(req.body);
    return postBytTask;
  };

const updateBytTaskById = (body) => {
    let updateBytTaskById = bytRepository.updateBytTaskById(body);
    return updateBytTaskById;
  };

const deleteBytTaskById  = (body) => {
    let deleteBytTaskById  = bytRepository.deleteBytTaskById (body);
    return deleteBytTaskById ;
  };
module.exports={
    getBytAllTask,
    getBytTaskById,
    postBytTask,
    deleteBytTaskById,
    updateBytTaskById
};