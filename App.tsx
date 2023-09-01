import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {


  return (

    <ImageBackground
      source={{ uri: `https://wallpapercave.com/wp/wp3208183.png` }}
      style={styles.backImage}
    >
      <View style={{ marginTop: 100, marginLeft: 35 }}>

        <View>

          <Text style={styles.TitleText}>
            Create an
          </Text>
          <Text style={styles.TitleText}>
            Account 
          </Text>
        </View>
      </View>

      <View style={styles.InpView} >
        <TextInput placeholder="Your Name" style={styles.Inp} />

      </View>
      <View style={styles.InpView}>
        <TextInput placeholder="Your Email" style={styles.Inp} />

      </View>
      <View style={styles.InpView}>
        <TextInput placeholder="Password" style={styles.Inp} />

      </View>
      <View style={styles.InpView}>
        <TextInput placeholder="Confirm password" style={styles.Inp} />

      </View>

      <View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems:'center'}}>
        <Text>
<View>
  <Text>

          Back to 
  </Text>
</View>
        <TouchableOpacity  >
          <Text style={{marginHorizontal:5,color:'#003566'}}>
             Sign in
          </Text>
        </TouchableOpacity>
        </Text>

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  TitleText: {
    fontSize: 40,
  },
  backImage: {
    flex: 1,
    resizeMode: "cover",
  },
  Inp: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#003566',
    // padding: 10,
    fontSize: 16,


  }, InpView: {
    marginHorizontal: 35,
    marginTop: 25,
  },
  btn: {
    backgroundColor: '#003566',
    borderRadius: 30,
    // paddingHorizontal:30,
    marginHorizontal: 35,
    paddingVertical: 15,
    marginVertical: 30,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },

})
