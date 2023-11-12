## Cloudformation

- `Infrastructure as Code`
- Easy to `CRUD` the infrastructure as `Code`
- **Savings Strategy**
  - Automate the creation and deletion of the `infrastructure` at for certain times
- `StackSet`:
  - Extends the functionalities of the stack, administrator create the stack template and other accounts can extends the stacks functionality
  - Allow `Create`, `Update`, `Delete` stacks across `multiple accounts and regions`
- `Change Sets`: Allow to show the changes preview.
- `Stack Instances`: Reference to a original stack in another account
- `Artifacts`: Used to conjunction with the code pipeline
- `Drift Detection`: Allows to check if created resourses changed over time or not. Helps to resolve `out-of-bound` fixes
- To share informations between stacks
  - From one template, in the `output` section, put data under `export`
  - In another template, in the input, use `Fn::ImportValue` to get that data
  - Output values name must be unique within the region

### Commands

- `cfn-init`: Used to retrieve metadata, install packages (like nginx in ec2), run services
- `cfn-signal`: Send signal for create or wait, use to synchronize the resources
- `cfn-get-metadata`: Use to retrieve metadata for a service or resources
- `cfn-hup`: Upon checking the metadata, execute custom hooks when changes are detected

### Properties

- `SecureString`, in `AWS Parameter Store`: for license keys or external secret values. Cost effective while compare with `AWS Secret Manager`
- `NoEcho`: prevent displaying the value in plain text
- Allowed properties in `Cloudformation`
  - AWSTemplateFormatVersion
  - Description
  - Metadata
  - Parameters
  - Mappings
  - Conditions
  - Transform
  - Resources
  - Outputs
- `FindInMap` method takes 3 parameters, `MapName`, `TopLevelKey`, `SecondLevelKey`
- `AWS::NoValue`: from return property, remove specified resource property
- `AWS::Region`: region name, where the stack was created
- `AWS::StackName`: name of the stack, given during stack initialization
- `AWS::AccountID`: creator id of the stack
- Supported parameters type
  - String – A literal string
  - Number – An integer or float
  - List<Number> – An array of integers or floats
  - CommaDelimitedList – An array of literal strings that are separated by commas
  - AWS::EC2::KeyPair::KeyName – An Amazon EC2 key pair name
  - AWS::EC2::SecurityGroup::Id – A security group ID
  - AWS::EC2::Subnet::Id – A subnet ID
  - AWS::EC2::VPC::Id – A VPC ID
  - List<AWS::EC2::VPC::Id> – An array of VPC IDs
  - List<AWS::EC2::SecurityGroup::Id> – An array of security group IDs
  - List<AWS::EC2::Subnet::Id> – An array of subnet IDs

