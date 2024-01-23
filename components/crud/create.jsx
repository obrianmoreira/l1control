import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "./database";

async function CreateTasks(taskResquest, taskResquester, taskDate, taskTime, taskExecutor, taskStatus) {
    try {
        const dbInstance = collection(database, 'tasks');
        await setDoc(doc(dbInstance), {
            task : {
                taskResquest,
                taskResquester,
                taskDate,
                taskTime,
                taskExecutor,
                taskStatus,
            }
        }).then(() => {
            console.log('data sent');
        });
    } catch(error){
        console.log(error)
    }
}

export default CreateTasks;