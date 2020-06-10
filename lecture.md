## Heroku

1. Pull our code from GH
2. Build.

- release || post build script. Procfile.

3. Run.

## More advanced express techniques.

# Routers:

- Problem: our index.js is going to end up really bloated.
- Separate concerns

# Middlewares:

- something in the middle.

common uses:

- Loggin data or requests
- Some data validation on requests
- Authorization.

Its nothing more than a function that gets the same params as our routes, might do something with the request or some check
and then call next() to get the request to the next in line.

Client ====> request ===> ||| server. 1st it goes through the middlewares until it gets to our route.
