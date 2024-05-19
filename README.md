# learn-liquibase

- Liquibase 4.23.2
- MongoDB 7.0
___
## MongoDB
### Pre-requisite for MongoDB
A database with a user with `dbAdmin` and `readWrite` roles for liquibase to execute commands. 

### Update
Command to `update` on `mongo-dev` profile.
```
liquibase update --defaults-file=mongo-dev.liquibase.properties
```
### Rollback
Command to `rollback` with `tag` on `mongo-dev` profile.
```
liquibase rollback --tag=<my tag> --defaults-file=mongo-dev.liquibase.properties
```
From the example, input tag `update_0000` to rollback all changes made to the database.
___