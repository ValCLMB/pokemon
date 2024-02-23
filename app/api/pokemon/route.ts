import { pool } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM pokemons ORDER BY id ASC");
    return NextResponse.json(result.rows);
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    client.release();
  }
};

export const POST = async (req: NextRequest) => {
  const client = await pool.connect();
  const res = await req.json();

  try {
    client.query(
      `INSERT INTO pokemons (name, image, type) VALUES ('${res.name}', '${res.image}', '${res.type}')`
    );
    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    client.release();
  }
};
