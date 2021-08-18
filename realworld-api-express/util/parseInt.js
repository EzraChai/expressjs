module.exports = (number) => {
    return typeof number === 'string' && Number.parseInt(number)
}