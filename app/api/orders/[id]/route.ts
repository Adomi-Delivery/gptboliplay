import { pool } from "@/config/db";
import { NextResponse } from 'next/server'


// Get order by id
export async function GET(request: Request) {
 try{
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/'); // Dividir el pathname en partes
  const orderId = pathParts[pathParts.length - 1]; // Obtener el último elemento como el orderId
  const [result] = await pool.query ('SELECT * FROM orders WHERE id = ?',[orderId])    
  return NextResponse.json({ result  })
  }catch (error) {
    console.error('Error fetching data:', error);
  }
}




// edit status by id
export async function PUT(request: Request) {
 
  const { id, status } = await request.json();

  const result = await pool.query('UPDATE orders SET status = ? WHERE id = ?', [status, id]);

  console.log(result);
  return NextResponse.json({ result })
}


// delete order by id
export async function DELETE(request: Request) {
  const { id } = await request.json();
  
  const result = await pool.query ('DELETE FROM orders WHERE id = ?',[id])
  
  return NextResponse.json({ result })
}



