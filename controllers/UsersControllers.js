import model from '../models';

const { User } = model;

class UsersControllers{

    static signup(req, res){
        const {name, role} = req.body ;
        return User.create(
                {name: name, role: role}
            ).then(userData => res.status(201).send(
                {
                    succes: true,
                    message: 'User succesfully create',
                    userData
                }
            ))
        
    }

    static signup2(req, res){
        (async function(req,res){

            const {name, role} = req.body ;
            const user = await User.create(
                {name: name, role: role}
            )
            return res.status(201).send(
                {
                    succes: true,
                    message: 'User succesfully create',
                    user: user
                }
            )
        })(req, res);
    }

}
export default UsersControllers;