## S3 CORS

---

- Consider while using `S3` for `Static Website Hosting`
- To allow cross-region request, we need to `enable CORS` in `S3`
- We can define specific origin or any origin using `*`
- For `AllowMethod`, we can use the followings
  - GET
  - PUT
  - POST
  - DELETE
  - HEAD
- To allow sites, `http` and `https`, we have to put 2 `Allow Origin` URL

### CORS Rules

---

- `AllowedOrigin`: Specify the origins, can make the cross domain request
- `AllowedMethod`: Specify the cross-domain request methods, `GET`, `PUT`, `POST`, `DELETE`, `HEAD`
- `AllowedHeader`: Specify the preflight allowed headers

### CORS Rules Element

- `MaxAgeSeconds`: Amount of time browser cache the response
- `ExposeHeader`: :TODO
