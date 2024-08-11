import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import connectToDatabase from '@/services/mongodb';
import Reserva, { IReserva } from '@/models/Reserva';

export async function handler(req: NextRequest) {
  await connectToDatabase();

  const { method } = req;

  if (method === 'GET') {
    try {
      const reservas = await Reserva.find({});
      return NextResponse.json(reservas, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error al obtener las reservas' }, { status: 500 });
    }
  }

  if (method === 'POST') {
    try {
      const data = await req.json();
      const { name, email, phone, date, time, guests }: IReserva = data;

      const newReserva = new Reserva({
        name,
        email,
        phone,
        date,
        time,
        guests,
      });

      await newReserva.save();

      return NextResponse.json({ message: 'Reserva creada exitosamente', reserva: newReserva }, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return NextResponse.json({ error: 'Error al crear la reserva' }, { status: 500 });
    }
  }

  if (method === 'PUT') {
    try {
      const id = req.nextUrl.searchParams.get('id');
      if (!ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
      }

      const data = await req.json();
      const updatedReserva = await Reserva.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });

      if (!updatedReserva) {
        return NextResponse.json({ error: 'Reserva no encontrada' }, { status: 404 });
      }

      return NextResponse.json({ message: 'Reserva actualizada exitosamente', reserva: updatedReserva }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error al actualizar la reserva' }, { status: 500 });
    }
  }

  if (method === 'DELETE') {
    try {
      const id = req.nextUrl.searchParams.get('id');
      if (!ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
      }

      const deletedReserva = await Reserva.findByIdAndDelete(id);

      if (!deletedReserva) {
        return NextResponse.json({ error: 'Reserva no encontrada' }, { status: 404 });
      }

      return NextResponse.json({ message: 'Reserva eliminada exitosamente' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Error al eliminar la reserva' }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 });
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
