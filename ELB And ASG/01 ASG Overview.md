### ASG Overview

- When new AMI is required,
  - Keep the existing `Target Group`
  - Create new `Launch Configuration`
- `ASG` terminate the instance in the following manner
  - Select instance with oldest launch config
  - Select instance with closest billing hour
  - The more instance in a AZ got terminated first
- Default cool-down period is 300 sec
- To reduce the changing of `EC2 Instance`
  - Use high `cool-down` period
  - Use high threshold value in the `Cloudwatch Alarm Metric`
- Type of Scaling
  - Target Tracking Scaling
    - Scaling is done based on specific metric value
  - Step Scaling
    - Scaling is done based on set of scaling adjustments
  - Simple Scaling
    - Scaling is done based on 

### ASG Lifecycle Hook

- Custom actions can be performed during the instance `launch` or `terminate`
- Supports
  - Target Tracking Scaling
    - Scaling is based on reaching specific metric
  - Step Scaling
    - Scaling is based on set of metrics
  - Simple Scaling
    - Scaling is based on single metrics
