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
