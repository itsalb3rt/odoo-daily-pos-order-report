import app from './app';
import '@babel/polyfill';

async function main(){
  await app.listen(80);
  console.log('Server running: http://localhost:80 ✅');
}

main();