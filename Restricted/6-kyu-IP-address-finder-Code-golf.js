/**
 * IP address finder [Code-golf]
 * https://www.codewars.com/kata/5b883cdecc7c03c0fa00015a/train/javascript
 *
 */

f=a=>[1,2,3,4].map(n=>[...a].reduce((r,s)=>r+s.charCodeAt(),0)*n%256)
