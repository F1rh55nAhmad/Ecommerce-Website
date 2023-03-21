var db = require('../models');
const Users = db.users;

var addUser = async (req, resp)=>{

    /*let data = await Users.build({first_name: 'Farheen',last_name:'Ahmad',email:'test2@gmail.com'});
    await data.save();*/

    let data = await Users.create({first_name:'demofirst',last_name:'demolast',email:'demo14@gmail.com'});

    // update //

    /*data.name = 'dummy';
    data.save(); */

    //// delete
    //data.destroy();
    // console.log(data.dataValues);

    //relaod
    data.name = 'dummy';
    data.reload();  //data.save();

    let response = {
        data: 'ok'
    }

resp.status(200).json(response);

}


    var CrudOperation = async(req , resp)=>{

        // insert
        let data1 = await Users.create({first_name:'demo',last_name:'demo1',email:'demo14@gmail.com',gender:'female'});

        //--update
       let data2 = await Users.update({first_name:'first',last_name:'last',email:'final@gmail.com'},{
            where:{
                id:1
            }
        });
            


           // delete
           let data3 = await Users.destroy({
            where:{
                id:1
            }
           
        });


        let response = {
            data: 'ok'
        }
    
    resp.status(200).json(response);
}

module.exports = {
    addUser,
    CrudOperation
}