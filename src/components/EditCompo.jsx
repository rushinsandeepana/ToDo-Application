import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditCompo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({ title: '', description: '' });

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoToEdit = todos.find(item => item.id === parseInt(id));
    if (todoToEdit) {
      setTodo(todoToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = todos.map(item => item.id === parseInt(id) ? todo : item);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    navigate('/');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center pt-8 px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mt-6 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Edit Todo
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={todo.title}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Edit your title"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={todo.description}
                  onChange={handleChange}
                  placeholder="Edit your description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="ml-3 text-sm">
                    <button
                      type="submit"
                      className="text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 w-32"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCompo;
