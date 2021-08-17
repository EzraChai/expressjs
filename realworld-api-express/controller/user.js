
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
        //1. 获取请求体数据
        console.log(req.body.user)
        const user = req.body.user;
        
        //2. 数据验证
        //3. 验证通过，将数据保存到数据库
        //4. 发送成功响应
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