## Cloudformation

- `Infrastructure as Code`
- Easy to `CRUD` the infrastructure as `Code`
- **Savings Strategy**
  - Automate the creation and deletion of the `infrastructure` at for certain times
- `StackSet`:
  - Extends the functionalities of the stack, administrator create the stack template and other accounts can extends the stacks functionality
  - Allow `Create`, `Update`, `Delete` stacks across multiple accounts and regions
- `Change Sets`: Allow to show the changes preview.
- `Stack Instances`: Reference to a original stack in another account

### Properties

- `cfn-init`: Used to retrieve metadata, install packages, run services
- `cfn-signal`: Send signal for create or wait, use to synchronize the resources
- `cfn-get-metadata`: Use to retrieve metadata for a service or resources
- `cfn-hup`: Upon checking the metadata, execute custom hooks when changes are detected