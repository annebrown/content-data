//<--------@/update-frontmatter.ts--------------------------------------------->
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const currentDate = new Date().toISOString().split('T')[0];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(/lastModified: '.*'/, `lastModified: '${currentDate}'`);

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Updated lastModified date to ${currentDate} in ${filePath}`);
  });
});
//<--------@/update-frontmatter.ts--------------------------------------------->
