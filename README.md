# learn-liquibase

- Liquibase 4.23.2
- MongoDB 7.0

## Pre-requisite for MongoDB
A database with a user with `dbAdmin` and `readWrite` roles for liquibase to execute commands. 

## Running Liquibase
Example command to run `update` on `mongo-dev` profile.
```
liquibase --defaults-file=mongo-dev.liquibase.properties update
```