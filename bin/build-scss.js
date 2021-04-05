
/**
 * Build scss files from icon definitions in @iconify/collections-json
 *
 */
const fs			= require('fs');
const path			= require('path');
const process		= require('process');
const objToSCSS		= require('../lib/obj-to-scss');
const collections	= require('@iconify/json').collections();

const {SVG, Collection} = require('@iconify/json-tools');

const svg_opts = {
	width: false,
	height: false,
	preserveAspectRatio:null,
}

class SimpleSVG extends SVG{

	/**
	 * We only want the viewBox and body
	 *
	 */
	getAttributes(props){
		var result	= super.getAttributes(props);

		return {
			attributes: {
				viewBox: result.attributes.viewBox,
			},
			body: result.body,
			style: '',
		};
	}

}


function CreateCollectionSCSS( collection_key ){

	const scss_path		= path.resolve( process.cwd(),'scss/icons',collection_key+'.scss');
	const var_name		= 'icons-'+collection_key;
	var json			= {};
	json[var_name]		= {};

	let collection = new Collection();

	collection.loadIconifyCollection(collection_key);
	collection.listIcons(true).forEach(icon => {

	    const svg				= new SimpleSVG(collection.getIconData(icon));
		json[var_name][icon]	= svg.getSVG(svg_opts);
	});

	var scss = objToSCSS(json);
	fs.writeFileSync(scss_path, scss);
}


console.log('Building icon scss from @iconify/json');
var total_collections	= 0;
var total_icons			= 0;
var readme_list			= {};

for(const collection_key in collections){

	total_collections++;
	CreateCollectionSCSS(collection_key);

	let collection					= collections[collection_key];
	readme_list[collection_key]		= '<li><a href="'+ collection.url+'">'+collection.name +'</a> ('+collection_key+')</li>';

	total_icons						+= collection.total;
}


readme_list = Object.keys(readme_list).sort().reduce(
  (obj, key) => {
    obj[key] = readme_list[key];
    return obj;
  },
  {}
);

console.log('Complete. ' + total_icons + ' icons in ' + total_collections + ' icon collections');

//console.log('README list',Object.values(readme_list).join("\n"));
