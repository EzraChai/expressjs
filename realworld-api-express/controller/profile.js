
/**
 * Get Profile
 */
exports.getProfile = async (req, res, next) => {
    try {
        res.send('GET PROFILE');
    } catch (error) {
        next(error);
    }
}

/**
 * Follow User
 */
 exports.followUser = async (req, res, next) => {
    try {
        res.send('FOLLOW USER');
    } catch (error) {
        next(error);
    }
}

/**
 * Unfollow User
 */
exports.unfollowUser = async (req, res, next) => {
    try {
        res.send('Unfollow User'.toUpperCase)
    } catch (error) {
        next(error);
    }
}