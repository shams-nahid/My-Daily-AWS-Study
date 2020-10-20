## Buckets And Objects

### Buckets

- Store `objects` (aka `files`) in Buckets (aka `directories`)
- Should be globally unique name
- Although `S3` is `Global`, `buckets` are `Region Specific`
- Naming convention
  - No Uppercase
  - No Underscore
  - 3 to 63 characters
  - No `IP`
  - Start with
    - Lowercase
    - Number

### Objects

- `Objects` has `Bucket Name`, `Prefix`, and `File Name`
- For a object
  - When `Object` name is `s3://bucket_name/key`
    - Here `bucket_name` is the `Bucket Name`
    - No `Prefix` here
    - `key` is the file name
  - When `Object` name is `s3://bucket_name/folder_1/folder_2/key`
    - Here `bucket_name` is the `Bucket Name`
    - `folder_1` and `folder_2` is the `Nested Folder`, where the `File` placed
    - `key` is the file name
- There is no `Folder` concept in the `S3`, `UI` tricks to think that way
- `Object` can be at most `5TB` size
- Can not upload a `Object` more than `5GB` without `multipart`
- `Object Metadata` contains
  - User Metadata
  - System Metadata
- `Tag` can be added
  - Max 10 `Tags` supported
  - Use for
    - Security
    - Lifecycle Policy
- When `Versioning` is `enabled`, then the `Object` has `Version ID`
