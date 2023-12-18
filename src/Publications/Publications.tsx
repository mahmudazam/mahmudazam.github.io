
import { publications } from './Data'
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
    . {pub.author.map((auth, authInd) =>
        auth + (authInd < pub.author.length - 1 ? ' and ' : '')
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
