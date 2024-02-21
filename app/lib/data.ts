import { Pool } from "pg";
import { Pokemon } from "../page";

export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  port: 5432,
});

export const getPokemons = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM pokemons ORDER BY id ASC");
    const data: Pokemon[] = result.rows;
    return data;
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    client.release();
  }
};

export const getPokemon = async (id: number) => {
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT * FROM pokemons WHERE id=${id}`);
    const data: Pokemon = result.rows[0];
    return data;
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    client.release();
  }
};
