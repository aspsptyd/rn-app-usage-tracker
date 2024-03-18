import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  EventFrequency,
  checkForPermission,
  queryUsageStats,
  showUsageAccessSettings,
} from '@brighthustle/react-native-usage-stats-manager';

const App = () => {

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
              backgroundColor: 'black'
            }}
          >
            <Text
              style={{ 
                color: 'white',
                textAlign: 'center',
                margin: 5,
              }}
            >Coba Cek data Disini</Text>
          </View>
        </Pressable>
      </View>
    )
}

export default App;