import { doc, deleteDoc } from "firebase/firestore";
import { database } from "./database";
async function DeleteTasks(ids){
    try {
        for(const id of ids){
            const docRef = doc(database, 'tasks', id);
            await deleteDoc(docRef).then(() => {
                console.log('correctly deleted')
            });
        }
    } catch(error) {
        console.log(error)
    }
}

export default DeleteTasks;