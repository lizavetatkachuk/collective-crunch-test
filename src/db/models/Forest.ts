import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../connection";

export interface ForestAttributes {
  stand_id: number;
  longitude: number;
  latitude: number;
  main_species: string;
  vol_m3_per_ha: number;
  age_years: number;
  size_in_ha: number;
}

export interface partialInputForestAttributes
  extends Partial<ForestAttributes> {}

class Forest extends Model<ForestAttributes> implements ForestAttributes {
  public stand_id!: number;
  public longitude!: number;
  public latitude!: number;
  public main_species!: string;
  public vol_m3_per_ha!: number;
  public age_years!: number;
  public size_in_ha!: number;
}

Forest.init(
  {
    stand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(6, 4),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(6, 4),
      allowNull: false,
    },
    main_species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vol_m3_per_ha: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age_years: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size_in_ha: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
    paranoid: false,
    freezeTableName: true,
    modelName: "forest",
  }
);

export { Forest };
