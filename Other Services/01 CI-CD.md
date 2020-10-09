## CI/CD

- Flow
  - Code -> Build -> Test -> Deploy -> Provision
- `AWS Codepipeline`
  - `AWS Codecommit`
    - Like `Github`
    - Responsible for `Code` portion
  - `AWS Codebuild`
    - Like `Jenkins`
    - Responsible for `Build` and `Test` portion
  - `AWS Code Deploy`
    - Responsible for `Deploy` portion
    - Ues `AWS Beanstalk` or `AWS Cloudformation` to provision the code
