
const Mongoose = require('mongoose')


module.exports = {
    DB_Connection: () => {
        Mongoose.connect('mongodb://54.153.168.82:27017/noteZipper', function (err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("db is connected")
            }
        });

    }
}
