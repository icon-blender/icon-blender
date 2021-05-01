/**
 * Convet a javascript object to Less
 * Modified from https://github.com/absolunet/node-json-to-scss/blob/master/index.js
 *
 */

const forEach = require('lodash.foreach');
const mapKeys = require('lodash.mapkeys');


let indentStyle = `\t`;

const objToLess = (chunk, level = 0) => {
	const indent  = indentStyle.repeat(level);
	let less = '';


	mapKeys(chunk, (value, key) => {
		less += `${indent}@${key}: `;

		if (typeof value === 'object') {
			if (Array.isArray(value)) {
				const indent2 = indentStyle.repeat(level + 1);
				less += '{\n';

				forEach(value, (val1) => {
					if (Array.isArray(val1)) {
						less += `${indent2}`;
						forEach(val1, (val2) => {
							less += `${val2} `;
						});
						less = `${less.slice(0, -1)},\n`;
					} else {
						less += `${indent2}${val1},\n`;
					}
				});

				less = less.slice(0, -2);
				less += `\n${indent}}`;

			} else {
				less += `{\n${objToLess(value, level + 1)}\n${indent}}`;
			}
		} else {
			less += `'`+value+`'`;
		}

		less += `${level === 0 ? ';\n' : ';'}\n`;
	});

	less = less.slice(0, -2);



	return less;
};

module.exports = objToLess;
