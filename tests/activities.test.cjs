const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c=vm.createContext({document:{querySelector:()=>null,body:{dataset:{page:'activities'}}},window:{location:{pathname:'/pages/activities.html'}}});
vm.runInContext(fs.readFileSync('content.js','utf8')+'\n'+fs.readFileSync('script.js','utf8').split('const setHeaderState')[0],c);
for(const lang of ['vi','en']){
 const data=vm.runInContext(`siteContent.${lang}`,c);assert(data.activitiesList.some(a=>a.date === '2024-07-11')); assert.equal(new Set(data.activitiesList.map(a=>a.slug)).size,data.activitiesList.length);
 const article=data.activitiesList.find(a=>a.date === '2025-07-17');assert.equal(article.date,'2025-07-17');assert.equal(article.paragraphs.length,5);
 for(const count of ['4','16','54','35'])assert(article.paragraphs.join(' ').includes(count));
 c.container={};vm.runInContext(`renderList(container,'activitiesList','${lang}')`,c);
 assert(c.container.innerHTML.includes('datetime="2025-07-17"'));assert(c.container.innerHTML.includes('id="year-2025"'));assert(c.container.innerHTML.includes('<details>'));assert(!c.container.innerHTML.includes('undefined'));
 for(const entry of data.activitiesList) for(const img of entry.images || []) {
  assert(fs.existsSync(require('node:path').resolve('pages',img)));
  assert(c.container.innerHTML.includes(`<a href="${img}" target="_blank" rel="noopener noreferrer"`));
 }
 assert(c.container.innerHTML.indexOf('id="year-2025"')<c.container.innerHTML.indexOf('id="year-2024"'));
 assert(!c.container.innerHTML.includes('alt="Conference photo"'));
 const css=fs.readFileSync('styles.css','utf8');
 assert(/\.activity-gallery img\s*\{[^}]*height: auto;/.test(css));
 assert.equal(data.publicationList.filter(p=>p.url).length,16);
 // Test multi-year sorting independently without adding fictitious records to the site.
 data.activitiesList.push({...article,date:'2026-01-01',slug:'test-only'});
 vm.runInContext(`renderList(container,'activitiesList','${lang}')`,c);
 assert(c.container.innerHTML.indexOf('id="year-2026"')<c.container.innerHTML.indexOf('id="year-2025"'));
 data.activitiesList.pop();
 console.log(lang,'PASS: source facts, full article disclosure, date and descending year groups, 16 publications');
}
