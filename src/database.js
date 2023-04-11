// Connect mongodb
const server ="mongodb+srv://hanhnxth2202040:Nguyenxuanhanh123@cluster0.npgkw1y.mongodb.net"
const database = "T2203E1"
let mongoose = require("mongoose")


class Database {
    constructor() {
        this.__connect();
    }
    __connect() {
        mongoose.connect(`${server}/${database}`)
        .then(()=>{
            console.log('Connected database!');
        })
        .catch((err) => {
            console.log(err);
        })
    }
};

module.exports = new Database();
