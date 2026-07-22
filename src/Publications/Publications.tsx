
import { publications, orderLastName } from './Data'
import { whereToJSX } from './Where'

import _basicPage from '../Common/BasicPage.module.css'
const {main : basicPage} = _basicPage


function Publications() {
  return (
  <div className={basicPage}>
  <ol>
  {publications.map((pub, index) =>
    <li key={index} className="mb-4">
      <span className="italic">{pub.title} </span>
      <span className="block lg:inline">
      (with {orderLastName(pub.author)
      .filter(auth => auth !== 'Mahmud Azam')
      .map((auth, authInd, arr) =>
        auth + (authInd < arr.length - 1 ? ' and ' : '')
      )})
      </span>
      <ul className="list-disc pl-4">
        <li>
        Year: {pub.time.year}
        </li>
        {whereToJSX(pub.where)}
      </ul>
  </li>)}
  </ol>
  </div>
  )
}

export default Publications
