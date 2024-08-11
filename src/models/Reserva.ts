import { Schema, model, models, Document, Model } from 'mongoose';

export interface IReserva extends Document {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

const ReservaSchema = new Schema<IReserva>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
}, {
  timestamps: true, // Añade campos `createdAt` y `updatedAt`
});

// Exporta el modelo, verificando si ya existe para evitar problemas de recarga en desarrollo
const Reserva: Model<IReserva> = models.Reserva || model<IReserva>('Reserva', ReservaSchema);

export default Reserva;
