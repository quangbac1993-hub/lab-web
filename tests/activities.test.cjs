const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c=vm.createContext({document:{querySelector:()=>null,body:{dataset:{page:'activities'}}},window:{location:{pathname:'/pages/activities.html'}}});
vm.runInContext(fs.readFileSync('content.js','utf8')+'\n'+fs.readFileSync('script.js','utf8').split('const setHeaderState')[0],c);
for(const lang of ['vi','en']){
 const data=vm.runInContext(`siteContent.${lang}`,c);assert.equal(data.activitiesList.length,1);
 const article=data.activitiesList[0];assert.equal(article.date,'2025-07-17');assert.equal(article.paragraphs.length,5);
 for(const count of ['4','16','54','35'])assert(article.paragraphs.join(' ').includes(count));
 c.container={};vm.runInContext(`renderList(container,'activitiesList','${lang}')`,c);
 assert(c.container.innerHTML.includes('datetime="2025-07-17"'));assert(c.container.innerHTML.includes('id="year-2025"'));assert(c.container.innerHTML.includes('<details>'));assert(!c.container.innerHTML.includes('undefined'));
 assert.equal(data.publicationList.filter(p=>p.url).length,16);
 // Test multi-year sorting independently without adding fictitious records to the site.
 data.activitiesList.push({...article,date:'2026-01-01',slug:'test-only'});
 vm.runInContext(`renderList(container,'activitiesList','${lang}')`,c);
 assert(c.container.innerHTML.indexOf('id="year-2026"')<c.container.innerHTML.indexOf('id="year-2025"'));
 console.log(lang,'PASS: source facts, full article disclosure, date and descending year groups, 16 publications');
}
