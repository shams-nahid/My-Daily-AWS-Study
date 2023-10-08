### Code Artifact

- Storing and retrieving dependencies are artifact management
- Artifact management in AWS
- Integrated with common dependency management tools, like Maven, Gradle, NPM, Yarn, pip, NuGet etc.
- Developers and CodeBuild can directly retrieve dependencies from the CodeArtifact
- Can be used as proxy
  - First developer/codeBuild ask the dependency to CodeArtifact
  - If it's not available in CodeArtifact cache, then it fetch from third party dependency management tools and serve the CodeBuild or Developers. Also, cache the dependencies.
- CodeArtifact can send event to `EventBridge`, allows pass the events to Lambda, SNS, SQS, triggering pipeline etc.
- Access to other account
  - Allow all code artifacts or none. It does not allow specific or some artifacts
  - Use resource based policy to allow other accounts



















