import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { database } from "./database";

async function ReadTasks() {

    try {
        const dbInstance = collection(database, 'tasks');
        const queryData = await getDocs(dbInstance);
        const queryArray = [];
        queryData.forEach((doc) => {
            queryArray.push({id: doc.id, ...doc.data()});
        });
        return queryArray;
    } catch (error) {
        console.log(error)
    }

}

export async function ReadSearches() {
    try {
        const searchInstance = collection(database, 'searches');
        const searchQuery = await getDocs(searchInstance);
        const searchArray = [];
        searchQuery.forEach((doc) => {
            searchArray.push({id: doc.id, ...doc.data()});
        });
        /*const lastSearchQuery = searchArray.slice(-1)[0];
        const searchInput = lastSearchQuery.searchInput;
        const taskInstance = collection(database, 'tasks');
        const taskQuery = query(taskInstance, where('tasks', 'array-contains', searchInput));
        const taskDocs = await getDocs(taskInstance);
        const taskArray = [];
        taskDocs.forEach((task) => {
            taskArray.push({id: task.id, ...task.data()});
        })*/
        return searchArray;
    } catch(error) {
        console.log(error);
    }
}
export default ReadTasks;