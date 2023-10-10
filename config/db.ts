import { createPool } from 'mysql2/promise';

// llamado para la db
export const pool = createPool({
  host: 'host',
  port: 3300,
  database: 'database',
  user: 'userdatabase',
  password: 'psswdatabase'
});

