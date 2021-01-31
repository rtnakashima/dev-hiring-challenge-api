'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Repo.init({
    repo_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    description: DataTypes.STRING,
    html_url: DataTypes.STRING,
    stargazers_count: DataTypes.INTEGER,
    stargazers_url: DataTypes.STRING,
    language: DataTypes.STRING,
    license_name: DataTypes.STRING,
    open_issues_count: DataTypes.INTEGER,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Repo',
  });
  return Repo;
};