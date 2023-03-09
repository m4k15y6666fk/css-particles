
import nunjucks from 'nunjucks';
import { writeFile, cp } from 'node:fs/promises';


await writeFile('./dist/index.html', nunjucks.render('./src/index.njk'));

await cp('./src/background.png', './dist/background.png');
