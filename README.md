# latlng-to-json

```bash
git clone https://github.com/cedced19/latlng-to-json
node index.js [input file] [output file]
```

(I had to use [https://www.findlatitudeandlongitude.com/click-lat-lng-list/](https://www.findlatitudeandlongitude.com/click-lat-lng-list/))

## Example

Original file:
```
48.74359,7.258101
48.742493,7.257403
48.742755,7.259173
48.743632,7.259291
```

JSON file:
```json
[ { "latitude": 48.74359, "longitude": 7.258101 },
  { "latitude": 48.742493, "longitude": 7.257403 },
  { "latitude": 48.742755, "longitude": 7.259173 },
  { "latitude": 48.743632, "longitude": 7.259291 } ]
```
