### Lambda Best Practices

---

- Separate the lambda handler from the core logic (Handler should be used as the entry point)
- Use execution context to improve performance
- Use env variables to pass operational parameters to lambda function
- Avoid using the recursive code
- Control the dependencies in functions deployment packages (Can be put them in the lambda layer)
- Minimize deployment packages
  - Example is, selectively include the libraries that are required
- For error like `ServiceException` use retry with `ErrorEquals` string to match the error
