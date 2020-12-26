## S3 Performance

### Prefix

-

### Baseline

- `S3` prefix is the text between `Bucket Name` and `File Name`
  - If `object` name is `bucketName/folder1/folder2/object.jpeg`, then the prefix is `folder1/folder2`
- By default `S3` is automatically scales at hight request rates
- For each prefix it is possible to
  - 3500 PUT/COPY/POST/DELETE request
  - 5500 GET/HEAD request
- There is no limit of prefix
- The more prefix we use, the more request we can made

### S3 KMS Limitation

- If we use ` SSE-KMS` encryption, we need to consider there is
  - `Encrypt` request to `KMS` while uploading a file
  - `Decrypt` request to `KMS` while downloading a file
- There is a quota of `Number Of KMS Request` per second.

### Multi-Part Upload

- Recommended to use when file size size is more than `100MB`
- Must use when file size is more than `5GB`
- In this case, while uploading file
  - Files divided in separate parts
  - Upload these parts in parallel
  - `S3` join them after being uploaded

### S3 Transfer Acceleration

- Use for upload file
- First file uploaded to the nearest `EDGE Location`
- Then using `AWS Private Network`, goes to desired bucket
- Compatible with multi-part upload

### Byte Range Fetches

- Use for file fetches / download
- Parallelize Get by requesting specific byte ranges
- Can be used for retrieve only partial data
  - Like header
