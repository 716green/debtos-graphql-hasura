# DebtOS GraphQL - Hasura MySQL

[Hasura Docs - MySQL Setup](https://hasura.io/docs/1.0/graphql/core/guides/mysql-preview.html)

## Steps

1. Get the MySQL docker compose file
2. Change the variables on the ```docker-compose.yaml``` file in VS Code
3. Open Powershell and Docker Client
4. (Re)start docker container
5. Go to GraphiQL interface at ```http://localhost:{PORT FROM YAML FILE}/console```
6. Run Query
7. This will automatically read the ```.env``` file

---

## 1 - docker-compose.yaml

```bash
# in a new directory run
wget https://raw.githubusercontent.com/hasura/graphql-engine/master/install-manifests/docker-compose-mysql-preview/docker-compose.yaml

# or run *THIS ONE*
curl https://raw.githubusercontent.com/hasura/graphql-engine/master/install-manifests/docker-compose-mysql-preview/docker-compose.yaml -o docker-compose.yaml
```

## 2 - docker-compos YAML file with ENV Vars

```yaml
version: '3.6'
services:
  postgres:
    image: postgres:12
    restart: always
    volumes:
    - db_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: postgrespassword
  graphql-engine:
    image: hasura/graphql-engine:pull5655-633f084f
    ports:
    - "8080:8080"
    depends_on:
    - "postgres"
    command:
    - graphql-engine
    - --mysql-host 
    - ${SERVER}
    - --mysql-user 
    - ${USER}
    - --mysql-port
    - ${PORT}
    - --mysql-dbname 
    - ${SCHEMA}
    - --mysql-password 
    - ${PASSWORD}
    - serve 
    restart: always
    environment:
      HASURA_GRAPHQL_DATABASE_URL: postgres://postgres:postgrespassword@postgres:5432/postgres
      ## enable the console served by server
      HASURA_GRAPHQL_ENABLE_CONSOLE: "true" # set to "false" to disable console
      ## enable debugging mode. It is recommended to disable this in production
      HASURA_GRAPHQL_DEV_MODE: "true"
      HASURA_GRAPHQL_ENABLED_LOG_TYPES: startup, http-log, webhook-log, websocket-log, query-log
      ## uncomment next line to set an admin secret
      # HASURA_GRAPHQL_ADMIN_SECRET: myadminsecretkey
volumes:
  db_data:

```

## 3 & 4 - Start Docker Using Powershell

```bash
docker-compose up -d
```

## End Container

```bash
docker-compose down -d
```

```GRAPHIQL```

```js
// Example Query
query GetAccounts {
  debtportfolio_dbase(limit: 10) {
    firstname
    lastname
    originalcreditor
    currentbalance
  }
}
