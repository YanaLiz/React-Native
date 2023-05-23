import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent:'flex-end'
  },
  text: {
    color: '#212121',
    fontSize: 30,
    alignSelf: 'center',
     fontWeight: 500,
    marginTop:32,
  },
  form: {
    width: '100%',
    // height:100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 32,
    
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
    backgroundColor: '#F6F6F6',
  },
  button: {
    marginTop: 43,
    width: '100%',
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    paddingBottom: 16,
    paddingTop:16,
  },
  btnText: {
    alignSelf: 'center',
    color: 'white',
    fontSize:16,
  },
  registr: {
    color: '#1B4371',
    fontSize: 16,
    fontWeight: 400,
    alignSelf: 'center',
   
  },
});
export default styles