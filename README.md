# nodejs-express-mvc

### Development setup

#### Node.js version

Use latest Node.js v8.8.x for best compatibility with the live server. This node.js version comes with NPM v5.4.x.

Download on Node.js previous releases page: https://nodejs.org/en/download/releases/

#### .env

Create a `.env` file to be loaded by `dotenv` if `NODE_ENV=development` declared globally (usually `.zshrc` or `.bashrc`) or provided when starting the node server eg. `NODE_ENV=development node server`.


# Databases


dialect=<mysql>
user=<username>
password=<password>
database=<databasename>

```
