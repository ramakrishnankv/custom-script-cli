const { exec } = require('child_process');

const base = () => {
  // https://nodejs.org/api/child_process.html#child_process_child_process
  console.log('this is base....');
  // exec('npm install', {}, (er, ot, sot) => {
  //   if (er) {
  //     console.log(er, 'something.... wrong....')
  //   }
  //   console.log('wow.... super')
  // })
}

module.exports = base;