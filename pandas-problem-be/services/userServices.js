const executeQuery = require('../db');

const signIn = async (email, password) => {
    const signInQuery = `SELECT * FROM tbl_users WHERE email = ? AND password = ?`;
    const signInParams = [email, password];
    const signInRes = await executeQuery(signInQuery, signInParams);
    if(signInRes.isError) {
        return {'isError': true, data: [], error: signInRes.error};
    } else{
        if(signInRes.data.length === 0) {
            return {'isError': false, data: [], error: null};
        } else{
            return {'isError': false, data: signInRes.data, error: null};
        }
    }
}

const signUp = async (email, password) => {
    const signUpQuery = `INSERT INTO tbl_users (email, password) VALUES (?, ?)`;
    const signUpParams = [email, password];
    const signUpRes = await executeQuery(signUpQuery, signUpParams);
    if(signUpRes.isError) {
        return {'isError': true, data: [], error: signUpRes.error};
    } else{
        return {'isError': false, data: signUpRes.data, error: null};
    }
}

const isEmailExists = async (email) => {
    const isEmailExistsQuery = `SELECT * FROM tbl_users WHERE email = ?`;
    const isEmailExistsParams = [email];
    const isEmailExistsRes = await executeQuery(isEmailExistsQuery, isEmailExistsParams);
    if(isEmailExistsRes.isError) {
        return {'isError': true, data: [], error: isEmailExistsRes.error};
    } else{
        return {'isError': false, data: isEmailExistsRes.data, error: null};
    }
}


module.exports = {signIn, signUp, isEmailExists};
