## S3 Select

- Server side filtering
- Can run simple SQL statements to filter
- Can filter by rows and columns
- Do not need to load all data to filter
- Example
  - There is a `CSV` file in `S3`
  - Using `S3 Select` we can select certain rows and columns
- Fos `S3 Select` we can store files as
  - CSV
  - JSON
- For `CSV` and `JSON` files, supported compression is
  - G-ZIP
  - B-ZIP2

## Glacier Select

- Same as `S3 Select` but happen in `Glacier`
