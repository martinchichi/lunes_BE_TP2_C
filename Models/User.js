import { DataTypes, Model } from "sequelize";
import dbConnection from "../dbConnection/dbConnection.js";
import bcrypt from "bcrypt";
// console.log(`🚀 ~ bcrypt:`, bcrypt);

class User extends Model {
  validatePassword = async (password) => {
    const comparePassword = await bcrypt.compare(password, this.password);
    return comparePassword;
  };
}

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
      unique: true,
    },
  },
  {
    sequelize: dbConnection,
    modelName: "User",
  }
);

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt();
  console.log(`🚀 ~ User.beforeCreate ~ salt:`, salt);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

export default User;
