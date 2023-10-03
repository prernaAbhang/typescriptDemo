import { Model, Sequelize, DataTypes } from "sequelize";

export default class User extends Model {
    public id?: string;
    public name?: string;
    public phone?: string;
    public email?: string;
    public createdAt?: Date;
}

export const UserMap = (sequelize: Sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.STRING(255),
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(255),
            },
            phone: {
                type: DataTypes.STRING(255),
            },
            email: {
                type: DataTypes.STRING(255),
            },
            createdAt: {
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            tableName: "users",
            timestamps: false,
        }
    );
    User.sync();
};
