import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
import React, { useEffect, useState } from 'react'
import {
  EventFrequency,
  checkForPermission,
  queryUsageStats,
  showUsageAccessSettings,
  queryEventsStats,
  queryAndAggregateUsageStats,
  queryEvents,
  getAppDataUsage
} from '@brighthustle/react-native-usage-stats-manager';

import moment from 'moment'

const App = () => {

  const [dataApps, setDataApp] = useState();

  const startDateString = '2024-05-15T11:59:00';
  const endDateString = '2024-05-16T12:00:00';

  const startMilliseconds = new Date(startDateString).getTime();
  const endMilliseconds = new Date(endDateString).getTime();

  const [startTimeHuman, setStartTimeHuman] = useState('');
  const [endTimeHuman, setEndTimeHuman] = useState('');

    const functionLog = async () => {
      const result = await queryEvents(
        // EventFrequency.INTERVAL_DAILY,
        startMilliseconds,
        endMilliseconds
      )

      const startConvert = new Date(startMilliseconds);
      const endConvert = new Date(endMilliseconds);

      setStartTimeHuman(moment(startConvert).format('DD-MM-yyyy hh:mm:ss'))
      setEndTimeHuman(moment(endConvert).format('DD-MM-yyyy hh:mm:ss'))
      setDataApp(JSON.stringify(result, null, ' '))
      console.info('ARRAY APP USAGE')
      console.log(JSON.stringify(result, null, ' '))
    }

    return (
      <View
        style={{
          margin: 20,
        }}>
        <Pressable
          onPress={() => {
            checkForPermission().then(res => {
              if (!res) {
                showUsageAccessSettings('');
              } else {
                functionLog();
              }
            });
          }}>
          <View
            style={{
              backgroundColor: 'blue',
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                margin: 7,
              }}>
              Fetch Data Log Apps
            </Text>
          </View>
        </Pressable>

        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, color: 'black'}}>Start: {startTimeHuman}</Text>
          <Text style={{flex: 1, color: 'black'}}>End: {endTimeHuman}</Text>
        </View>

        <ScrollView
          style={{ marginBottom: 30 }}
        >
          <View>
            <Text style={{color: 'black'}}>{dataApps}</Text>
          </View>
        </ScrollView>
      </View>
    );
}

export default App;