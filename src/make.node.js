#!/usr/bin/env node
var html = require('fs').readFileSync('./template.html').toString('utf-8');

var rawBuffer = require('fs').readFileSync('./raw.html');
var crushedBuffer = require('fs').readFileSync('./crushed.html');
var annotatedBuffer = require('fs').readFileSync('./annotated.html');

html = html.replace(/\{\{crushed_count\}\}/g, crushedBuffer.length);
html = html.replace(/\{\{raw_count\}\}/g, rawBuffer.length);
html = html.replace(/\{\{raw_escaped\}\}/g, rawBuffer.toString('utf-8').replace(/&/g, '&amp;').replace(/</g, '&lt;'));
html = html.replace(/\{\{annotated\}\}/g, annotatedBuffer.toString('utf-8'));
html = html.replace(/\{\{crushed\}\}/g, crushedBuffer.toString('utf-8'));

var output = require('fs').createWriteStream('../index.html').write(html);