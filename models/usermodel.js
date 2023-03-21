module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define("users",{
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            defaultValue:'test@gmail.com'
        },
        gender:{
            type:DataTypes.STRING
        }
    },{
        tableName : 'userdata'
});
    return Users;
}