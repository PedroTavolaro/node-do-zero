import { sql } from './db.js'
/*
sql`DROP TABLE IF EXISTS videos;`.then(() => {
    console.log("tabela apagada")
})

*/

sql`
    CREATE TABLE Videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER     
    );
`.then(() => {
    console.log("Tabela criada!")
})
