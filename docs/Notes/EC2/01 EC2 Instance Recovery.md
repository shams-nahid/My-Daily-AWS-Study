## EC2 Instance Recovery

- Using `Cloudwatch Alarm` we can recover `EC2 Instance`
- It recover previous
  - Public IP
  - Private IP
  - Elastic IP (if attached)
  - Metadata
  - Placement Group
- It does not recover
  - Instance Store
- Set up
  - Check `EC2 Instance`
  - Check `EC2 Instance Underlying Hardware`
- `SNS Topic` can be used to notify this incident
- EC2Rescue
  - Compatible for Linux and Windows
  - Can read the log files and determine the connection issues