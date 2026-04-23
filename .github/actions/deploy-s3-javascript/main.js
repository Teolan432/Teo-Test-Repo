const core = require('@actions/core');
const github = reqiure('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello from my custom JavaScript action')

}

run()