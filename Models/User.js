import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnection,
    modelName: "User",
  }
);

export default User;
