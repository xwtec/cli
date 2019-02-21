import inquirer from 'inquirer'
import {say} from 'cowsay'

async function cowsay() {
  const s = await inquirer.prompt('想说什么?')

  console.log(say({
    text: s || 'Moooo'
  }))
}

export default cowsay
