import { initializeApp } from "firebase/app"; // firebase
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, getFirestore } from "firebase/firestore";
// THIS FILE IS MADE BY:
// Alexander Ziegler, S181100

// this is not a component

// read all: https://youtu.be/2yNyiW_41H8
// read one: https://youtu.be/lZzd8zurolg
// create: https://youtu.be/s1frrNxq4js
// delete: https://youtu.be/s1frrNxq4js
// update: https://youtu.be/Przhgs-GJ2s


// firebase
const keys = require('../firebaseKey.json');
const firebaseConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db)

export async function dbReadAll(tableName){
    // TODO: maybe just load this into the redux store, or return as a list of json objs

    let output = [];
    
    const resultRef = collection(db, tableName);
    const result = await (await getDocs(resultRef)).forEach(item => {
        output.push({id: item.id, ...item.data()})
    })

    //TODO: check if return gets runed, before the get is done
    return output;
}

export async function dbCreateOne(tableName, newData)
{    
    const resultRef = collection(db, tableName);
    const result = await addDoc(resultRef, newData);
}

export async function dbUpdateOne(tableName, itemId, newData)
{
    const resultRef = doc(db, tableName, itemId);
    const result = await updateDoc(resultRef, newData);
    // console.log("ziegler", result);
}

export async function dbDeleteOne(tableName, itemId){
    const resultRef = doc(db, tableName, itemId);
    const result = await deleteDoc(resultRef).then(() => {
        console.log("item was deleted")
    });
    // console.log("ziegler", result);
}