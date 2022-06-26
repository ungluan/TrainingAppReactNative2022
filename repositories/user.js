//https://randomuser.me/api/
import axios from 'axios';
const getUserDetail = async ()=> {
  try {
    let response = await axios.get('https://randomuser.me/api/');
    
    if (response.status != 200){
      throw 'Failed request'
    };
    if(response.data.results.length>0){
        let responseUser = response.data.results[0]
        let user = {}
        user.dateOfBirth = new Date(responseUser.dob.date)
        user.email = responseUser.email
        user.gender = responseUser.gender ?? 'male'
        user.userId = `${responseUser.id.name}${responseUser.id.value}`
        user.address = `${responseUser.location.state}, ${responseUser.location.street.name}`
        user.username = responseUser.login.username
        user.phone = responseUser.phone ?? ''
        user.registeredDate = new Date(responseUser.registeredDate)
        user.url = responseUser.picture.large
        // debugger
        return user
    }
  } catch (error) {
    throw error
  }
};

export default {
  getUserDetail
};
