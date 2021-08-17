
/**
 * Get Tags
 */ 
 exports.getTags = async (req, res, next) => {
    try {
        // 处理请求
        res.send("GET TAGS")
    } catch (error) {
        next(error);
    }
}