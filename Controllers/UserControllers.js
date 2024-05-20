import dbConnection from "../dbConnection/dbConnection.js";

class UserControllers {
  getAllUsers = async (req, res) => {
    try {
      const query = "SELECT id, name, mail FROM usr";
      const [data]= await dbConnection.query(query);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };
}

export default UserControllers;
