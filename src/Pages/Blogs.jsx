import React from 'react';
import { useNavigate } from 'react-router-dom';


const navigate = useNavigate;
const handlerNav = () => {
    navigate(-1);
};

const Blogs = () => {
    return (
        <>
            <div className='container mx-auto '>

                <div className='p-6'>
                    <h1 className='text-3xl text-center font-semibold'>Frequent Questions !!</h1>
                    <div className='my-10'>
                        <h2 className='text-2xl'>1. Tell us the differences between uncontrolled and controlled components?</h2>
                        <p className='my-2'> <span className='font-semibold underline mr-1'>Ans:</span> In the context of a software application, uncontrolled components and controlled components refer to two different ways of managing user input.

                            Uncontrolled components are form elements (such as text input fields or checkboxes) that manage their own state internally, without any help from the application. The value of an uncontrolled component is determined by the user's input, and the component itself doesn't provide any way for the application to control or manipulate that value. This means that uncontrolled components can be useful for simple forms or user interfaces where the application doesn't need to do much validation or processing of user input.

                            Controlled components, on the other hand, are form elements that are explicitly controlled by the application. This means that the value of a controlled component is set and managed by the application's state, rather than the user's input directly. This allows the application to have more control over the user's input, including validation, formatting, and manipulation of the data. Controlled components can be useful for more complex forms or user interfaces where the application needs to do more processing of user input before using it.

                            In summary, the main difference between uncontrolled and controlled components is that uncontrolled components manage their own state internally, while controlled components are explicitly controlled by the application's state.</p>

                    </div>
                    <div className='my-10'>
                        <h2 className='text-2xl'>2. How to validate React props using PropTypes?</h2>
                        <p className='my-2'> <span className='font-semibold underline mr-1'>Ans:</span> React provides a library called PropTypes that can be used to validate the type and presence of props passed to a component.

                        </p>

                    </div>
                    <div className='my-10'>
                        <h2 className='text-2xl'>3.Tell us the difference between nodejs and express js.?</h2>
                        <p className='my-2'> <span className='font-semibold underline mr-1'>Ans:</span> Node.js and Express.js are both popular technologies used in web development, but they serve different purposes.

                            Node.js is a runtime environment that allows developers to run JavaScript code on the server side. It provides a platform that allows developers to build scalable, high-performance, and efficient network applications. Node.js is built on the Chrome V8 JavaScript engine and provides a number of built-in modules for handling file I/O, networking, and other server-side tasks.

                            Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs quickly and easily. Express.js simplifies the process of building web applications by providing a set of common patterns and practices for handling requests, managing routes, and handling middleware.

                            Here are some of the main differences between Node.js and Express.js:

                            Purpose: Node.js is a runtime environment for executing JavaScript code on the server side, while Express.js is a web framework built on top of Node.js.

                            Features: Node.js provides built-in modules for handling file I/O, networking, and other server-side tasks, while Express.js provides features for handling requests, managing routes, and handling middleware.

                            Abstraction: Node.js provides low-level APIs that allow developers to build complex server-side applications from scratch, while Express.js provides higher-level abstractions that simplify the process of building web applications.

                            In summary, Node.js is a powerful runtime environment for executing JavaScript code on the server side, while Express.js is a web framework built on top of Node.js that provides features and tools for building web applications and APIs quickly and easily.</p>

                    </div>
                    <div className='my-10'>
                        <h2 className='text-2xl'>4.What is a custom hook, and why will you create a custom hook?</h2>
                        <p className='my-2'> <span className='font-semibold underline mr-1'>Ans:</span> In React, a custom hook is a JavaScript function that starts with the prefix use and uses one or more of the built-in React hooks. Custom hooks allow you to extract reusable logic from components and share it across multiple components.

                            Custom hooks can be used to abstract complex logic that is used across multiple components into a single function that can be reused. For example, if you have a component that fetches data from an API and then uses that data to update its state, you can extract the data fetching logic into a custom hook, which can then be reused in other components.</p>

                    </div>
                </div>


                <div className='flex justify-center'>
                    <button className='btn btn-primary text-center my-6' onClick={handlerNav}>Go back</button>

                </div>

            </div>
        </>
    );
};

export default Blogs;