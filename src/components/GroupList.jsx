import React from 'react';
import 'animate.css'
const GroupList = ({ groups, editGroup, deleteGroup, viewPosts }) => (
  <div>
    {groups.map((group) => (
      <div key={group.id} className="group p-3 shadow border-light">
        <div className='d-flex justify-content-between align-items-center p-2'>
        <div>
        <h2 className='animate__animated animate__flash'>{group.name}</h2>
        <p className='animate__animated animate__pulse'>{group.description}</p>
        </div>
        <div>
        <p className='text-info animate__animated animate__shakeY'> {group.createdAt}</p>
        </div>
        </div>
        <button className='btn btn-warning mx-2' onClick={() => editGroup(group)}>Edit</button>
        <button className='btn btn-danger mx-2' onClick={() => deleteGroup(group.id)}>Delete</button>
        {viewPosts && <button className='btn btn-info mx-2' onClick={() => viewPosts(group)}>View Posts</button>}
      </div>
    ))}
  </div>
);

export default GroupList;
