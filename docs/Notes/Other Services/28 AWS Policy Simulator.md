### AWS Policy Simulator

---

- Can evaluate the policy, permissions and actions
- Does not make the actual changes in the resources
- Since it does not make any actual request, it only response if the action is allowed or denied
- Any changes in the policy emulator does not change the actual policy
- In AWS Organizations, the SCP can be simulated
- To use in cli
  - Need the context keys
  - Use `iam simulate-custom-policy` command
