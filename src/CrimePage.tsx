import React, { useEffect, useState } from 'react';
import { groupBy } from 'lodash';

import { getCrimeListApi } from './api';
import { AccordionComponent, TableComponent } from './components';
import { CrimeHeaders, CrimeType } from './types';

const CrimePage = () => {
  const [crimes, setCrimes] = useState<CrimeType[]>([])
  const [groupBySuburb, setGroupBySuburb]: any = useState([])

  const getCrimeList = async () => {
    try {
      const apiRes = await getCrimeListApi()
      const crimesData = await apiRes.json()
      setCrimes(crimesData)
    } catch (err) {
      console.error(err)
    }
  }

  const getCrimesBySubrub = () => {
    return groupBy(crimes, 'Suburb - Incident')
  }

  useEffect(() => {
    getCrimeList()
  }, [])

  useEffect(() => {
    if (crimes.length) {
      setGroupBySuburb(getCrimesBySubrub())
    }
  }, [crimes.length])

  return <>{(Object.keys(groupBySuburb)).map((key, index) => {
    return <AccordionComponent key={index} eventKey={index.toString()} header={key}>
      <TableComponent
        rows={groupBySuburb[key]}
        headers={CrimeHeaders}
      />
    </AccordionComponent>
  })}
  </>
}

export default CrimePage;