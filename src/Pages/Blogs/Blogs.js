import React from 'react';

const Blogs = () => {
    return (
        <div>
            <li><h1>
                Whenever we create a rendered component, React creates a virtual DOM
                for and its element tree in the component. Now, whenever the state
                of the component there changes, by the time React recreates the
                virtual DOM tree and compares the result with the previous render.
                It then only updates the changed element in the actual DOM. This
                process is called diffing. React uses the concept of a virtual DOM
                to minimize the performance cost of the re-rendering a webpage
                because the actual DOM is expensive to manipulate. This is great
                because it speeds up the UI render time. However, this concept can
                also slow down a complex app if it’s not managed very well.
            </h1></li>
            <li> <h1>The Four Kinds of React State to Manage When we talk about state in
                our applications, it’s important to be clear about what types of
                state actually matter. There are four main types of state you need
                to properly manage in your React apps: <br />
                1. Local state
                <br />
                2. Global state
                <br />
                3. Server state
                <br />
                4. URL state</h1></li>
            <li>  <h1>The Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an object
                can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object. getPrototypeOf and Object.</h1></li>
            <li>          <h1>First of all I need to fetch the data from server or json file.
                After fetching the data I should map them. If I map a thing, it will
                give me all the data. So I can easily get them at my own. For making
                it a little easier we can destructure them. Beside that, we can use
                axios. Nonetheless If I need to reuse it, I can make a custom hook
                to make it reusable for me. So, basically this is how it works
                actually from my point of view and learning throughout the time.</h1></li>
            <li>  <h1>
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be more
                difficult to find in later testing stages.</h1></li>

        </div>
    );
};

export default Blogs;