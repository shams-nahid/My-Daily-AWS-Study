## NACL

- Use to block certain `IP` / `IP Range`

## HOST Based Firewall

- Use to block certain `IP` / `IP Range`
- `HOST Based Firewalls` are
  - firewall
  - iptables
  - ufw
  - Windows Firewall
- `HOST Based Firewalls` do not work when `ALB` is being used. Here `NACL` be used in `ALB`. (**Think Why?**)

## WAF

- `Web Application Firewall`
- Used for `Common Security Threats`
  - Check `Origin IP` address
  - SQL Injection
  - Cross Site Scripting
  - Check Headers
- When `Cloudfront` is used, set `WAF` in front of `Cloudfront`
- `Rate Based ACL Rules` can be used to avoid potential threat

## AWS Shield

- Use to prevent the `DDoS` attack

## AWS GuardDuty

- Thread detection service
- Used to monitor malicious activity and protect from unauthorized activities

## AWS Firewall Manager

- Used to manage the `AWS WAF` and `AWS Shield`

## Encryption On Flight (SSL)

- When a data is sending to server over internet, it is encrypted and only the server knows how to decrypt
- Use to prevent MITM (Man In The Middle) attack

## Encryption At Rest

- Before data is persist in the server, the data is encrypted and before retrival the data will be decrypted
- Key for encryption and decryption is being managed by another service like KMS
- The server should have permission to access KMS for the encryption and decryption operation
- With `Encryption at Rest`, even the server become vulnarable, the will still be safe

## Client Side Encryption

- Clients are responsible for encryption and decryption
- Server can not / should not decrypt the data
- This method is utilized by the `Envelope Encryption`
