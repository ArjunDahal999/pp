import { Stack } from 'expo-router';
import { useEffect, useState, useMemo } from 'react'; // Import useMemo
import { Alert, Image, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { LocationData } from '~/types';
import MapView, { Marker } from 'react-native-maps';
import ModalComponent from '~/components/Modal';
import { useModalStore } from '~/store/store';

export default function Home()
{
  const [location, setLocation] = useState<LocationData | any>();
  const [errorMsg, setErrorMsg] = useState("");

  const openModel = useModalStore().onOpen

  useEffect(() =>
  {
    (async () =>
    {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted')
      {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Memoize the location data

  // const data = useModalStore((state) => state);

  return (
    <>
      <View style={styles.container}>
        {location && <MapView
          initialRegion={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={styles.map} >
          <Marker
            onPress={() => openModel()}
            className='p-2 border-2 border-black'
            coordinate={{ latitude: location?.coords.latitude, longitude: location?.coords.longitude }}
          >
            <ModalComponent url='https://res.cloudinary.com/dzsl2h59g/image/upload/v1714223392/image_gtla0u.jpg'>
              <View className=' border-2 border-white'>
                <Image
                  className='border-white border-[2px] -rotate-3'
                  source={{
                    uri: 'https://res.cloudinary.com/dzsl2h59g/image/upload/v1714223392/image_gtla0u.jpg',
                  }} style={{ height: 35, width: 35 }} />
              </View>
            </ModalComponent>

          </Marker>
        </MapView>}

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
