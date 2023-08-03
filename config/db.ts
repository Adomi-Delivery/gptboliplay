import { createPool } from 'mysql2/promise';

// llamado para la db
const pool = createPool({
  host: '127.0.0.1',
  port: 3307,
  database: 'dbnext',
  user: 'root',
  password: 'laravel'
});

export { pool };

