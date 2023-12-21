
const {
  DiGithubBadge,
} = require('react-icons/di')

const {
  FaDiscord,
} = require('react-icons/fa')

const {
  HiOutlineMail
} = require('react-icons/hi')

const {
  MdLocationOn
} = require('react-icons/md')

exports.contacts = [
{
  mode: 'Email',
  icon: HiOutlineMail,
  text: 'mahmud.azam@usask.ca'
},
{
  mode: 'Discord',
  icon: FaDiscord,
  text: 'mahmudazam'
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
