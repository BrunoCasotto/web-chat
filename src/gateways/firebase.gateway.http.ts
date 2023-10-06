import { onValue } from 'firebase/database';
import { getDatabase } from "firebase/database";

export const getMessages = () => {
  const database = getDatabase();
  console.log(database)
  console.log(onValue)
}
