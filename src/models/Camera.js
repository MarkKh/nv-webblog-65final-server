module.exports = (sequelize, DataTypes) => {
  const Camera = sequelize.define("Camera", {
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.STRING,
    sensor: DataTypes.STRING,
    fps: DataTypes.STRING,
    wifi: DataTypes.STRING,
    bluetooth: DataTypes.STRING,
    pros: DataTypes.STRING,
  });
  return Camera;
};
