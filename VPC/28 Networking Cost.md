## Networking Cost

- Traffic from `Public Internet` to `Instance` is free
- Traffic from one `Instance` to another `Instance` in same `AZ` is free
- Traffic from one `Instance` to another `Instance` in different `AZ`
  - 0.02 for `Public Network` / `Elastic IP`
  - 0.01 for `Private IP`
- Traffic from one `Region` to another `Region` is 0.02
- Best Practice
  - Uses `Private IP` instead of `Public IP`
    - Low cost, better performance
  - Use same `AZ` as more as possible
    - Risk on `HA`
