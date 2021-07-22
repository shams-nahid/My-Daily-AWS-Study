### Performance

---

**Memory**

Lambda memory start from 128MB and then 64MB of increments.

**CPU**

The more memory we add to the lambda function, the more CPU we will get. At 1792MB ram, we will get a full CPU. After memory of 1792, we will have more than 1 CPU, and to utilize the CPU, we should make use of the multi-threading.

> For CPU bound application, we need to increase RAM.

**Execution Context**

Execution context is the application run time used to maintain for a small amout of time. If we define some task outside of the function, like db connection, sdk client initialization etc, these will be persisted and can be used in other functions. We can store some files in `/tmp` directory and these will be available in the execution context. Maximum size of the `/tmp` directory will be 512 MB.