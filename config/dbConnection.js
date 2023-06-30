const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL + process.env.MONGODB_NAME)
        console.log('DB Connected.');

    } catch (error) {
        console.log('Connect Failed.');
        console.log(error);
    }
}

module.exports = dbConnect




