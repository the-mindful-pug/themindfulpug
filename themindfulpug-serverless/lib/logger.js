import * as chalk from 'chalk'

let level = 0
const setLoggerLevel = newLevel => {
  console.log('[Logger] Log level set to', newLevel)
  level = newLevel
}

const info = (component, obj) =>
  level < 1
    ? console.log(
        `[${chalk.green('INFO')}] ${chalk.blue(component)} ${JSON.stringify(
          obj
        )}`
      )
    : () => {}
const warn = (component, obj) =>
  level < 2
    ? console.log(
        `[${chalk.yellow('WARN')}] ${chalk.blue(component)} ${JSON.stringify(
          obj
        )}`
      )
    : () => {}
const error = (component, obj) =>
  level < 3
    ? console.log(
        `[${chalk.red('ERROR')}] ${chalk.blue(component)} ${JSON.stringify(
          obj
        )}`
      )
    : () => {}

const logger = {
  setLoggerLevel,
  info,
  warn,
  error
}

export default logger
