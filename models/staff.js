module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define("staff", {
      staffid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true // Assuming staffid is the primary key
      },
      staffname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      distid: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "stock", // Assuming the model name for stock is "stock"
          key: "distid"
        }
      },
      researchscholarcount: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Staff;
  };
  