# InsuredMine

1 - Make the database with the name "InsuredMine" with a collection name "users" in MongoDB Compass.

2 - If the DB fails to connect. Comment out/uncomment the line 3 and comment line 4 inside config foulder in the config.js file

3 - For the file upload,  api: url = "http://localhost:8080/fileupload",
    Go to Body, then form-data. Make sure the key is "myfile", select the type as file and upload. Make sure you are uploading the .csv file.

4 - CRUD for Agent 
    GET - "http://localhost:8080/agent/getAgents"
    POST - "http://localhost:8080/agent/addAgents"
            sample payload = {
                agent : "john"
            }
    PATCH - "http://localhost:8080/agent/updateAgent/id", Make the get request and use the _id to make the patch request
    DELETE - "http://localhost:8080/agent/deleteAgent/id" ,  Make the get request and use the _id to make the delete request
    
5 - CRUD for User , User's Account , LOB , Carrier and Policy can be done is the similar way as in step 4.
    The Payload for these operations will be in the Schema folder.
