### SAM Properties

---

1. `Transform`: Use to specify the `SAM` version
2. `Mappings`: A literal for mapping keys and associated values, can be later used in parameters, tables lookup or condition
3. `Parameters`: Used to reger values, can be passed during the runtume of the template
4. `Format Version`: The cloudformation template version, to which the SAM template will be transformed

### SAM Resources Types

---

- `AWS::Serverless::Application`: Use to define nested application
- `AWS::Serverless::Function`: Use to define Lambda function
- `AWS::Serverless::LayerVersion`: Use to define Lambda layer version (Runtime/library)
- `AWS::Serverless::API`: Use to define Api Gateway
