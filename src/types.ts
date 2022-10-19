export type CrimeType = {
  _id: number
  'Reported Date': string
  'Suburb - Incident': string
  'Postcode - Incident': number,
  'Offence Level 1 Description': string,
  'Offence Level 2 Description': string,
  'Offence Level 3 Description': string,
  'Offence count': number
}

export const CrimeHeaders = ['Reported Date', 'Suburb - Incident', 'Postcode - Incident'
  , 'Offence Level 1 Description', 'Offence Level 2 Description', 'Offence Level 3 Description'
  , 'Offence count']