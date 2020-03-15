# Typescript express learning
This is based on https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407
and this series: https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-2-98c34e3513a2?

This is **paired with frontend**: https://github.com/jamtay/typescript-react-app

## To run
- Install mongo [here](https://github.com/mongodb/homebrew-brew)
- Start mongo: `brew services start mongodb-community@4.2`
- `npm install`
- `Add env file (as below)`
- `npm start`

```bash
alias startMongo='brew services start mongodb-community@4.2'
alias stopMongo='brew services stop mongodb-community@4.2'
alias startMongoFork='mongod --config /usr/local/etc/mongod.conf --fork'
alias stopMongoFork=' pkill -f mongod'
```

To start:  `npm run dev`

### Env file example
```bash
NODE_ENV=production
OPEN_CAGE_DATA_KEY=<KEY_USED_FOR_API_V1_SEARCH_ENDPOINT>
DATABASE_URL=mongodb://localhost:27017/{ENTER_DB_NAME_HERE}
```
