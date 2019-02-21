import chalk from 'chalk'

export default () => console.log(`hello ${chalk.magenta(process.env.USERNAME)}!`)
