## EC2

- `Elastic Cloud Computer`

### EC2 User Data

- Scripts that runs when the instance is booted up
- Use for
  - Installing updates while boot up
  - Installing software while boot up
  - Download common files while boot up
- These scripts are run as root user
  - like `sudo` command

### EC2 Meta Data

- Information about the instance

### Launch Type

- On Demand
  - Pay as you go
- Reserved
  - Regular Reserved Instance
    - Min 1 to max 3 Years
  - Convertible Reserved Instance
    - Can be convert the types like `more cpu optimized`, `more memory optimized`
  - Scheduled Reserved Instance
    - Will be up and running for certain times in regular basis
    - Recommended when the time frame is at least 1 year usage
- Spot Instance
  - can loose instance
  - very low price
  - Define max spot price
  - if the current spot price goes high of the defined spot price, we loose the instance in `2 minutes`
  - Using `Spot Block` we can extend the termination delay till `-6 hours`
  - Two type of request
    - One time request
      - Once max price < current price, all instances are removed
    - Persistent Request
      - If `spot instances` stop and then things are good, these instances launched automatically
        - To stop `persistent request`
          - First delete the `spot request`
          - Then removed the spot instances
  - `Spot Fleets`
    - Set of
      - `Spot Instances` and `On-Demand Instances`
    - We can define
      - Possible launch pools
        - Multiple AZ
        - Various type of instance
        - Various OS
    - Automatically stops when meed the capacity
    - It offers
      - `lowestPrice`
      - `diversified` (distribute across az and workloads)
      - `capacityOptimized`
- Dedicated Instance
  - Does not share hardware
- Dedicated Host
  - Does not share server, entire placement is booked

### Dedicated Instance Vs Dedicated Host

- In `Dedicated Instance`
  - The billing is is done per instance
  - The other instance of same account, may share hardware
  - No control over placement group
- In `Dedicated Host`, billing is on whole `Dedicated Host`
  - Control over placement group

### Instance Type

- `R`
  - Instance with lots of memory/`RAM`
  - Used when `in memory caching` is required
- `C`
  - Instance with good `Computation Power`
  - Used for `DB Server`
- `M`
  - Middle between `RAM` and `Computation`
  - Used for `Application Server` / `General Application`
- `I`
  - For heave `I/O Application`
  - Used for `DB`
  - When good `Instance Storage` is required
- `G`
  - `GPU` optimized instance
  - Used for `video rendering` or `machine learning`
- `T2/T3`
  - Burstble instance
  - Provide good performance according to the capacity
  - There is a criteria, where `unlimited burst` is provided

### Terminating a EC2 Instance

- For production `EC2 Instance`
  - Need a tag
  - In resource level there should be explicit deny for production tag for not to terminates
