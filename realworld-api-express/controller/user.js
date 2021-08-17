
/**
 * User Login
 */ 
 exports.login = async (req, res, next) => {
    try {
        // 处理请求
        res.send("USER LOGIN")
    } catch (error) {
        next(error);
    }
}


/**
 * User Register
 */ 
exports.register = async (req, res, next) => {
    try {
        // 处理请求
        res.send("USER REGISTER")
    } catch (error) {
        next(error);
    }
}


/**
 * Get Current User
 */ 
exports.getCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("GET CURRENT USER")
    } catch (error) {
        next(error);
    }
}


/**
 * User Update
 */ 
 exports.updateUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send("USER Update")
    } catch (error) {
        next(error);
    }
}