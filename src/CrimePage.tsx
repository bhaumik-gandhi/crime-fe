import React, { useEffect, useState } from 'react';
import { getCrimeListApi } from './api';

type CrimeType = {
  _id: number
  'Reported Date': string
  'Suburb - Incident': string
  'Postcode - Incident': number,
  'Offence Level 1 Description': string,
  'Offence Level 2 Description': string,
  'Offence Level 3 Description': string,
  'Offence count': number
}

const CrimePage = () => {
  const [crimes, setCrimes] = useState<CrimeType[]>([])

  const getCrimeList = async () => {
    try {
      const apiRes = await getCrimeListApi()
      const crimesData = await apiRes.json()
      setCrimes(crimesData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getCrimeList()
  }, [])

  return <div>Crime</div>
}

export default CrimePage;