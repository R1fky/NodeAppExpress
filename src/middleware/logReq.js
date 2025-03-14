const logRequest = (req, res, next) => {
    console.log('Route path yang dilakukan : ', req.path)
    next()
}

module.exports = logRequest