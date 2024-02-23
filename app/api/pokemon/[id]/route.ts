import { pool } from "@/app/lib/data";
import { Pokemon } from "@/app/page";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: number;
  };
};

export const GET = async (req: NextRequest, { params }: Params) => {
  const client = await pool.connect();

  try {
    const result = await client.query(
      `SELECT * FROM pokemons WHERE id=${params.id}`
    );
    const data: Pokemon = result.rows[0];
    return NextResponse.json({ ...data, status: 200 });
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    client.release();
  }
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  const client = await pool.connect();
  const res = await req.json();

  try {
    client.query(
      `UPDATE pokemons SET name='${res.name}', image='${res.image}', type='${res.type}' WHERE id=${params.id}`
    );

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    client.release();
  }
};

export const DELETE = async (req: NextRequest, { params }: Params) => {
  const client = await pool.connect();
  try {
    client.query(`DELETE FROM pokemons WHERE id=${params.id}`);

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    client.release();
  }
};
