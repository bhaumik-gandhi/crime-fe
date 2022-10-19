import React, { useEffect, useState } from 'react';
import { groupBy } from 'lodash';

import { getCrimeListApi } from './api';
import { AccordionComponent, SelectComponent, TableComponent } from './components';
import { CrimeHeaders, CrimeType } from './types';

const CrimePage = () => {
  const [crimes, setCrimes] = useState<CrimeType[]>([])
  const [groupBySuburb, setGroupBySuburb]: any = useState([])
  const [selectedGroupByOption, setSelectedGroupByOption] = useState(CrimeHeaders[1])
  const [loading, setLoading] = useState(true)

  const getCrimeList = async () => {
    try {
      setLoading(true)
      const apiRes = await getCrimeListApi()
      const crimesData = await apiRes.json()
      setCrimes(crimesData)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.error(err)
    }
  }

  const getCrimesBySubrub = () => {
    return groupBy(crimes, selectedGroupByOption)
  }

  useEffect(() => {
    getCrimeList()
  }, [])

  useEffect(() => {
    if (crimes.length && selectedGroupByOption) {
      setGroupBySuburb(getCrimesBySubrub())
    }
  }, [crimes.length, selectedGroupByOption])

  return <>
    <div style={{
      display: 'flex',
      margin: '5px 0px',
      justifyContent: 'flex-end',
    }}>
      <label style={{ marginRight: 5, display: 'flex', alignItems: 'center' }}>Group By: </label>
      <div style={{ display: 'flex', width: '30%', justifyContent: 'flex-end', }}>
        <SelectComponent
          options={CrimeHeaders}
          onChange={(element) => setSelectedGroupByOption(element.target.value)}
          value={selectedGroupByOption}
          dataTestId='group-by'
        />
      </div>
    </div>
    {loading && <div data-testid='loading-crime-data'>Loading...</div>}
    {!loading && (Object.keys(groupBySuburb)).map((key, index) => {
      return <AccordionComponent
        key={index}
        eventKey={index.toString()}
        header={key}
        dataTestId='crime-group-list'
      >
        <TableComponent
          rows={groupBySuburb[key]}
          headers={CrimeHeaders}
        />
      </AccordionComponent>
    })}
  </>
}

export default CrimePage;