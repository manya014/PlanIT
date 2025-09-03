import React from 'react';
import TaskForm from "./TaskForm";

const TaskModal = ({ isModalOpen, editingTask, closeModal, handleSaveTask }) => (
    isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-overlay flex items-center justify-center p-4 ">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
                <TaskForm
                    task={editingTask}
                    onSave={handleSaveTask}
                    onCancel={closeModal}
                />
            </div>
        </div>
    )
);

export default TaskModal;