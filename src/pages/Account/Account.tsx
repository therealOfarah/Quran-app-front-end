import React from 'react';
import { useEffect,useState } from 'react';
import * as profileService from '../../services/profileService'
import '../../styles/account.css'
type Props={
  user:any;
}
function Account(props:Props) {
  const id = props.user.profile
  const[profile,setProfile] = useState<any>()
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])
  return (
    <div>
      <h3 style={{textAlign:"center"}}>{profile?.name}</h3>
    </div>
  );
}

export default Account;