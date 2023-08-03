import { pool } from "@/config/db";
import { NextResponse } from 'next/server'



export async function GET(request: Request) {
 const res = await request.json();
 const { id } = res;

 const [result] = await pool.query ('SELECT FROM orders WHERE id = ?',[id])
 return NextResponse.json({ result })
}


export async function PUT(request: Request) {
  const res = await request.json();
  const { id, status } = res;

  const result = await pool.query('UPDATE orders SET status = ? WHERE id = ?', [status, id]);

  console.log(result);
  return NextResponse.json({ result })
}