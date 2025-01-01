
const getBytAllTask = async (body) => {
    console.log("Getting the all task..!!");
    // try {
    //   await client.connect();
    //   const db = client.db("flipComInfo");
    //   const coll = db.collection("flipComInfo");
    //   const data = await coll.find().toArray();
    //   console.log(data);
    //   return data;
    // } catch (err) {
    //   console.log("Error occurred");
    //   return err;
    // } finally {
    //   await client.close();
    // }
  };

const postBytTask = async (req, res) => {
    // await client.connect();
    // const db = client.db("flipComInfo");
    // const coll = db.collection("flipComInfo");
    // const data = await coll.insertOne(body);
    // return data.acknowledged;
    return "data is posted";
};

const getBytTaskById = async (body) => {
    console.log(body);
    console.log("hi i have task by id");
    // try {
    //   await client.connect();
    //   const db = client.db("flipComInfo");
    //   const coll = db.collection("flipComInfo");
    //   const data = await coll.find().toArray();
    //   console.log(data);
    //   return data;
    // } catch (err) {
    //   console.log("Error occurred");
    //   return err;
    // } finally {
    //   await client.close();
    // }
  };
  const deleteBytTaskById = async (body) => {
    console.log(body);
    console.log("I have the power to delete any task by id");
    // let searchOptions = {};
    // let deleteValue = Number(-1);
    // console.log(searchOptions);
    // // search option should be comparny name and name of object so to act as combo
    // // lays chips, uncle chips
    // // make change in searchoptions
    // if (body.name != null && body.name !== "") {
    //   searchOptions.name = body.name;
    // }
    // if (body.company != null && body.company !== "") {
    //   searchOptions.company = body.company;
    // }
    // // If the user doesn't provides any value we'll delete only 1 instance
    // // otherwise we'll delete the units provided by the user.
    // if (body.units != null && body.units !== "") {
    //   deleteValue = -1 * Number(body.units);
    // }
  
    // searchOptions = {
    //     "name" : "chocolate",
    //     "company" : "nestle"
    // }
    // will be taken care at DB.
//     try {
//       await client.connect();
//       const db = client.db("flipComInfo");
//       const coll = db.collection("flipComInfo");
//       const data = await coll.findOneAndUpdate(searchOptions, {
//         $inc: { units: deleteValue },
//       });
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//       console.log("Error occurred");
//       return err;
//     } finally {
//       await client.close();
//     }
  };

  const updateBytTaskById = async (body) => {
    console.log(body);
    let searchOptions = {};
    if (body.product != null && body.product !== "") {
      searchOptions.product = body.product;
    }
    console.log("hi i have updated task status");
    // try {
    //   await client.connect();
    //   const db = client.db("flipComInfo");
    //   const coll = db.collection("flipComInfo");
    //   const data = await coll.updateOne(searchOptions, {
    //     $set: {$inc:{ units: body.units }},
    //   });
    //   data=await coll.updateOne(searchOptions,{
    //       $set:{price:body.price},
    //   });
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    //   console.log("Error occurred");
    //   return err;
    // } finally {
    //   await client.close();
    // }
  };

  module.exports={
    getBytAllTask,
    postBytTask,
    getBytTaskById,
    deleteBytTaskById,
    updateBytTaskById
  };