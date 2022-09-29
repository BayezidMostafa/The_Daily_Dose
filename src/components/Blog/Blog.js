import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <p className='blogHeading'>Question And Answer Section(Q&A)</p>
            <div className='all-question-answer-container'>
                <div className='question-answer-container'>
                    <p className='question'>How does React work?</p>
                    <p className='answer'>React is a declarative, efficient, and flexible JavaScript library(not framework) for building user interfaces. It lets us compose complex UI from small pieces of code called component. We can use React to Build single page application(SPA), and mobile apps, or build complex apps. 6 useful features of react is- 1: JSX, 2: Components, 3: One-way data binding, 4: Virtual DOM, 5: Simplicity, 6: Performance</p>
                </div>
                <div className='question-answer-container'>
                    <p className='question'>What is the difference between props and state?</p>
                    <p className='answer'>state is a mutable(can be modified) but props immutable(can not be modified).
                        In state, data can be passed from one component to another component, but in props data can be passed within the component only.
                        Props are read only, can not writable. state is both, read and writable.
                        Props can be accessed by the child component but, State cannot be accessed by child components.</p>
                </div>
                <div className='question-answer-container'>
                    <p className='question'>The usage of useEffect</p>
                    <p className='answer'>The use of useEffect: use Effect use for side effects like, manipulating DOM directly, using timer functions like setTimeout().
                        Dependencies argument: Dependencies argument of use Effect let's us control when the side effect run.
                        Side effect cleanup: Some side effects need cleanup like close a socket, clear timers. If the callback of use Effect returns a function, the useEffect() consider this is an effect cleanup.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;