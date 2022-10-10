import Dexie from "dexie";

export const db = new Dexie("todo-app")

db.version(1).stores({
    todos: "++id,text"
})
