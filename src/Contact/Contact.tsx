
import BasicPage from '../Common/BasicPage';

import {
  DiGithubBadge,
} from 'react-icons/di'

import {
  FaDiscord
} from 'react-icons/fa';

import {
  HiOutlineMail
} from 'react-icons/hi'

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
  text: 'github.com/mahmudfasihulazam',
  url: 'https://github.com/mahmudfasihulazam',
}
]

function Contact() {
  return (
  <BasicPage>
  {contacts.map((contact, index) =>
    <div key={index} style={{marginBottom: '1em'}}>
      <contact.icon />
      <span style={{fontWeight: 'bold'}}>{contact.mode}: </span>
      {(contact.url && <a href={contact.url}>{contact.text}</a>)
        || contact.text
      }
    </div>
  )}
  </BasicPage>
  );
}

export default Contact;
