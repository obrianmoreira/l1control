import CreateTasks from "@/components/crud/create";
import DeleteTasks from "@/components/crud/delete";
import ReadTasks from "@/components/crud/read";
import { redirect } from "next/navigation";

export async function POST(request) {

    const data = await request.json();
    const {tasks} = data;
    const taskRequest = tasks.taskRequest;
    const taskRequester = tasks.taskRequester;
    const taskDate = tasks.taskDate;
    const taskTime = tasks.taskTime;
    const taskStatus = tasks.taskStatus;
    const taskExecutor = tasks.taskExecutor;
    CreateTasks(taskRequest, taskRequester, taskDate, taskTime, taskStatus, taskExecutor);
    console.log(taskRequest, taskRequester, taskDate, taskTime, taskStatus, taskExecutor);
    return Response.json('Correctly Done');

}

export async function GET() {
    const query = await ReadTasks();
    return Response.json(query);
}

export async function DELETE(request) {
    const data = await request.json();
    const dataId = data.taskId;
    DeleteTasks(dataId);
    return Response.json('correctly done')
}