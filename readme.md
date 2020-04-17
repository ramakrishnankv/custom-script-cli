# Command Line Interface (CLI)
- How to create a CLI app in NodeJS?
- How to read and consume the arguments received via command line?

## What is CLI?
CLI is a toolkit for quickly building command line apps or tasks. Say for instance, a file need to be created via command line. NodeJS can makes it very simple to create such tasks.

## Prerequisites
Though there is no mandatory prerequisites to create CLI, it will be easy if knowledge in JavaScript, NodeJS and fair understanding of package.json.

## Required tools
NodeJS, npm or yarn need to be installed.

## Bin
package.json which is the heart for an npm module that helps to execute several taks. It should be residing at the root folder using which the packages are installed or uninstalled.

Unlike modules that are used to build the app which are included in the package.json, the CLI module should required to be installed globally so that the tasks can be executed from any location of the system. 

"bin" node in package.json helps to execute a JavaScript file against a specific custom command.

`
// package.json

"bin": {
  "do-some": "./cli.js",
  "do-any": "./any-cli.js"
}
`
Once this package is installed globally on a computer, running the script "do-some" from command line will execute the task.

## Linking
How to test the app before publishing the package to npm repositoy? 

npm link helps to do this. Run 'npm link' from the package folder and the symlink created in npm/node_modules under the user folder (windows). This acts like a shortcut to the package and any change can be tested instantly. Once linked from any location of the computer the script inside "bin" in package.json can be executed.

## Unlinking
Once testing is done satisfactorily or in any other case when need to remove the link, run "npm unlink" from the root folder of the package. This will remove the linking after which the scripts under "bin" in package.json won't get executed.

Neither linking nor unlinking is not required once the package is installed from npm globally.

## Entry file
The entry file can be mentioned in package.json against "main" key. The JavaScript file that is executed against a command should have the following line at the start of the file so that NodeJS knows to install and run scripts properly (cli.js). The line starts with "#!" which usually called as “shebang”

`
#!/usr/bin/env node
`

## Arguments
In cli.js which will be executed against the commad "do-some" requires to consume the arguments received from the command line. For example when executed "do-some param1 param2", the first word is the command and second and third words are arguments.

The process.argv returns an array that contains arguments from its 2nd element onwards. First element of this array denotes the path to node.js and second element denotes the file path that is currently being executed.

So, when run ` do-some param1 param2 `, the first will execute cli.js in which process.argv returns an array which will look like `[<path-to>/node, <path-to>/cli.js, 'param1', 'param2']`

# How to use this example
- clone this repo
- $ cd custom-script
- $ npm link
- $ react-app - this will consume the cli-base.js when there is no arguments supplied. Currently there are two modules, namely base and ssr available. If the argument is not matching with the module names defined or no argument passed in command line, it will use cli-base.js and relevant console log shown on the terminal/cmd.
- $ react-app ssr - If argument is ssr, it will consume cli-ssr.js and relevant console log shown on the terminal/cmd

