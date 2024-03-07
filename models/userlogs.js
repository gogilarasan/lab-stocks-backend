module.exports = (sequelize, DataTypes) => {
    const UserLogs = sequelize.define("userlogs", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      labname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      labid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sysseat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      distid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rollno: {
        type: DataTypes.STRING,
        allowNull: false
      },
      entry_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      exit_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    });
  
    return UserLogs;
  };
  