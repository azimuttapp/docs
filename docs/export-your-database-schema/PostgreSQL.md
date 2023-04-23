---
sidebar_position: 1
---

```
# https://www.postgresql.org/docs/current/app-pgdump.html
pg_dump --dbname=postgres://postgres:postgres@localhost:5432/my_db --table='public.*' --schema-only > my_db-$(date +%d-%m-%y).sql
```

TODO
