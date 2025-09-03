import React, { useState, useEffect, useCallback, useMemo } from 'react';

const TaskForm = ({ task, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        title: task?.title || '',
        description: task?.description || '',
        status: task?.status || 'pending',
        priority: task?.priority || 'medium',
        dueDate: task?.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <div>
                <label className="block text-gray-700">Status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700">Priority</label>
                <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700">Due Date</label>
                <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="flex justify-end gap-2 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default TaskForm;