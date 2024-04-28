import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '~/components/Button'
import { router } from 'expo-router'

const Home = () =>
{
    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Home</Text>
            <Button onPress={() => router.replace('/(tabs)')} title='Continue' />
        </View>
    )
}

export default Home