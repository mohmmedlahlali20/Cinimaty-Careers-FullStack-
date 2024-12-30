'use client';
import React, { useState, useEffect } from 'react';
import FetchUsers from '../users/utils/getAllUsers';

export default function Users() {
  const [usersData, setUsersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await FetchUsers();
        setUsersData(users.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    }

    fetchData();
  }, []);

  const filteredUsers = usersData.filter(user =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border p-2 mr-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user.fullName}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-2 px-4 border-b text-center" colSpan="3">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
