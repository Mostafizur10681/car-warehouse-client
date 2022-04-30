import React from 'react';

const Blogs = () => {
    return (
        <div className='container '>
            <h1 className='my-5 text-uppercase text-success'>Blogs</h1>
            <div>
                <div className='bg-light blog-container mt-5'>
                    <h3 className='pt-2 text-uppercase '> Javascript VS Nodejs</h3>
                    <p className='pb-2'>JavaScript is a scripting language that may be used in web browsers.
                        Node.js, on the other hand, is a JavaScript interpreter or execution environment that includes a large number of necessary libraries and other components.
                        JavaScript is a single defining programming language that can operate in any browser using the default browser environment. It's a powerful language that's typically utilized in a web application for any type of verification or business logic.
                        Node.js also contains a large number of related libraries, which we often utilize in javascript for general-purpose programming.
                        It's a type of interpreter or environment that can represent JavaScript and run any JavaScript program. It primarily assists us in performing non-blocking operations such as retrieving operating system specific information such as certificate or hardware details;
                        we can utilize node js to accomplish this, but JavaScript standard programming will not.
                    </p>
                </div>
                <div className='bg-light blog-container mt-5'>
                    <h3 className=' pt-3 text-uppercase'> Sql VS Nosql </h3>
                    <p className='pb-3'>Relational databases are SQL, while non-relational databases are NoSQL.
                        SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas.
                        SQL databases scale vertically, but NoSQL databases scale horizontally.
                        NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.
                        SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data such as documents and JSON.
                    </p>
                </div>
                <div className='bg-light blog-container my-5'>
                    <h3 className='pt-2  text-uppercase'> What is the purpose of jwt and how does it work?</h3>
                    <p className='pb-2'>JSON Web Token (JWT) is an open standard (RFC 7519) that specifies a compact and self-contained method for securely communicating information as a JSON object between two parties.
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