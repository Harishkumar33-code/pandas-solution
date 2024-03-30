const userServices = require('../services/userServices');

const signIn = async (req, res) => {
    if(!req.body.email && !req.body.password) {
        res.status(400).send('Please provide email and password');
    } else{
        const email = req.body.email;
        const password = req.body.password;
        const signInRes = await userServices.signIn(email, password);
        if(signInRes.isError) {
            res.status(400).send(signInRes.error);
        } else{
            if(signInRes.data.length === 0) {
                res.status(200).send('User cred is not valid');
            } else{
                res.status(200).send('User cred are valid');
            }
        }
    }
}

const signUp = async (req, res) => {
    if(!req.body.email && !req.body.password) {
        res.status(400).send('Please provide email and password');
    } else{
        const email = req.body.email;
        const password = req.body.password;
        const isEmailExists = await userServices.isEmailExists(email);
        if(isEmailExists.isError) {
            res.status(400).send(isEmailExists.error);
        }else {
            if(isEmailExists.data.length > 0) {
                res.status(200).send('Email already exists');
            } else{
                const signUpRes = await userServices.signUp(email, password);
                if(signUpRes.isError) {
                    res.status(400).send(signUpRes.error);
                } else{
                    if(signUpRes.data.affectedRows === 0) {
                        res.status(400).send('User could not be created');
                    } else{
                        res.status(200).send('User created successfully');
                    }
                }
            
            }
        }
    }
}

module.exports = { signIn, signUp};
