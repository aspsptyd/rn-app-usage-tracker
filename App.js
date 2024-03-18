import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
  EventFrequency,
  checkForPermission,
  queryUsageStats,
  showUsageAccessSettings,
} from '@brighthustle/react-native-usage-stats-manager';

const App = () => {

  const [dataApps, setDataApp] = useState();

  const startDateString = '2024-03-17T06:00:00';
  const endDateString = '2024-03-18T06:00:00';

  const startMilliseconds = new Date(startDateString).getTime();
  const endMilliseconds = new Date(endDateString).getTime();

  const functionLog = async () => {
    const result = await queryUsageStats(
      EventFrequency.INTERVAL_DAILY,
      startMilliseconds,
      endMilliseconds
    )

    console.log(JSON.stringify(result, null, ' '))
    setDataApp(JSON.stringify(result, null, ' '))
  }

    return (
      <View
        style={{ 
          margin: 20
        }}
      >
        <Pressable
          onPress={() => {
            checkForPermission().then((res) => {
              if (!res) {
                showUsageAccessSettings('');
              } else {
                functionLog()
              }
            });
          }}
        >
          <View
            style={{ 
              backgroundColor: 'blue',
              borderRadius: 5
            }}
          >
            <Text
              style={{ 
                color: 'white',
                textAlign: 'center',
                margin: 7,
              }}
            >Fetch Data Log Apps</Text>
          </View>
        </Pressable>


        <Text>
              {dataApps}
            </Text>
      </View>
    )
}

export default App;