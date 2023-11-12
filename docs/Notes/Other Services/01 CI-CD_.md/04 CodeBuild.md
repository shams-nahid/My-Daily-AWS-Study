## CodeBuild

---

- **TBD:** Need to add the code build detail property explaination
- Build can be defined in code-pipeline/code-build
- Source/destinations
  - Source can be CodeCommit, S3, Bitbucket or Github
  - Build instruction is written in the `buildspec.yml`
  - Log can be stored in S3 or Cloudwatch Logs
  - Logs are available in Cloudwatch logs
  - Metrics are available in Cloudwatch metrics
  - Thresholds are available in Cloudwatch Alarm (How long the codebuild should run)
  - EventBridge can be used for trigger notifications
- CodeBuild agent can be used to test the code build locally
- By default CodeBuild launched outside the VPC, so can not access the reources
- Providing vpc id, subnet id and security group ids, it can run inside the VPC and acess resoures
- As environment varibale we can use
  - Plaintext
  - Parameter store
  - Secret manager
- By enabling `Codebuild Timeout`, can ensure the code build is not running long time

**Run On Proxy Server**

To run the codeBuild in the proxy server,

- Configure `ssl-bump`
- Update server security policy for `ssl-bump`
- Specify the `proxy` element in the `buildspec.yml`

When the developer does not have the access of the code and can not run edit `buildspec.yml`, he can use cli to run the code build using the parameter `buildspecOverride`

**Access VPC Resources During Testing**

By default the `codeBuild` can not access the vpc resource. To give access, we have to provide vpc specific config like vpc id, subnet id, sg id etc.
