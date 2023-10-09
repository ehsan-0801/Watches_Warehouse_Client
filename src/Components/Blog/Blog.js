import React from 'react';
import { Table } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';

const Blog = () => {
    return (
        <div className="bg-custom" >
            <PageTitle title="Blog"></PageTitle>
            <h1 className="text-primary">Question and Answers</h1>
            <div className="container p-2">
                <h2>Difference between javascript and nodejs</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>JavaScript</th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a web scripting language. </td>
                            <td>NodeJS is a runtime environment for Javascript.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript is only available in browsers.</td>
                            <td>With the help of NodeJS, we can execute Javascript outside of the browser.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Javascript has the ability to add HTML and manipulate the DOM.</td>
                            <td>Nodejs does not support the addition of HTML tags.</td>
                        </tr>
                    </tbody>
                </Table>
                <h2> When should you use nodejs and when should you use mongodb?</h2>
                <p>
                    Nodejs is a Javascript engine that can be used to create any application. It executes Javascript code. It is most typically used to create web servers, but it may also be used to create a variety of other sorts of programming.
                    <br />
                    MongoDB is a database management system. MongoDB is used by code within an application or server to save, query, and update data in a database. Many web servers developed with Node.js will store data in MongoDB.
                </p>
                <h2> Differences between sql and nosql databases.?</h2>
                <ol>
                    <li>Relational databases are SQL, while non-relational databases are NoSQL.</li>
                    <li>SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas.</li>
                    <li>SQL databases scale vertically, but NoSQL databases scale horizontally.</li>
                    <li>NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.</li>
                    <li>SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.</li>
                </ol>
                <h2>What is the purpose of jwt and how does it work?</h2>
                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that specifies a compact and self-contained method for securely communicating information as a JSON object between parties. Because it is digitally signed, this information can be checked and trusted. JWTs can be signed using a secret (using the HMAC technique) or with an RSA or ECDSA public/private key combination.
                    Although JWTs can be encrypted to offer further privacy between parties, we will concentrate on signed tokens. Signed tokens can be used to verify the validity of the claims they contain, whilst encrypted tokens keep such claims hidden from third parties. When public/private key pairings are used to sign tokens, the signature additionally verifies that only the person with the private key signed it.
                </p>
            </div>
        </div>
    );
};

export default Blog;