
import { Publication } from './Where'
const pub_data = require('./data.js')

export const publications : Array<Publication> = pub_data.publications

export function orderLastName(authList : Array<string>) : Array<string> {
  return pub_data.orderLastName(authList)
}

