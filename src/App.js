import React, { useState } from 'react';
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';
import GroupEdit from './components/GroupEdit';
import GroupPosts from './components/PostForm';
import './App.css';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [editingGroup, setEditingGroup] = useState(null);
  const [viewingPostsGroup, setViewingPostsGroup] = useState(null);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  const updateGroup = (updatedGroup) => {
    setGroups(groups.map((group) => (group.id === updatedGroup.id ? updatedGroup : group)));
    setEditingGroup(null);
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  const editGroup = (group) => {
    setEditingGroup(group);
  };

  const cancelEdit = () => {
    setEditingGroup(null);
  };

  const viewPosts = (group) => {
    setViewingPostsGroup(group);
  };

  const closePosts = () => {
    setViewingPostsGroup(null);
  };

  return <>
    <section className=" d-flex justify-content-center align-items-center   vh-100" >
    <div className='w-50 bg-light shadow border p-2'>
      <h1 className='text-center'>Group Management</h1>
      {viewingPostsGroup ? (
        <GroupPosts group={viewingPostsGroup} closePosts={closePosts} />
        ) : editingGroup ? (
          <GroupEdit
          currentGroup={editingGroup}
          updateGroup={updateGroup}
          cancelEdit={cancelEdit}
          />
          ) : (
            <GroupForm addGroup={addGroup} />
            )}
      <GroupList
        groups={groups}
        editGroup={editGroup}
        deleteGroup={deleteGroup}
        viewPosts={viewPosts}
        />
    </div>
        </section>
  </>
};

export default App;
