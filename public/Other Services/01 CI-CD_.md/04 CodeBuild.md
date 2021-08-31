## CodeBuild

---

**Run On Proxy Server**

To run the codeBuild in the proxy server,

- Configure `ssl-bump`
- Update server security policy for `ssl-bump`
- Specify the `proxy` element in the `buildspec.yml`

When the developer does not have the access of the code and can not run edit `buildspec.yml`, he can use cli to run the code build using the parameter `buildspecOverride`

**Access VPC Resources During Testing**

By default the `codeBuild` can not access the vpc resource. To give access, we have to provide vpc specific config like vpc id, subnet id, sg id etc.
