### To run locally

```
docker build -t jcp_web:v1 .
docker run -d -p 9876:80 jcp_web:v1
```

Then navigate to http://localhost:9876