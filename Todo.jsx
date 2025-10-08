// import React, { useState, useEffect } from "react";

// export default function Todo() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   // Save tasks to localStorage (so tasks persist after refresh)
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (savedTasks) {
//       setTasks(savedTasks);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Add or Update Task
//   const handleAddTask = () => {
//     if (!task.trim()) return;

//     if (editIndex !== null) {
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex].text = task;
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       setTasks([...tasks, { text: task, completed: false }]);
//     }
//     setTask("");
//   };

//   // Toggle Complete
//   const toggleComplete = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   // Delete Task
//   const handleDelete = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   // Edit Task
//   const handleEdit = (index) => {
//     setTask(tasks[index].text);
//     setEditIndex(index);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-4">✅ Todo List</h1>

//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             className="border rounded-lg px-3 py-2 flex-1"
//             placeholder="Enter a task..."
//           />
//           <button
//             onClick={handleAddTask}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//           >
//             {editIndex !== null ? "Update" : "Add"}
//           </button>
//         </div>

//         <ul>
//           {tasks.map((t, index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mb-2"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={t.completed}
//                   onChange={() => toggleComplete(index)}
//                 />
//                 <span
//                   className={`${
//                     t.completed ? "line-through text-gray-500" : ""
//                   }`}
//                 >
//                   {t.text}
//                 </span>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="text-sm text-yellow-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="text-sm text-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }