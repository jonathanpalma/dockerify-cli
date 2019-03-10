const prompts = require('prompts');

const init = async (cmd) => {
  // Just testing prompts a little bit :)
  const response = await prompts([
    {
      type: 'select',
      name: 'nodeVersion',
      message: 'Select your node version:',
      choices: [
        { title: 'Dubnium (10.x)', value: 'dubnium' },
        { title: 'Carbon (8.x)', value: 'carbon' },
        { title: 'Boron (6.x)', value: 'boron' },
      ]
    },
    {
      type: 'select',
      name: 'linuxDistro',
      message: 'Select your linux distro:',
      choices: [
        { title: 'Alpine', value: 'alpine' },
        { title: 'Jessie', value: 'jessie' }
      ]
    }
  ]);
};

module.exports = init;
