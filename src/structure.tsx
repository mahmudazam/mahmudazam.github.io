
import Contact from './Contact/Contact'
import CV from './CV/CV';
import Home from './Home/Home';
import Publications from './Publications/Publications';

const _appRoutes : Array<{ path: string,
                                 name: string,
                                 component: any }> = [
{
  path: '',
  name: 'Home',
  component: Home,
},
{
  path: 'cv',
  name: 'CV',
  component: CV,
},
{
  path: 'publications',
  name: 'Publications',
  component: Publications,
},
{
  path: 'contact',
  name: 'Contact',
  component: Contact,
},
]

const prefix = '/';

export const appRoutes = _appRoutes.map((appRt, index) => {
  return {
    ...appRt,
    index: index,
    path: prefix + appRt.path,
  };
});
