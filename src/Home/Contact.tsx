
import {
  DiGithubBadge,
} from 'react-icons/di'

import {
  FaDiscord,
} from 'react-icons/fa'

import {
  HiOutlineMail
} from 'react-icons/hi'

import {
  MdLocationOn
} from 'react-icons/md'

const contacts = [
{
  mode: 'Email',
  icon: HiOutlineMail,
  text: 'first name dot last name at usask dot ca'
},
{
  mode: 'Discord',
  icon: FaDiscord,
  text: 'firstnamelastname'
},
{
  mode: 'Github',
  icon: DiGithubBadge,
  text: 'github.com/mahmudazam',
  url: 'https://github.com/mahmudazam',
},
{
  mode: 'Location',
  icon: MdLocationOn,
  text: 'Saskatoon, Canada',
},
]

function Contact() {
  return (
  <div>
  {contacts.map((contact, index) =>
    <div key={index} className="mt-1">
      <contact.icon className="relative top-1 text-[1em] mr-2" />
      {(contact.url && <a href={contact.url}>{contact.text}</a>)
        || contact.text
      }
    </div>
  )}
  </div>
  )
}

export default Contact
