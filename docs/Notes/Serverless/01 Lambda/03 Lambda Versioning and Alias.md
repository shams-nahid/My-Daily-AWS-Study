### Versioning

---

Everytime we make a update to the code/configuration of a lambda function, a new version of the lambda function created. When we invoke the function, it usually invoke the latest version of the function, Although we can invoke any previous/specific version of the lambda function. Each version of the lambda function will have their own AWS ARN.

### Alias

---

When we want to point a specific version of a lambda fuction, we can make use of the Alias. Alias can be dev, test, prod, rc etc. By these alias, we can also implement the blue green deployment. Like an alias can send traffic to both the test and prod with specific percentage or weight.

### Gotcha

---

> Alias can only point to different version/versions of lambda function. It can not point to another alias.

> `$latest` version is mutable, it always point to the updated version of the lambda function. Other versions are immutable.

> If we update any code/configuration, the lambda function versions will be updated.
