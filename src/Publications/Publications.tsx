
import { publications, orderLastName } from './Data'
import { whereToJSX } from './Where'

import _basicPage from '../Common/BasicPage.module.css'
const {main : basicPage} = _basicPage

//var Latex = require('react-latex')

function Publications() {
  return (
  <div className={basicPage}>
  {publications.map((pub, index) =>
    <div key={index} className="mb-4">
    {(index + 1)}
    . With {orderLastName(pub.author)
        .filter(auth => auth !== 'Mahmud Azam')
        .map((auth, authInd, arr) =>
          auth + (authInd < arr.length - 1 ? ' and ' : '')
        )}
    . {pub.time.year}
    . <span className="italic">{pub.title}</span>
    . {whereToJSX(pub.where)}
    </div>
  )}
  </div>
  )
}

export default Publications
