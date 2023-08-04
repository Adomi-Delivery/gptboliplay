import { pool } from '@/config/db'
import { NextResponse } from 'next/server'


// send order
export async function POST(request: Request) {
    const res = await request.json()
    const {name, cc, address, city, quantity} = res

    const result = await pool.query('INSERT INTO orders SET ?',{name,cc,address,city,quantity,})

    console.log(result)
    return NextResponse.json({ res })
}


// Get orders
export async function GET(request: Request) {

    const result = await pool.query('SELECT * FROM orders')
    
    return NextResponse.json({ result  })

}