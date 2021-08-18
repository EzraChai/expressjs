const { validationResult } = require('express-validator');

module.exports = () => {
  return (req, res, next) => {
    //2. 判断验证结果

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    next()
  }
}