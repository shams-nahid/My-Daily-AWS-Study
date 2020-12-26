### ASG Overview

- Terms
  - Desired capacity or actual size means, number of instance while first time running
  - Minimum size means number of minimum instance while application load is minimum
  - Maximum size means number of maximum instance while application load is maximum
  - `Scale Out` mean adding instance
  - `Scale In` means removing instance
- When new AMI is required,
  - Keep the existing `Target Group`
  - Create new `Launch Configuration`
- `ASG` terminate the instance in the following manner
  - Select instance with oldest launch config
  - Select instance with closest billing hour
  - The more instance in a AZ got terminated first

### Cool Down Period

- Ensure the `ASG` does not add or terminate instance without previous activity being completed
- Default cool-down period is `300 sec`
- `Cool Down Period` ensures it will not terminate or launch before the last scaling takes place

- To reduce the changing of `EC2 Instance`
  - Use high `cool-down` period
  - Use high threshold value in the `Cloudwatch Alarm Metric`
  - Applicable for `Simple Scaling Policy`

### Type of Scaling

- Target Tracking Scaling
  - Scaling is done based on specific metric value
  - Example be, want all the CPU average speed 40%. If goes more usage, add instance
- Step Scaling oe Simple Scaling
  - Scaling is done based on set of scaling adjustments
  - Cloudwatch alarm is involved
  - Example
    - If CPU Usage is over 30% add 2 instance
    - If CPU usage is over 70% add 5 instance
- Schedule Scaling
  - Based on usage pattern
  - Example be, use 10 instance on each friday 10AM - 5PM, other time 1 instance
- When a new `AMI` is required to launch to `ASG`, need to update the `ASG Launch Config`

### Termination Policy

- Find the AZ with most instances and terminate from there
- Find the instance with oldest config
- Find instance with closest billing period

### Lifecycle Policy

- While launch instance, there is `pending` state
  - In pending state, we can go to
    - Pending:wait
    - Pending:proceed
  - Then it goes to in service
- While terminate instance, there is `terminating` state
  - In terminating state we can go to
    - Terminating:wait
    - terminating:proceed
  - Then it goes to terminate
- We can use following state to do additional task
  - Pending:wait
  - Pending:proceed
  - Terminating:wait
  - Terminating:proceed

### Launch Configuration vs Launch Template

- Both Use
  - AMI
  - Instance Type
  - Key pair
  - SG
- Launch Configuration
  - Must be created every time
- Launch Template
  - Can have multiple version
  - Use both on-demand and sport instances
  - Can use t2 burst feature
  - Recommended by AWS
