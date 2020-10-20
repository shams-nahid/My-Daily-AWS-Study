## S3 Versioning

- `Enable Version` of `S3` files
- Should be enabled in `Bucket Level`
- Useful
  - To protect file against un-intended deletes
  - Roll back to any version
- If `Versioning` is enable to a `Non-versioned` bucket, the existing objects get a version of `NULL`
- If `Versioning` is disabled to a `Bucket`, existing `Versioned Object` exist
- When `Versioning` is `enabled`
  - Latest version has a flag `Latest Version`
  - Deleted File has a flag `Deleted Marker`
