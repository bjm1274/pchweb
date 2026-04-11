const path = require('path');
const fs = require('fs');
const src = path.join('C:', 'Users', 'baek_', 'OneDrive', '\uBC14\uD0D5 \uD654\uBA74', '\uBC15\uCCA0\uD64D\uC815\uD615\uC678\uACFC_files');
const dst = path.join('C:', 'Users', 'baek_', 'pchweb', 'temp_imgs');
if (!fs.existsSync(dst)) fs.mkdirSync(dst);
['3.png','4.png','5.png'].forEach(f => {
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
  console.log('Copied', f);
});
