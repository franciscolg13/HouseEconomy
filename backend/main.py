from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Datos en memoria
tasks = []

# Modelo para las tareas
class Task(BaseModel):
    title: str
    description: str

@app.post("/tasks/")
def add_task(task: Task):
    tasks.append(task)
    return {"message": "Tarea añadida correctamente", "task": task}

@app.get("/tasks/", response_model=List[Task])
def get_tasks():
    return tasks
