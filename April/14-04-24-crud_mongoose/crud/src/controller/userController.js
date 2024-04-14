const UserSchema = require('../models/userModal');

async function createUsers(data) {
    try {

        const user = new UserSchema({
            name: data.name,
            email: data.email
        })

        let result = await user.save();
        return result;

    } catch (err) {
        return err;
    }
}


async function findUsers() {
    try {

        let result = await UserSchema.find();
        return result;

    } catch (err) {
        return err;
    }
}


async function findByIdUsers(id) {
    try {

        let result = await UserSchema.findById(id);
        return result;

    } catch (err) {
        return err;
    }
}


async function deleteByIdUsers(id) {
    try {

        let result = await UserSchema.findByIdAndDelete(id);
        return result;

    } catch (err) {
        return err;
    }
}



async function updateByIdUsers(id,body) {
    try {

        let result = await UserSchema.findByIdAndUpdate(id,body,{
            new:true
        });
        return result;

    } catch (err) {
        return err;
    }
}

module.exports = {
    createUsers,
    findUsers,
    findByIdUsers,
    deleteByIdUsers,
    updateByIdUsers
}