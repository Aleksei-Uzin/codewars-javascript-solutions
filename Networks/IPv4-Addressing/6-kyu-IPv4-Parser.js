/**
 * IPv4 Parser
 * https://www.codewars.com/kata/556d120c7c58dacb9100008b/train/javascript
 *
 */

const ipv4Parser = (ip, mask) => {
  const ipOctets = ip.split('.').map(Number)
  const maskOctets = mask.split('.').map(Number)

  const network = []
  const host = []

  for (let i = 0; i < 4; i++) {
    network.push(ipOctets[i] & maskOctets[i])
    host.push(ipOctets[i] & ~maskOctets[i])
  }

  return [network.join('.'), host.join('.')]
}
