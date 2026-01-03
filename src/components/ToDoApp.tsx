import { useCallback, useState } from "react";

type TaskType = {
    name: string,
    complete: boolean,
    id: number
}

export const ToDoApp = () => {
    const initTask: TaskType[] = [{ id: 1, name: 'Task 1', complete: true }]
    const [taskList, setTaskList] = useState<TaskType[]>(initTask);
    const [task, setTask] = useState<string>("");

    const addTask = useCallback(() => {
        setTaskList(prev => [...prev, { name: task, complete: false, id: Date.now() }])
        console.log(taskList)
    }, [task])

    const removeTask = (id: number) => {
        setTaskList(prev => {
            const modList = prev.filter(el => el.id !== id)
            return modList
        })
    }
    return (<>
        <h1 className="p-4 bg-blue-500 text-white">Hello World</h1>
        <label>Task Name:</label>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={() => addTask()}>Add Task</button>
        <hr />
        <ul>{taskList.map((el: any) => {
            return (<li>{el.name} {el.complete} <button onClick={() => removeTask(el.id)}>X</button>
            </li>)
        })}</ul>
    </>)
}