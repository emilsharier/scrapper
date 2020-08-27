module.exports = (app) => {
    app.use('/fetchDetails', require('./fetch_details'))
}