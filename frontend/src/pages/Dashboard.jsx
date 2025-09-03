// Dashboard.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Sidebar from "../components/SidePanel";
import Header from "../components/Header";
import TaskFilter from "../components/TaskFilters";
import TaskTable from "../components/TaskTable";
import TaskModal from "../components/TaskModal.jsx";
import { getTasks, createTask, updateTask, deleteTask } from "../lib/api.js";
import SidePanel from '../components/SidePanel';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const filteredTasks = useMemo(() => {
    let result = tasks;
    if (filterStatus) result = result.filter(task => task.status === filterStatus);
    if (filterPriority) result = result.filter(task => task.priority === filterPriority);
    return result;
  }, [tasks, filterStatus, filterPriority]);

  const handleSaveTask = async (taskData) => {
    try {
      if (editingTask) await updateTask(editingTask._id, taskData);
      else await createTask(taskData);
      fetchTasks();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to save task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const openModalForEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const openModalForNew = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const taskCounts = useMemo(() => {
    const counts = { pending: 0, 'in-progress': 0, completed: 0 };
    tasks.forEach(task => {
      if (task.status in counts) counts[task.status] += 1;
    });
    return counts;
  }, [tasks]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-xl font-medium">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar - Stretches to full height */}
      <SidePanel className="h-screen sticky top-0" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-70">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <div className="flex-1 flex flex-col p-4 md:p-8 space-y-6">
          
          {/* Summary Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md flex-1">
              <h3 className="text-gray-600">Pending:</h3>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1 md:mt-2">{taskCounts.pending}</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md flex-1">
              <h3 className="text-gray-600">In-Progress:</h3>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1 md:mt-2">{taskCounts['in-progress']}</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md flex-1">
              <h3 className="text-gray-600">Completed:</h3>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1 md:mt-2">{taskCounts.completed}</p>
            </div>
          </div>

          {/* Filters & Add Button */}
          <TaskFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            filterPriority={filterPriority}
            setFilterPriority={setFilterPriority}
            handleAddTask={openModalForNew}
          />

          {/* Task Table with Scroll */}
          <div className="overflow-y-auto max-h-[500px] border rounded-lg shadow-md">
            <TaskTable
              tasks={filteredTasks}
              onEdit={openModalForEdit}
              onDelete={handleDeleteTask}
            />
          </div>

        </div>
      </div>

      {/* Task Modal */}
      <TaskModal
        isModalOpen={isModalOpen}
        editingTask={editingTask}
        closeModal={closeModal}
        handleSaveTask={handleSaveTask}
      />
    </div>
  );
};

export default Dashboard;