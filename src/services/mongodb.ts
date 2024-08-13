import mongoose from 'mongoose';

async function connectToDatabase() {
  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    throw new Error('El URI de MongoDB no está definido en las variables de entorno');
  }

  await mongoose.connect(mongoUri);
}

export default connectToDatabase;
