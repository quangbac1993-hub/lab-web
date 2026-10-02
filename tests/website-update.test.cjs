const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync('content.js','utf8');
const context=vm.createContext({document:{querySelector:()=>null,body:{dataset:{page:'home'}}},window:{location:{pathname:'/'}}});
vm.runInContext(source+'\n'+fs.readFileSync('script.js','utf8').split('const setHeaderState')[0],context);
for(const lang of ['vi','en']){
 const groups=vm.runInContext(`siteContent.${lang}.peopleList`,context),people=groups.flatMap(g=>g.members);
 assert.equal(people.length,16);assert.equal(new Set(people.map(p=>p.name)).size,16);
 const names=lang==='vi'?['ThS. Nguyễn Trần Dũng','ThS. Đỗ Nguyễn Huy Tuấn','ThS. Hà Thị Hằng Thục']:['MSc. Nguyen Tran Dung','MSc. Do Nguyen Huy Tuan','MSc. Ha Thi Hang Thuc'];
 names.forEach((n,i)=>{const p=people.find(p=>p.name===n);assert.ok(p);assert.equal(p.employment,lang==='vi'?(i===2?'Hợp đồng':'Biên chế'):(i===2?'Contract staff':'Permanent staff'));});
 const container={};context.container=container;vm.runInContext(`renderList(container,'peopleList','${lang}')`,context);
 assert.equal((container.innerHTML.match(/<article /g)||[]).length,16);
 assert.equal((container.innerHTML.match(/employment-badge/g)||[]).length,3);
 assert.ok(!container.innerHTML.includes('undefined'));assert.ok(!container.innerHTML.includes('<p></p>'));
 assert.ok(!container.innerHTML.includes('will be updated'));
 for(const p of people){if(p.photo)assert.ok(fs.existsSync('pages/'+p.photo),p.photo);}
}
for(const name of ['research-fields','research-fields-en','research-fields-mobile','research-fields-en-mobile']){
 const svg=fs.readFileSync(`assets/${name}.svg`,'utf8');assert.equal((svg.match(/stroke-opacity=".26"/g)||[]).length,5);assert.ok(svg.includes('<title id="title">'));
}
assert.ok(fs.readFileSync('index.html','utf8').includes('data-hero-mobile'));
console.log('PASS: bilingual rendering, 16 cards/language, names, employment, local photos, four five-direction SVGs.');
