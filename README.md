# App Usage Tracker v1.0-beta
Log Aplikasi masih baru di Android, untuk iOS masih on ReSearch

## Log Data Usage Activity
Berikut contoh data yang sudah berhasil diambil dari usage penggunaan activity pada Ponsel Android

```.sh
 LOG  {
 "com.google.android.gms": {
  "appName": "Layanan Google Play",
  "packageName": "com.google.android.gms",
  "lastTimeUsed": 1715759957978,
  "firstTimeStamp": 1715678603628,
  "isSystem": false,
  "totalTimeInForeground": 21,
  "lastTimeStamp": 1715765003627
 },
 "com.burockgames.timeclocker": {
  "appName": "com.burockgames.timeclocker",
  "packageName": "com.burockgames.timeclocker",
  "lastTimeUsed": 1715761629904,
  "firstTimeStamp": 1715678603628,
  "isSystem": false,
  "totalTimeInForeground": 104,
  "lastTimeStamp": 1715765003627
 },
 "com.android.deskclock": {
  "appName": "Jam",
  "packageName": "com.android.deskclock",
  "lastTimeUsed": 1715630340415,
  "firstTimeStamp": 1715592200825,
  "isSystem": false,
  "totalTimeInForeground": 179,
  "lastTimeStamp": 1715678600824
 },
. . . .
// And more data
```

Dan berikut tampilannya

<img src="https://github.com/aspsptyd/rn-app-usage-tracker/assets/98740335/fe442858-552f-4e3b-a4b1-5e582bce8521" width="300"/>

Copyright &copy; 2024 Asep Septiadi. All right reserved. Powered by <a href="https://www.npmjs.com/package/@brighthustle/react-native-usage-stats-manager">`react-native-usage-stats-manager`</a>
