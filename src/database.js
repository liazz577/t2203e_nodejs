const server = "mongodb://127.0.0.1:27017"
const database = "T2203E"  //if use online mongodb
let mongoose = require("mongoose")

class Database{
    __connect(){
        mongoose.connect(`${server}/${database}`)
            .then(()=>{
                console.log("Connected database!")
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
module.exports = new Database();