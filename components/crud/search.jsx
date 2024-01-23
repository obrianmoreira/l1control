import { useSelector } from "react-redux";
import { database } from "./database";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";

async function SearchTasks() {
    try {
        const docRef = collection(database, 'searchs');
        const querySnapshot = await getDocs(docRef);
        const tasks = [];
        querySnapshot.forEach((doc) => {
            tasks.push({id: doc.id, ...doc.data()})
        })
        console.log('correctly returned');
        return tasks;
    } catch (error){
        console.log(error);
    }
}

export async function CreateSearch(searchInput){
    try {
        const docRef = collection(database, 'searches');
        await setDoc(doc(docRef), {
            searchInput,
        }).then(() => {
            console.log('data sent');
        })
    } catch(error) {
        console.log(error)
    }
}

export default SearchTasks;