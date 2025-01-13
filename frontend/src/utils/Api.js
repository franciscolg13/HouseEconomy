const API_BASE = 'http://127.0.0.1:8000';

export const addTask = async (task) => {
  const response = await fetch(`${API_BASE}/tasks/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Error al añadir tarea');
  return response.json();
};
