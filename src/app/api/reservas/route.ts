import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../services/mongodb'; // Asegúrate de que la ruta sea correcta
import { ObjectId } from 'mongodb';

interface Reservation {
    _id?: ObjectId;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    createdAt: Date;
  }
  
  // Crear una nueva reserva (POST)
  export async function POST(req: Request) {
    const body: Reservation = await req.json();
  
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection<Reservation>('reservas');
  
      const result = await collection.insertOne({
        ...body,
        createdAt: new Date(),
      });
  
      return NextResponse.json({ message: 'Reserva creada exitosamente', id: result.insertedId }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error al crear la reserva' }, { status: 500 });
    }
  }
  
  // Obtener todas las reservas (GET)
  export async function GET() {
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection<Reservation>('reservas');
  
      const reservas = await collection.find().sort({ createdAt: -1 }).toArray();
  
      return NextResponse.json(reservas, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error al obtener las reservas' }, { status: 500 });
    }
  }
  
  // Actualizar una reserva (PUT)
  export async function PUT(req: Request) {
    const { _id, ...updateData }: Reservation = await req.json();
  
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection<Reservation>('reservas');
  
      const result = await collection.updateOne(
        { _id: new ObjectId(_id) },
        { $set: { ...updateData } }
      );
  
      if (result.modifiedCount === 0) {
        return NextResponse.json({ error: 'No se encontró la reserva para actualizar' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Reserva actualizada exitosamente' }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error al actualizar la reserva' }, { status: 500 });
    }
  }
  
  // Eliminar una reserva (DELETE)
  export async function DELETE(req: Request) {
    const { id } = await req.json();
  
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection<Reservation>('reservas');
  
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
  
      if (result.deletedCount === 0) {
        return NextResponse.json({ error: 'No se encontró la reserva para eliminar' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Reserva eliminada exitosamente' }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error al eliminar la reserva' }, { status: 500 });
    }
  }