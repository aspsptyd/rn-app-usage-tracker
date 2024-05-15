# App Usage Tracker v1.1-beta
Log Aplikasi masih baru di Android, untuk iOS masih on ReSearch.

## What's new?
- Modify: Get data by range data (start and end date) usage app (activity)
- Fix: View dan list with scroll

## Log Data Usage Activity
Berikut contoh data yang sudah berhasil diambil dari usage penggunaan activity pada Ponsel Android

```.sh
  INFO  ARRAY APP USAGE
 LOG  {
 "0": {
  "isSystem": false,
  "count": 13,
  "eventType": 0,
  "usageTime": 6540838,
  "eventTime": 1715766609656,
  "packageName": "ginlemon.flowerfree",
  "humanReadableUsageTime": "1h 49m 0s",
  "name": "ginlemon.flowerfree"
 },
 "1": {
  "isSystem": false,
  "count": 3,
  "eventType": 0,
  "usageTime": 911078,
  "eventTime": 1715766595356,
  "packageName": "com.rnappusage",
  "humanReadableUsageTime": "15m 11s",
  "name": "RNAppUsage"
 },
 "2": {
  "isSystem": false,
  "count": 5,
  "eventType": 0,
  "usageTime": 632758,
  "eventTime": 1715765845264,
  "packageName": "com.facebook.katana",
  "humanReadableUsageTime": "10m 32s",
  "name": "Facebook"
 },
// And more data
```

Dan berikut tampilannya

<img src="https://github.com/aspsptyd/rn-app-usage-tracker/assets/98740335/0cf57191-35ef-4d8d-af8f-4b1a248a2886" width="300"/>
<br /><br />

Copyright &copy; 2024 Asep Septiadi. All right reserved. Powered by <a href="https://www.npmjs.com/package/@brighthustle/react-native-usage-stats-manager">`react-native-usage-stats-manager`</a>
