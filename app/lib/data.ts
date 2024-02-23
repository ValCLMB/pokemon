import { Pool } from "pg";
import { Pokemon } from "../page";

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
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
