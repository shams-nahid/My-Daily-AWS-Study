### DynamoDB Streams

---

We can track the changes of dynamodb using the dynamoDB streams. On create, delete or updated, when the dynamodb streams is being enabled we can run a lambda function and do necessary tasks.

When we use global dynamodb table and data is being replicated between multiple region, the dynamodb streams must be enabled.

`StreamViewType` determines what information are writtne to the stream to this table. `StreamViewTypes` are

1. `KEYS_ONLY`: Only pass the modified key items
2. `NEW_IMAGE`: Pass the new value
3. `OLD_IMAGE`: Pass the existing value
4. `NEW_AND_OLD_IMAGES`: Pass both the new and old values
