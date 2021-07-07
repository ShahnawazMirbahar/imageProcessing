Image Processing API
To run the application first install node js on the local machine.
Then install npm in the terminal then install express,Typescript,Eslint,Prettier,Sharp on the terminal.
For running the project Build the project by running "npm run tsc" to transform build code into JavaScript code. 
Then after run "npm start" to run the server.
On the Local browser type http://localhost:200/?name=imagename.jpg&format=desired format&width=desired width&height=desired height and enter to resize the image.
*****
Dependencies that has been use in the project are
Express,nodemon,request,sharp,typescript,eslint,jasmine,prettier,supertest
Install node js in the local machine.
*****
run npm i express --save in the terminal.
run npm i typescript -- save in the terminal.
run npm i eslint --save-dev
run npm i prettier --save-dev
run npm i sharp --save
after installing these packages dev environment will be ready for the porject
*****
run npm i jasmine --save-dev in the terminal
run npm i supertest --save-dev in the terminal

Then type "test-init": "node ./node_modules/jasmine/bin/jasmine.js init" in the "scripts" field of  package.json
after that type "test": "node ./node_modules/jasmine/bin/jasmine.js" in the "scripts" field of  package.json

Then make a testing script in the spec folder and run "npm run test"
**********
For the first test  it takes in if the server runs and returns status of 200
After that for the second test if there is any image in the servers home.As there is not any  image it wil return 'Image does not Exist'.
For the third test it takes an image and parameter and returns status of 200
And for the fourth test it looks in to pages body and finds a encoded string for the image.
********

This project takes in the image name and takes in parameter and resize the image and stores it in the local drive.And shows it on the client side.
After repeated request of the same Image with same parameters it shows the stored images rather than creating a new image everytime.
If there is not any image that is stored in the server will show error. Also if there is any error in the processing the image it will show the error rather than crashing the server.
There is not any error while building the project.Eslint and prettier works without any problem also.
All the src codes are written in TypeScript.





