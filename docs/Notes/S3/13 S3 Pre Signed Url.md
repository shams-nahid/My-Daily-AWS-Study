## Pre Signed URL

- Use the permission of the person who generate the url
- Can generate url using
  - From CLI, for download
  - Using SDK, for upload
- Default timeout 1 hour
- Can update url validation by using `--expires-in` flag
- Use for
  - Premium content in `S3`
  - Temporary user upload file in precise location
  - Ever changing user list, download files by generating url dynamically
