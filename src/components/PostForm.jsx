import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'animate.css'

const GroupPosts = ({ group, closePosts }) => {
  const [posts, setPosts] = useState([]);
  
  const addPost = (values, { resetForm }) => {
    setPosts([...posts, { id: Date.now(), title: values.title, content: values.content }]);
    resetForm();
  };

  return (
    <div className='p-2 '>
      <h2 className='text-primary'>Posts in {group.name}</h2>
      <Formik
        initialValues={{ title: '', content: '' }}
        validationSchema={Yup.object({
          title: Yup.string().required('Required'),
          content: Yup.string().required('Required'),
        })}
        onSubmit={addPost}
      >
        <Form>
          <Field name="title" type="text" placeholder="Title" className="form-control my-2 animate__animated animate__jello" />
          <ErrorMessage name="title" component="p" className="text-danger text-left" />
          
          <Field name="content" as="textarea" placeholder="Content" className="form-control my-2 animate__animated animate__jello"  />
          <ErrorMessage name="content" component="p" className="text-danger text-left" />
          
          <button className='btn btn-success mx-2'  type="submit">Add Post</button>
      <button className='btn btn-danger mx-2' onClick={closePosts}>Close</button>
        </Form>
      </Formik>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupPosts;
