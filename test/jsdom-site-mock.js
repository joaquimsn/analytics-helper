const jsdom = require('jsdom'),
    fs = require('fs');
const virtualConsole = new jsdom.VirtualConsole();
const { JSDOM } = jsdom;

const dom = {}; //new JSDOM(fs.readFileSync('/mnt/LINUX-DATA/workspace/git/javascript/analytics-helper/test/src/site/index.html').toString(), { virtualConsole });

module.export = dom;