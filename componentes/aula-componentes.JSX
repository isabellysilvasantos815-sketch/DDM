import { Text, View } from 'react-native';

export default function App() {

  return (

    <View style = {{ flex: 1 }}>

      <View style = {{ flex: 1, backgroundColor: '#C099DE' }}>

        <Text>Pardo Aqui!</Text>

      </View>

      <View style = {{ flex: 1.5, backgroundColor: 'lightblue' }}></View>
      <View style = {{ flex: 6.5, backgroundColor: 'pink' }}></View>
      <View style = {{ flex: 1, backgroundColor: 'lightyellow' }}></View>

    </View>
    

  );
}

