import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('data saved to db', result.value);
};

// logic for a method that gets all the content from the database
export const getDb = async () => {
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  result
    ? console.log('data retrieved from db', result.value)
    : console.log('data not found in db');
  return result?.value;
};

initdb();
