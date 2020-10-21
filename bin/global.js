#!/usr/bin/env node
const execution = require('../index')
const dirName = process.argv[2]

execution.execution(dirName, process.argv)