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
  const[quran,setQuran] = useState<any>()
  const[hadith,setHadith] = useState<any>()
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
      setHadith(profileData.hadith)
      setQuran(profileData.quran)
    }
    fetchProfile()
  }, [id])
  console.log(quran)
  return (
    <div>
      <>
      <h3 style={{textAlign:"center"}}>{profile?.name}</h3>
      {quran?.map((verse:any)=>{
        <>
        <h3>omat</h3>
          <h3>{verse.id}</h3>
        </>
      })}
      </>
    </div>
  );
}

export default Account;