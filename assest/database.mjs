import { Database } from '@sqlitecloud/drivers';
const db = new Database('sqlitecloud://cwzsatonnk.sqlite.cloud:8860/todo?apikey=h0nuHhkJpNDOGUOIieKL12iofeLAiuxoKRkCYxCWhFo')
const fetchAlbums = async () => await db.sql`SELECT * FROM users;`;
fetchAlbums().then((users) => console.log(users));