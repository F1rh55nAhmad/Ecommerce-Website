module.exports = (sequelize,DataTypes)=>{
    const cart = sequelize.define("cart",{
        product_name:DataTypes.STRING,
        quantity:{
            type: DataTypes.INTEGER,
            defaultValue:'1'
        }
    },{
        tableName : 'add to cart'
     });
    return Users;
}