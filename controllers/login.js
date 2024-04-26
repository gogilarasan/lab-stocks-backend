const bcrypt = require('bcrypt');
const id = require("shortid");

class Login {
    static async createLogin(db, loginData) {
        try {
            // Hash the password before saving it
            const loginid = id.generate();

            loginData.loginid = loginid;
            const hashedPassword = await bcrypt.hash(loginData.password, 10);
            const login = await db.Login.create({ ...loginData, loginid, password: hashedPassword });
            return login;
        } catch (error) {
            console.error('Error creating login:', error);
            throw error;
        }
    }

    static async updateLogin(db, loginId, loginData) {
        try {
            // Hash the password if it exists in the loginData
            if (loginData.password) {
                loginData.password = await bcrypt.hash(loginData.password, 10);
            }
            await db.Login.update(loginData, {
                where: { loginid: loginId }
            });
            const updatedLogin = await db.Login.findByPk(loginId);
            return updatedLogin;
        } catch (error) {
            console.error('Error updating login:', error);
            throw error;
        }
    }

    static async deleteLogin(db, loginId) {
        try {
            const login = await db.Login.findByPk(loginId);
            if (login) {
                await login.destroy();
                return true;
            } else {
                console.error('Login not found with ID:', loginId);
                return false;
            }
        } catch (error) {
            console.error('Error deleting login:', error);
            throw error;
        }
    }

    static async signin(db, username, password) {
        try {
            // Find the login data by email
            const login = await db.Login.findOne({ where: { username } });
            if (!login) {
                throw new Error('Invalid email or password');
            }
            // Compare the provided password with the hashed password in the database
            const isValidPassword = await bcrypt.compare(password, login.password);
            if (!isValidPassword) {
                throw new Error('Invalid email or password');
            }
            return login;
        } catch (error) {
            console.error('Error signing in:', error);
            throw error;
        }
    }


    static async forgotPassword(db, email, username) {
        try {
            // Find the user by email or username
            const user = await db.Login.findOne({ where: { email: email, username: username } });
            if (!user) {
                throw new Error('User not found with the provided email and username');
            }
            const temporaryPassword = generateTemporaryPassword();
            const hashedTemporaryPassword = await bcrypt.hash(temporaryPassword, 10);
            await db.Login.update({ password: hashedTemporaryPassword }, { where: { email: email, username: username } });

            return true;
        } catch (error) {
            console.error('Error handling forgot password:', error);
            throw error;
        }
    }
}
module.exports = Login;
