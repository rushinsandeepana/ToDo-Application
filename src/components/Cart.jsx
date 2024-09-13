import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [todos, setTodos] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('completed');
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this todo?");
    if (isConfirmed) {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    }
  };

  const handleStatusChange = (id) => {
    setSelectedTodoId(id);
  };

  const handleStatusUpdate = () => {
    if (selectedTodoId !== null) {
      const updatedTodos = todos.map(todo => {
        if (todo.id === selectedTodoId) {
          return { ...todo, status: selectedStatus };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      setSelectedTodoId(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(); 
    const formattedTime = date.toLocaleTimeString(); 
    return { formattedDate, formattedTime };
  };

  return (
    <div className="py-16">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 overflow-y-auto">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3 pl-10 pr-10">
          {todos.map(todo => {
            const { formattedDate, formattedTime } = formatDate(todo.createdAt);
            const statusColor = todo.status === 'completed' ? 'bg-green-200' : todo.status === 'uncompleted' ? 'bg-red-200' : 'bg-gray-200';
            return (
              <div key={todo.id} className={`rounded-2xl shadow-xl px-8 py-4 sm:px-12 lg:px-8 ${statusColor}`}>
                <div className="mb-12 space-y-4">
                  <p className="text-sm text-gray-600 font-bold">This todo was added on {formattedDate} at {formattedTime}</p>
                  <h3 className="text-2xl font-semibold text-purple-900">{todo.title}</h3>
                  <p className="mb-6">{todo.description}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEditClick(todo.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(todo.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => handleStatusChange(todo.id)}
                      className="text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      Change Status
                    </button>
                    {todo.status && (
                      <p className={`mt-2 font-bold ${todo.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
                        Status: ToDo is {todo.status === 'completed' ? 'completed' : 'not completed'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedTodoId !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Change Status</h2>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded-lg"
            >
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleStatusUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => setSelectedTodoId(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
