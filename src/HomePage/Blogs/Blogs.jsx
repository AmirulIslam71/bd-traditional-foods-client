import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto p-5 ">
      <p className="text-2xl text-white">
        <span className="border rounded-full p-1 bg-orange-400">1</span>{" "}
        Differences between uncontrolled and controlled components.
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Uncontrolled</th>
              <th>Controlled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                The form data is managed by React and stored in the component's
                state.
              </td>
              <td>The form data is managed by the DOM and read using a ref.</td>
            </tr>
            <tr>
              <td>
                The value of the input is set by the component's state and
                updated by the onChange event.
              </td>
              <td>
                The value of the input is set by the user and read using a ref.
              </td>
            </tr>
            <tr>
              <td>
                Controlled components provide a single source of truth for form
                data, making it easier to manage and validate.
              </td>
              <td>
                Uncontrolled components provide less control over the form data,
                but can be useful in some cases where you don't need to track
                the state of the input field.
              </td>
            </tr>
            <tr>
              <td>
                Controlled components can be more verbose and require more code
                to manage the state.
              </td>
              <td>
                Uncontrolled components are simpler to set up and require less
                code.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-2xl text-white mt-8">
        <span className="border rounded-full p-1 bg-orange-400">2</span> How to
        validate React props using PropTypes.
      </p>
      <p className="text-white p-4">
        <span className="text-lg">Answer :- </span>
        PropTypes is a package that allows you to validate the types of props
        passed to a React component. Here's an example of how to use PropTypes
        to validate props in a functional component :
      </p>
      <div className="text-white">
        <li>Install the prop-types package: 'npm install prop-types'</li>
        <li>
          Import PropTypes at the top of your component: 'import PropTypes from
          'prop-types';'
        </li>
        <li>Define the propTypes for your component.</li>
      </div>
      <p className="text-2xl text-white mt-8">
        <span className="border rounded-full p-1 bg-orange-400">3</span>{" "}
        Difference between nodejs and express js.
      </p>
      <p className="text-white p-4">
        <span className="text-lg">Answer :- </span>
        Here are some key differences between Node.js and Express.js:
      </p>
      <div className="text-white">
        <li>
          Node.js is a runtime environment, while Express.js is a web framework
          built on top of Node.js.
        </li>
        <li>
          Node.js provides basic functionality for building server-side
          applications, while Express.js provides a wide range of features for
          building web applications and APIs, including routing, middleware, and
          template engines.
        </li>
        <li>
          Node.js has a low-level API, while Express.js provides a higher-level
          API that is easier to work with.
        </li>

        <li>
          Node.js can be used to build a wide range of server-side applications,
          while Express.js is primarily used for building web applications and
          APIs.
        </li>
        <li>
          Node.js is written in C and C++, while Express.js is written in
          JavaScript.
        </li>
      </div>
      <p className="text-2xl text-white mt-8">
        <span className="border rounded-full p-1 bg-orange-400">4</span> What is
        a custom hook, and why will you create a custom hook?
      </p>
      <p className="text-white p-4">
        <span className="text-lg">Answer :- </span>
        Custom React JS hooks are reusable functions that a React JS software
        developer can use to add special and unique functionality to the React
        applications. Usually, if there is a requirement to add a feature, one
        can install a third-party library and solve the problem.
      </p>
    </div>
  );
};

export default Blogs;
