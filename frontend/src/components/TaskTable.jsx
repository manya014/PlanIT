import React from 'react';
import Countdown from "../components/Conutdown";

const TaskTable = ({ tasks, onEdit, onDelete, onToggle }) => (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md overflow-x-auto">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-7 font-semibold text-gray-600 border-b border-gray-200 pb-2">
            <div className="col-span-2">Title</div>
            <div className="col-span-2">Description</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Due Date</div>
            <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* Table Rows */}
        {tasks.length > 0 ? (
            tasks.map(task => (
                <div key={task._id} className="grid grid-cols-1 sm:grid-cols-7 items-center py-4 border-b border-gray-100 last:border-b-0 gap-2 sm:gap-0">
                    
                    {/* Title */}
                    <div className="font-medium sm:col-span-2">{task.title}</div>

                    {/* Description (hidden on mobile) */}
                    <div className="text-sm text-gray-500 truncate sm:col-span-2 hidden sm:block">{task.description}</div>

                    {/* Status */}
                    <div className="col-span-1">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            task.status === 'completed' ? 'bg-green-100 text-green-800' :
                            task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                            {task.status}
                        </span>
                    </div>

                    {/* Due Date */}
                    <div className="col-span-1">
                        {task.dueDate && <Countdown dueDate={task.dueDate} />}
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 flex justify-start sm:justify-end gap-2">
                        <button
                            onClick={() => onEdit(task)}
                            className="text-purple-600 hover:text-purple-800"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828L10.828 15.657a2 2 0 01-.828.528l-4 1a1 1 0 01-1.218-1.218l1-4a2 2 0 01.528-.828l5.25-5.25zM15 6l2-2" />
                            </svg>
                        </button>
                        <button
                            onClick={() => onDelete(task._id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 2a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 011-1zM5 4a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5zm0 2h10v10H5V6z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <div className="py-6 text-center text-gray-500">No tasks found.</div>
        )}
    </div>
);

export default TaskTable;
