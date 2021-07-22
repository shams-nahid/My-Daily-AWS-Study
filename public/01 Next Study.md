- KMS
- Envelope Encryption
- `Optimistic Locking`, `Pessimistic Locking`, `Overly Optimistic Locking` for the dynamoDB

locking:

Category: CDA – Development with AWS Services
A Java web application built using AWS SDK for Java with a DynamoDB database is concurrently accessed by thousands of users during peak time. The application is highly write-intensive and there are a lot of incidents where it overwrites stale data from the DynamoDB table.

How can you ensure your database writes are protected from being overwritten by other write operations that are occurring at the same time without affecting the application performance?

Implement pessimistic locking with write locking.
Implement overly optimistic locking (OOL).
Implement optimistic locking with version number.
Implement pessimistic locking with read locking.

Solution

Databases employ locking mechanisms to ensure that data is always updated to the latest version and is concurrent. There are multiple types of locking strategies that benefit different use cases. Some of these are:

– Optimistic Locking

– Pessimistic Locking

– Overly Optimistic Locking

Optimistic locking is a strategy to ensure that the client-side item that you are updating (or deleting) is the same as the item in DynamoDB. If you use this strategy, then your database writes are protected from being overwritten by the writes of others — and vice-versa.

With optimistic locking, each item has an attribute that acts as a version number. If you retrieve an item from a table, the application records the version number of that item. You can update the item, but only if the version number on the server side has not changed. If there is a version mismatch, it means that someone else has modified the item before you did; the update attempt fails, because you have a stale version of the item. If this happens, you simply try again by retrieving the item and then attempting to update it. Optimistic locking prevents you from accidentally overwriting changes that were made by others; it also prevents others from accidentally overwriting your changes.

Since the application is already using the AWS SDK for Java, it can support optimistic locking by simply adding the @DynamoDBVersionAttribute annotation to the objects. In the mapping class for your table, you designate one property to store the version number, and mark it using this annotation. When you save an object, the corresponding item in the DynamoDB table will have an attribute that stores the version number. The DynamoDBMapper assigns a version number when you first save the object, and it automatically increments the version number each time you update the item. Your update or delete requests will succeed only if the client-side object version matches the corresponding version number of the item in the DynamoDB table.

Hence, implementing optimistic locking with version number is the correct answer in this scenario.

Implementing pessimistic locking with read locking is incorrect because this type of locking can interrupt user operations. This is an approach where an entity is locked in the database for the entire time that it is in application memory (often in the form of an object). This can prevent certain users from reading, updating, or deleting an entry depending on the lock type.

Implementing pessimistic locking with write locking is incorrect because just as explained above, pessimistic locking will significantly affect the performance of your application. Although it will ensure that your data writes are not overwritten on the fly, this type of locking will not meet the performance requirements mentioned in the scenario.

Implementing overly optimistic locking (OOL) is incorrect because this strategy is completely inappropriate for multi-user systems since it is used for systems that have only one user or operation performing changes at a single time.
