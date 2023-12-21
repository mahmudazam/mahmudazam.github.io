
const contact_data = require('./contact_data')

export interface ContactEntry {
  mode: string,
  icon: any,
  text: string,
  url?: string,
}

export const contacts : Array<ContactEntry> = contact_data.contacts

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
