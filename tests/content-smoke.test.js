const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const contentSource = fs.readFileSync('content.js', 'utf8');
const siteContent = vm.runInNewContext(`${contentSource}\n;siteContent;`);
const vi = JSON.stringify(siteContent.vi);
const script = fs.readFileSync('script.js', 'utf8');

for (const phrase of ['placeholder', 'thẻ mẫu', 'dữ liệu thật', 'sẽ được cập nhật', 'Contact us', 'Collaborator']) {
  assert.equal(vi.includes(phrase), false, `Vietnamese content still contains: ${phrase}`);
}
assert.ok(vi.includes('La2O3 nanoparticles for arsenite and phosphate removal.'), 'Published English title was altered');
const englishDetails = JSON.stringify(siteContent.en.researchDetails);
assert.ok(!/[ăâđêôơưĂÂĐÊÔƠƯáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ]/i.test(englishDetails), 'Vietnamese text remains in English research details');

for (const formula of ['MnFe2O4', 'Fe2O3', 'La2O3', 'CeO2', 'BiVO4', 'BiTaO4', 'BiFeO3', 'C3N4', 'CO2']) {
  assert.ok(script.includes(formula), `Scientific formatter misses: ${formula}`);
}
assert.ok(script.includes("'<sub>$1</sub>'"), 'Subscript formatter is missing');
assert.ok(script.includes("'$1<sup>$2$3</sup>'"), 'Superscript formatter is missing');
assert.equal(contentSource.includes('<sub>'), false, 'Publication titles must remain plain source text');
console.log('content smoke test: OK');
