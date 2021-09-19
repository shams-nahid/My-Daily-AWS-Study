### TTL

---

use to expire and delete items from the table. The time of ttl should be defined in each row. The deletion usually takes place the time we defined. But some cases it might take 2 days to delete. When the deletion happened, the GSI/LSI related tot he item will also be deleted.

This ttl delete operation does not require any RCU or WCU.

With the DynamoDB streams, we can control/recover the deleted items.
