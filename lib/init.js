const prompts = require('prompts');

const init = async (cmd) => {
  const appPrompt = async () => await prompts({
    type: 'select',
    name: 'type',
    message: 'What type of app would you like to dockerify:',
    choices: [
      { title: 'react app', value: 'react' },
      { title: 'express app', value: 'express' },
      { title: 'angular app', value: 'angular' },
      { title: 'vue app', value: 'vue' },
    ]
  });

  const reactPrompt = async () => await prompts([
    {
      type: 'select',
      name: 'starterKit',
      message: 'Which starter kit are you using:',
      choices: [
        { title: 'create-react-app', value: 'cra' },
        { title: 'gastby-js', value: 'gastby' },
        { title: 'react-boilerplate', value: 'rb' },
        { title: 'react-starter-kit', value: 'rsk' },
        { title: 'None of the above', value: 'custom' },
      ]
    }
  ]);

  const app = await appPrompt();
  let response = { ...{}, app };
  switch (app.type) {
    case 'react':
      const react = await reactPrompt();
      response = { ...response, react };
      break;
    case 'angular':
    case 'express':
    case 'vue':
    default:
      console.log('Sorry. Not implemented yet');
      break;
  }

  console.log(response);
};

module.exports = init;
