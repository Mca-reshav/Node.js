/*
Node JS:

It is not a programming language, this is a server/runtime environment. It runs the javascript on the server. Node Js can connect with database. Code and syntax is very similar to javascript, but not exactly the same. Node Js is free and open source, it use chrome V8 engine to execute code.

Node Js mostly used for API, so we can connect the same database with web app and mobile app.
History: first release  in May 27 2009
         current version
         written in C, C++ and javascript

Node Js uses js internally

            Chrome                              Node
    result /\   \/ Js code              Js code \/  /\ result
            V8 engine  ------- C++ --------  V8 engine

Client machine interact with server one by using API(application programming interface) for making request and getting response from server.

Install and setup: Download Node js from official website
                   Install npm(node package manager) and node
                   code editor (Vscode)

run cmd: node -v
         npm -v
         node
Two ways to use node: script with command line  less use        no option to save
                      make folder and file      more use

whenever we run a code of console log we see undefined result, this is because of it is not returning something but it just printing

create a new folder >> cmd >> code. >> work on vs code >> new file >> index.js
>> new terminal >> node .\index.js 

Node Js is async and single-threaded
Normal flow             Node flow
1               |    1 Run script 1
2               |    2 Run script 2
3               |       -----
..                      -----
                        So it will not wait to finish
                     3 Run script 3   
*/