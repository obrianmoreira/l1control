import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "./database";

async function CreateTasks(taskRequest, taskRequester, taskDate, taskTime, taskExecutor, taskStatus) {
    try {
        const dbInstance = collection(database, 'tasks');
        await setDoc(doc(dbInstance), {
            task : {
                taskRequest: taskRequest,
                taskRequester: taskRequester,
                taskDate: taskDate,
                taskTime: taskTime,
                taskExecutor: taskExecutor,
                taskStatus: taskStatus,
            }
        }).then(() => {
            console.log('data sent');
        });
    } catch(error){
        console.log(error)
    }
}

export default CreateTasks;