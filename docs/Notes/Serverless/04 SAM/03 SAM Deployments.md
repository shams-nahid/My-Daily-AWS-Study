### SAM Deployments

---

SAM usage Cloudformation as the underlying deployment mechanism.

After develop and test locally, we can deploy code using

1. `sam package` (Includes in the `sam package`)
2. `sam deploy`

Deployment commands,

1. `sam init`: Initialize app using sam template
2. `sam build`: Created a deployment ready build directory
3. `sam package`: create zip, upload s3, create packaged template
4. `sam deploy`: deploy
5. `sam publish`: take packaged template and publish

SAM has the built in codeDeploy for helping the safe lambda deployments.

1. `Canary`: A certain amount of defined traffic will go to new function for a defined time. If everything goes fine, all traffic will shift to the new function
2. `Linear`: Traffic is shifted in equal increments with an equal number of minutes between each increment.
3. `All-at-once`: All traffic will be shifted to the new lambda functions.

**Canary Example**

`Canary10Percent10Minutes`: Move 10 percent if the traffic immediately to the new version. After 10 minutes, all traffic is shifted to the new version.

`CodeDeployDefault.LambdaCanary10Percent5Minutes`: Move 10 percent traffic to new lambda function and then all the traffic will be shifted to the new lambda function.

**Linear Example**

`CodeDeployDefault.LambdaLinear10PercentEvery1Minute` Will redirect 10 percent of traffics each minutes and in 10 minutes all traffics will be shifted.

`CodeDeployDefault.LambdaLinear10PercentEvery2Minutes` Will redirect 10 percent of traffics each 2 minutes and in 20 minutes all traffics will be shifted.
