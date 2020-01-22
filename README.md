
# Todo-api


### GET ALL TODO
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET "http://localhost:1337/todo

### POST TODO
curl -H "Content-Type: application/json" -X POST -d '{"title":"walking with boobik"}' http://localhost:1337/todo

### UPDATE TODO
curl -X PUT -H "Content-Type: application/json" -d '{"title":"take boobik"}' "http://localhost:1337/todo/5e272f50fb4c8a217016ca5a"

### GET TODO BY ID
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET "http://localhost:1337/todo/5e272f50fb4c8a217016ca5a"

### DELETE TODO BY ID
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X DELETE "http://localhost:1337/todo/5e272f50fb4c8a217016ca5a"


