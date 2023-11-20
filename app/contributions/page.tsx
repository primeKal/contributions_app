"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Contributions() {
  const [data, setData] = useState([
    { name: 'Project 1', project: 'Project 1', date: '2022-01-01' },
    { name: 'Project 2', project: 'Project 2', date: '2022-01-02' },
    { name: 'Project 3', project: 'Project 3', date: '2022-01-03' },
    { name: 'Project 1', project: 'Project 1', date: '2022-01-01' },
    { name: 'Project 2', project: 'Project 2', date: '2022-01-02' },
    { name: 'Project 3', project: 'Project 3', date: '2022-01-03' },
  ]);
  const router = useRouter();

  const handleAddNew = () => {
    // Handle adding new data here
    router.push("/contributions/new");
  };

  const handleOpen = (item : any) => {
    // Handle opening item here
    router.push("/contributions/new")
  };

  const handleDelete = (item : any) => {
    // Handle deleting item here
  };

  return (
    <div className="container mx-auto px-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mt-2" onClick={handleAddNew}>Add New</button>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" placeholder="Search..." />
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Project</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.project}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleOpen(item)}>Open</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
