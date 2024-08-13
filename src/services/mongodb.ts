import mongoose from 'mongoose';


async function connectToDatabase() {
 await mongoose.connect(process.env.MONGODB_URI)
}

export default connectToDatabase;
