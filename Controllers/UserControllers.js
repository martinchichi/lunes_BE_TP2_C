import dbConnection from "../dbConnection/dbConnection.js";

class UserControllers {
  getAllUsers = async (req, res) => {
    try {
      const query = "SELECT id, name, mail FROM user";
      const [data] = await dbConnection.query(query);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, mail } = req.body;
      const query = `UPDATE user SET name=?, mail=? WHERE id=?`;
      const [data] = await dbConnection.query(query, [name, mail, id]);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  };
}

export default UserControllers;
