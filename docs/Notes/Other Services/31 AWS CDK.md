### AWS CDK

- Cloud Development Kit
- CDK use a wrapper called `CDK Synth` that compiles code to `CloudFormation`
- Use to model and provision the resources using the languages like TypeScript, JavaScript, Python, Java, C# etc
- Ultimately, codes in the CDK compiles to `Cloudformation`
- Very safe compare to `CloudFormation` as `yaml` or `json` can be error prune, while `CDK` is written in type safe programming language, so if the code compiles, the resources will be built.
- Wide range compare to SAM. SAM is focused on serverless app, quickly up and running with lambda function, while the CDK can be used for creating all kinds of resources including serverless.
- CDK can utilize SAM for local testing
  - CDK will use `CDK Synth` to generate `CloudFormation` template
  - Later `SAM` cli will be used to run them offline

**CDK Constructs**

- It is 3 layers
- First layer, have to create everything from scratch
- Second layer, built something on behalf of us
- Third layer, built a lot of things, on behalf of us

For example, when we need to create a `S3` bucket, we can use layer 1. For complex task like making a lambda api, the CDK will do a lot of things on behalf of us, like creating a Security Group, creating bucket etc.


**CDK Bootstrapping**

- Before deploy a CDK, we must need a CDK toolkit for that particular account + region
- CDK toolkit is the necessary reources for creating CDK in AWS, example resources are
  - S3 bucket
  - IAM Roles
- Now, before deploying the first CDK, `CDK Bootstrapping` generate `CDK Toolkit`, that contains all these resources

**Unit Testing**

- CDK Assertions Module are avaliable with popular test frameworks (Like Jest in JS world)
- Two types of test
  - Fine-grained Assertions: Test properties of the resources
  - Snapshot Test: Compare with previous template snapshot
- Can test with my stack or template, that is not in my stack

