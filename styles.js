import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5E6D3',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  menuItem: {
    alignItems: 'center',
    margin: 10,
  },
  menuImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  orderButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  orderButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
  },
  appleButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  splashText: {
    fontSize: 18,
    marginTop: 20,
  },
  banner: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    alignItems: 'center',
  },
  bannerHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bannerSubHeader: {
    color: 'white',
    fontSize: 18,
  },
});