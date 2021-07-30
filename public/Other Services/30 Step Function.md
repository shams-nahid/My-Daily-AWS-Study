### Step Function

---

- `JSON state machine`
- Orchestrate virtual workflow by `lambda functions`
- Can resolve the timeout issue of the long running `lambda function`
- Also work with
  - `ECS`
  - `EC2`
  - `API Gateway`
  - `On Premise Server`
- Has feature to implement `Human Approval Feature`, but not native
- Use to automate the recurring task

**States**

- `Task State`: Used to do work, task or run processes
- `Choice State`: Make choices between branches of execution
- `Failed or Succeed State`: Stop the execution with fail or success state
- `Pass State`: Do not run any process, simply take input and pass it to output. If needs any fix, do the fixing and send to the output
- `Wait State`: Make a delay before next time. The delayed time can be specified
- `Parallel State`: Start parallel branch execution
- `Map State`: Iterate the states

> To run process, `Task State` or `Parallel State` can be used.

**Handle Error**

Both the `Task State` and `Parallel` state has `Catch` and `Retry` field. To handle error and do a retry we can make use of these state machine features.

### Handle Error

---

**Retrier**

For retry, we can define different policy for the error. With different error, we can go through different error policy.

- `ErrorEquals`: Array of error names. When error occours, it goes to the corresponding retry policy.
- `IntervalSeconds`: Interval time before retry. Default is 1 second.
- `MaxAttempts`: Maximum number of retry, default is 3.
- `BackoffRate`: Additional delay with each new retry, default is 2 seconds

**Catcher**

- `ErrorEquals`: Array of error names. When error occours, it goes to the exactly same named retry policy.
- `Next`: Next state machine name
- `ReturnPath`: Determine next state machine input path
