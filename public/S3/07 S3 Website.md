## S3 Website

- `S3` can be used to host static website
- To use `S3` to host static website, we need to allow public read access
- Site URL can be
  - `<bucket-name>.s3-website.<AWS-region>.amazonaws.com`
  - `<bucket-name>.s3-website-<AWS-region>.amazonaws.com`
  - Only difference is after `s3-website`
    - Could be `.`
    - Could be `-`
- Hands on
  - Enable `Static Site Hosting`
  - Upload file `index.html` and `error.html`
  - Enable public access
  - Add bucket policy to enable `GET Object`
