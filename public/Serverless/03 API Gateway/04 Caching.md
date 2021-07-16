### Caching

---

Caching can be used to reduce the number of api calls to the backend. With caching enabled, we response will provided from the cahce if available.

We can enable cache on the stage level as well as method level.

To invalidate a cache, we need to make use of http header `Cache-Control: max-age=0`. The client should have IAM permission to invalidate the cache. In case, we do not require any IAM permission for cache invalidation, then every client can invalide the cache, which is not expected.
