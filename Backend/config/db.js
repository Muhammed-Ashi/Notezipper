
const Mongoose = require('mongoose')


module.exports = {
    DB_Connection: () => {
        Mongoose.connect('mongodb://127.0.0.1:27017/noteZipper_db', function (err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("db is connected")
            }
        });

    }
}
