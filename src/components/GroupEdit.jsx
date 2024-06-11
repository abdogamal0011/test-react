import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'animate.css'

const GroupEdit = ({ currentGroup, updateGroup, cancelEdit }) => {
  const initialValues = { name: currentGroup.name,
     description: currentGroup.description };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    updateGroup({ ...currentGroup, name: values.name, description: values.description });
  };

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}>
      <Form>
        <Field name="name" type="text" placeholder="Group Name" className="form-control my-2 animate__animated animate__jello" />
        <ErrorMessage name="name" component="p" className="text-danger" />
        
        <Field name="description" as="textarea" placeholder="Description" className="form-control my-2 animate__animated animate__jello" />
        <ErrorMessage name="description" component="p" className="text-danger" />
        
        <button className='btn btn-success mx-2' type="submit">Update Group</button>
        <button className='btn btn-danger mx-2' type="button" onClick={cancelEdit}>Cancel</button>
      </Form>
    </Formik>
  );
};

export default GroupEdit;
