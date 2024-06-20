
const fs = require('fs')

const MAIN_URL = 'https://mahmudazam.github.io'
const routes = [
  '',
  'MahmudAzam.pdf'
]
const TODAY = new Date().toISOString().split('T')[0]

const xmlSitemap = `\
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\
${routes.map(r => `
  <url>
    <loc>${MAIN_URL}/${r}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`).join('')}
</urlset>
`

const PUBLIC_DIR = './public'
const FNAME = 'sitemap.xml'
fs.writeFileSync(PUBLIC_DIR + '/' + FNAME, xmlSitemap)
