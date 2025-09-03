import React from 'react';

const TaskFilter = ({ filterStatus, setFilterStatus, filterPriority, setFilterPriority, handleAddTask }) => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <select
                className="p-3 border border-gray-300 rounded-xl bg-white w-full sm:w-auto"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
            >
                <option value="">Filter by Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
            </select>
            <select
                className="p-3 border border-gray-300 rounded-xl bg-white w-full sm:w-auto"
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
            >
                <option value="">Filter by Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>

        {/* Add Task Button */}
        <button
            onClick={handleAddTask}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition-colors w-full sm:w-auto"
        >
            + Add Task
        </button>
    </div>
);

export default TaskFilter;
