"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Create() {
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [date, setDate] = useState('');
  const router = useRouter();

  const handleSubmit = (e : any) => {
    e.preventDefault();

    // Here you would typically send the data to your server
    console.log({ name, project, date });

    // Redirect to the home page (or wherever you want)
    router.push('/contributions');
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Project</span>
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
      </form>
    </div>
  );
}
