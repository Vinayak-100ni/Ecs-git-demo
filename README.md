1. Create ECR (nodejs-app)
2. create ECS cluster (DevCluster)
3. task definition (Task Definition family name:- nodejs-app-task-definition)
   -> create iamrole (ecsTaskExecutionRole, containerService)
   -> name(nodejs-app) and (ECR)repo url
4. Create an service
   -> service name (nodejs-app-service)
5. create github workflow file
   -> all taskdefination(nodejs-app-task-definition) json file in pipeline 

6. if getting issue create service again with same name 






# Nodejs app with rest and graphql example

An example of GraphQL queries/mutations with Node and Express js.

With GraphQL, clients can specify exactly what data they need, and the server responds with only that data, reducing the amount of data transferred over the network.

Rest API Endpoint for get all users: http://localhost:5000/rest/getAllUsers

GraphQL Endpont: http://localhost:5000/graphql

Query for below scenarios: 

1. Get All Users with query operation

query{
  getAllUsers{
    id
    email
  }
}

2. Get single user details

query{
  findUserById(id:1000){
    id
    firstName
    lastName
    email
  }
}

3. Create User with mutation operation

mutation{
  createUser(firstName:"sachin",lastName:"purohit",email:"sachin@sachin.com",password:"password"){
    id
    firstName
    lastName
    email
  }
}

