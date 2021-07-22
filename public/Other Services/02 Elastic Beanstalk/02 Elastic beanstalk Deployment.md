## Deployment

---

### Manual Deploy

---

We can deploy code to elastic beanstalk by `zip` file or `war` file. We can define the format(`zip`/`war`) by a config file from `.elasticbeanstalk/config.yml`

To deploy we can simply use the `eb deploy`.

### Deployment Modes

---

Types of deployment modes:

- `All at once`
  - All instances will be updated at a time
  - There's a downtime during this types of deployment
- `Rolling`
  - Update couple of instances
  - When first cluster of instances are healthy, move to the next instances
- `Rolling with additional batches`
  - Similar to rolling, but spins up a new set of instance
  - So the previous instances are there until new instances are healthy
- `Immutable`
  - Spins up new instances in new ASG
  - When new instances are healthy, move all previous instances
- `Blue/Green`
  - A new environment will be deployed
  - A partial percentage of the traffic will route first
  - If the new environment goes right, all traffic will go to new env and previous instances will be removed
- `Traffic Splitting (Canary)`
  - New instances will be instantiated in temp ASG
  - A small percentage of traffic goes there
  - If health is good in new instances, route all traffic there and remove the existing one

Traffic Splitting (Canary) vs Blue/Green

- Canary use ASG to split traffic, Blue/Green use Route53 to split traffic
- Canary is automated wherase the Blue/Green is lot of manual processing
