import inquirer from 'inquirer'
import {say} from 'cowsay'

async function cowsay() {
  const answer = await inquirer.prompt([{
  type: 'input',
  name: 'input',
  message: '想说什么?',
  default: 'Moooo'}])

  console.log(say({
    text: answer.input
  }))
}

export default cowsay
