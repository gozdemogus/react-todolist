import React from 'react';
import { Formik, Field, Form, useFormik } from "formik";
import validationSchema from './validations';
import { useTodo } from "../../../contexts/TodoContext";


function NewTodoForm() {

    const { addTodo } = useTodo();

    return (
        <Formik
            initialValues={{
                text: ""
            }}
            onSubmit={(values, bag) => {
                console.log("values", values)
                addTodo(values.text);
                bag.resetForm();
            }}
            validationsSchema={validationSchema}
        >
            <Form>
                <Field

                    className="new-todo"
                    placeholder="what needs to be done?"
                    autoFocus
                    id="text"
                    name="text">
                </Field>
            </Form>
        </Formik>
    )
}

export default NewTodoForm