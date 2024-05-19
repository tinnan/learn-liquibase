# learn-liquibase

- Liquibase 4.23.2
- MongoDB 7.0

## Pre-requisite for MongoDB
A database with a user with `dbAdmin` and `readWrite` roles for liquibase to execute commands. 

## Running Liquibase
Example command to `update` on `mongo-dev` profile.
```
liquibase update --defaults-file=mongo-dev.liquibase.properties
```
Example command to `rollback` with `tag` on `mongo-dev` profile.
```
liquibase rollback --tag=<my tag> --defaults-file=mongo-dev.liquibase.properties
```
