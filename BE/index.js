const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',          
  host: 'localhost',        
  database: 'splitwise',   
  password: 'Admin',  
  port: 5432,                
});


pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
  release(); 
});


process.on('SIGINT', () => {
  pool.end(() => {
    console.log('PostgreSQL pool has ended');
    process.exit(0);
  });
});
