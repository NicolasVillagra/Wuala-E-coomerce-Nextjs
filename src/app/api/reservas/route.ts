/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import connectToDatabase from '@/services/mongodb';
import Reserva, { IReserva } from '@/models/Reserva';

// Función para manejar las solicitudes GET

export async function GET(req: NextRequest) {
  await connectToDatabase();

  try {
    const reservas = await Reserva.find({});
    return NextResponse.json(reservas, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener las reservas' }, { status: 500 });
  }
}

// Función para manejar las solicitudes POST
export async function POST(req: NextRequest) {
  await connectToDatabase();

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
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear la reserva' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  await connectToDatabase();

  try {
    const id = req.nextUrl.searchParams.get('id');
    if (!id || !ObjectId.isValid(id)) {
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

// Función para manejar las solicitudes DELETE
export async function DELETE(req: NextRequest) {
  await connectToDatabase();

  try {
    const id = req.nextUrl.searchParams.get('id');
    if (!id || !ObjectId.isValid(id)) {
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