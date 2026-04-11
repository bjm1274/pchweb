const fs = require('fs');
const path = require('path');
const p = path.join('C:', 'Users', 'baek_', 'OneDrive', '\uBC14\uD0D5 \uD654\uBA74', '\uBC15\uCCA0\uD64D\uC815\uD615\uC678\uACFC_files');
try {
  const files = fs.readdirSync(p);
  files.forEach(f => console.log(f));
} catch(e) {
  console.log('Error:', e.message);
}
