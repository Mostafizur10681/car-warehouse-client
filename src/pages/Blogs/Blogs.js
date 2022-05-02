import React from 'react';

const Blogs = () => {
    return (
        <div className='container '>
            <h1 className='mt-5 text-uppercase text-success text-center'>Blogs</h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div>
                <div className='bg-light blog-container py-3 mt-5'>
                    <h3 className='py-2 text-uppercase text-center text-success'> Javascript VS Nodejs</h3>
                    <p className='pb-2 text-center'>JavaScript is a scripting language that may be used in web browsers.
                        Node.js, on the other hand, is a JavaScript interpreter or execution environment that includes a large number of necessary libraries and other components.
                        JavaScript is a single defining programming language that can operate in any browser using the default browser environment. It's a powerful language that's typically utilized in a web application for any type of verification or business logic.
                        Node.js also contains a large number of related libraries, which we often utilize in javascript for general-purpose programming.
                        It's a type of interpreter or environment that can represent JavaScript and run any JavaScript program. It primarily assists us in performing non-blocking operations such as retrieving operating system specific information such as certificate or hardware details;
                        we can utilize node js to accomplish this, but JavaScript standard programming will not.
                    </p>
                </div>
                <div className='bg-light blog-container py-3 mt-5'>
                    <h3 className='py-2 text-uppercase text-center text-success'>  When should you use nodejs and when should you use mongodb</h3>
                    <p className='pb-2 text-center'>Nodejs is a Javascript engine that can be used to create any application (by programming in the Javascript language).
                        It executes Javascript code. It is most typically used to create servers that can answer to web requests, but it may also be used to create a variety of other types of programming.
                        MongoDB is a database management system. MongoDB is a database that is used by code within an application or server to save, query, and update data.
                        Many web servers are developed with Nodejs and then utilize MongoDB to store data.
                    </p>
                </div>
                <div className='bg-light blog-container py-3 mt-5'>
                    <h3 className=' py-3 text-uppercase text-center text-success' > Sql VS Nosql </h3>
                    <p className='pb-3 text-center'>Relational databases are SQL, while non-relational databases are NoSQL.
                        SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas.
                        SQL databases scale vertically, but NoSQL databases scale horizontally.
                        NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.
                        SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data such as documents and JSON.
                    </p>
                </div>
                <div className='bg-light blog-container py-3 my-5'>
                    <h3 className='py-2  text-uppercase text-center text-success'> What is the purpose of jwt and how does it work?</h3>
                    <p className='pb-2 text-center'>JSON Web Token (JWT) is an open standard (RFC 7519) that specifies a compact and self-contained method for securely communicating information as a JSON object between two parties.
                        Because it is digitally signed, this information can be checked and trusted. JWTs can be signed using a secret (using the HMAC algorithm) or with an RSA or ECDSA public/private key combination.
                        Although JWTs can be encrypted to guarantee party-to-party confidentiality, we will concentrate on signed tokens. Signed tokens can be used to validate the validity of the claims they contain,
                        whilst encrypted tokens keep those claims hidden from third parties. When public/private key pairings are used to sign tokens, the signature additionally verifies that only the party with the private key signed it.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;