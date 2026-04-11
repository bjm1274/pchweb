const path = require('path');
const p = path.join('C:', 'Users', 'baek_', 'OneDrive', '\uBC14\uD0D5 \uD654\uBA74', '\uBC15\uCCA0\uD64D\uC815\uD615\uC678\uACFC_files');
console.log('Path:', p);
const fs = require('fs');
['3.png','4.png','5.png'].forEach(f => {
  const fp = path.join(p, f);
  try {
    const stat = fs.statSync(fp);
    console.log(f, 'size:', stat.size, 'bytes');
  } catch(e) {
    console.log(f, 'not found');
  }
});
