### ASG Overview

- When new AMI is required,
  - Keep the existing `Target Group`
  - Create new `Launch Configuration`
- `ASG` terminate the instance in the following manner
  - Select instance with oldest launch config
  - Select instance with closest billing hour
  - The more instance in a AZ got terminated first
- To reduce the changing of `EC2 Instance`
  - Use high `cool-down` period
  - Use high threshold value in the `Cloudwatch Alarm Metric`

### ASG Lifecycle Hook

- Custom actions can be performed during the instance `launch` or `terminate`
- Supports
  - Target Tracking Scaling
    - Scaling is based on reaching specific metric
  - Step Scaling
    - Scaling is based on set of metrics
  - Simple Scaling
    - Scaling is based on single metrics
