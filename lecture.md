## Many to many

1. generate join table model. DONE with attributes id1 and id2 (1 and 2 being different entitites.)
2. Add references to join table attributes in migration. and run migration to create table.
3. connect models. 2 sets of connections: 1. join table with entities, 2. entities amongst themselves.
4. Seed and query to try out!

## REST

REpresentational State Transfer.
It's a architectural standard/style on how to build APIs. (Application Program Interface).

Three core concepts of REST:

- Operations come as HTTP methods
- Respond with appropiate status codes
- clean and meaningful URLs

1. Operations come as HTTP methods.
   CRUD => Create, Read, Update, Delete.

HTTP Methods: GET (Read), POST (Create), PUT+PATCH (Update), DELETE (delete)

PUT: you send the whole updated object to the API
PATCH: you just send the arguments to update

2. Respond with appropiate status codes:
   200... everything good!
   300... go away.
   400... you screwed up! 401 - unauthorized 400 badRequst
   500... I screwed up!

3. Clean and meaningful urls:

GET `/users` => get all users
POST `/users` => create a user
...

`/sendEmail` => RPC (remote procedure call).

Routes are defined of:

1. endpoint
2. HTTP method.
