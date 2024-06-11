import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const GroupForm = ({ addGroup }) => {
  const initialValues = { name: '', description: '' };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addGroup({ 
      id: Date.now(), 
      name: values.name, 
      description: values.description, 
      createdAt: new Date().toLocaleString() 
    });
    resetForm();
  };

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}>
      <Form>
        <Field name="name" type="text" placeholder="Group Name" className="form-control my-2" />
        <ErrorMessage name="name" component="p" className="text-danger " />
        
        <Field name="description" as="textarea" placeholder="Description" className="form-control my-2"  />
        <ErrorMessage name="description" component="p" className="text-danger"  />
        
        <button className='btn btn-success' type="submit">Add Group</button>
      </Form>
    </Formik>
  );
};

export default GroupForm;
