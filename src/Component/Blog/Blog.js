import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    
    return (
        <div className='w-2/3 mx-auto'>
            <div className='my-10 p-5 rounded bg-orange-400'>
                <p className='text-3xl font-bold mb-4'>What is the difference between SQL and NoSQL?</p>
                <p>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s
                    particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                    The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL
                    provides, so more complex queries can be difficult to execute.</p>
            </div>
            <div className='my-10 p-5 rounded bg-orange-400'>
                <p className='text-3xl font-bold mb-4'>What is JWT, and how does it work?</p>
                <p>JSON Web Token (JWT) is an open norm (RFC 7519) for safely sending data between parties as JSON object.
                    It is minimized, clear and carefully marked utilizing a confidential key/or a public key pair by the Character Supplier. So the uprightness and validness of the token can be checked by different gatherings included.
                    The motivation behind utilizing JWT isn't to conceal information yet to guarantee the validness of the information. JWT is marked and encoded, not scrambled.
                    JWT is a token based stateless verification component. Since it is a client-side based stateless meeting, server doesn't need to totally depend on a datastore(database) to save meeting data.</p>
            </div>
            <div className='my-10 p-5 rounded bg-orange-400'>
                <p className='text-3xl font-bold mb-4'>What is the difference between javascript and NodeJS?</p>
                <p>JavaScript is a client-side prearranging language that is lightweight, cross-stage,
                    and deciphered. Both Java and HTML incorporate it. Node.js, then again, is a V8-based
                    server-side programming language. JavaScript is a basic programming language that can be utilized with any program that has the JavaScript Motor introduced. Node.js, then again, is a translator or execution climate for the JavaScript programming language. It requires libraries that can be advantageously gotten to from JavaScript programming to be more useful. Any motor might run JavaScript. Therefore, composing JavaScript is staggeringly simple, and any work space is like a total program. Node.js, then again, just empowers the V8 motor. Composed JavaScript code, then again,
                    can run in any specific situation, whether or not the V8 motor is upheld.</p>
            </div>
            <div className='my-10 p-5 rounded bg-orange-400'>
                <p className='text-3xl font-bold mb-4'>How does NodeJS handle multiple requests at the same time?</p>
                <p>NodeJS gets different client demands and places them into EventQueue. NodeJS is worked with the idea of occasion driven engineering. NodeJS has its own EventLoop which is an endless circle that gets demands and cycles them. EventLoop is the audience for the EventQueue.
                    On the off chance that NodeJS can handle the solicitation without I/O hindering then the occasion circle would itself process the solicitation and sends the reaction back to the client without anyone else. Be that as it may, it is feasible to handle different solicitations parallelly utilizing
                    the NodeJS bunch module or laborer strings module.</p>
            </div>
        </div>
    );
};

export default Blog;