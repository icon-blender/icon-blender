/**
 * Convet a javascript object to SCSS
 * Modified from https://github.com/absolunet/node-json-to-scss/blob/master/index.js
 *
 */

const forEach = require('lodash.foreach');
const mapKeys = require('lodash.mapkeys');


let indentStyle = `\t`;

const objToSCSS = (chunk, level = 0) => {
	const indent  = indentStyle.repeat(level);
	let scss = '';


	mapKeys(chunk, (value, key) => {
		if (level === 0) {
			scss += `$${key}: `;
		} else {
			scss += `${indent}'${key}': `;
		}

		if (typeof value === 'object') {
			if (Array.isArray(value)) {
				const indent2 = indentStyle.repeat(level + 1);
				scss += '(\n';

				forEach(value, (val1) => {
					if (Array.isArray(val1)) {
						scss += `${indent2}`;
						forEach(val1, (val2) => {
							scss += `${val2} `;
						});
						scss = `${scss.slice(0, -1)},\n`;
					} else {
						scss += `${indent2}${val1},\n`;
					}
				});

				scss = scss.slice(0, -2);
				scss += `\n${indent})`;

			} else {
				scss += `(\n${objToSCSS(value, level + 1)}\n${indent})`;
			}
		} else {
			scss += JSON.stringify(value); //`'`+value+`'`
		}

		scss += `${level === 0 ? ';\n' : ','}\n`;
	});

	scss = scss.slice(0, -2);



	return scss;
};

module.exports = objToSCSS;
