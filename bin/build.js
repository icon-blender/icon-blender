
/**
 * Build scss files from icon definitions in @iconify/collections-json
 *
 */
const fs			= require('fs');
const path			= require('path');
const process		= require('process');
const objToSCSS		= require('./obj-to-scss');
const objToLess		= require('./obj-to-less');
const collections	= require('@iconify/json').collections();
const crypto		= require('crypto');


const {SVG, Collection} = require('@iconify/json-tools');

const all_icons			= {};
var readme_list			= {};
var total_gross			= 0;
var duplicates			= 0;
var total_collections	= 0;

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


function CreateCollectionSCSS( collection_key, collection_meta ){

	const scss_path		= path.resolve( process.cwd(),'scss','icons',collection_key+'.scss');
	const less_path		= path.resolve( process.cwd(),'less','icons',collection_key+'.less');
	const html_path		= path.resolve( process.cwd(),'html',collection_key+'.html');
	const var_name		= 'icons-'+collection_key;
	var json			= {};
	var html			= '<style>svg{height:1em}</style>';
	json[var_name]		= {};
	let collection		= new Collection();

	collection.loadIconifyCollection(collection_key);
	collection.listIcons(true).forEach(icon => {

		if( icon == '__prefix' ){
			throw `icon with name '__prefix' found in collection ${collection_key}`;
		}

		total_gross++;

		const svg_data			= collection.getIconData(icon);
		const svg				= new SimpleSVG(svg_data);
		const markup			= svg.getSVG().replace('xmlns:xlink="http://www.w3.org/1999/xlink" ','');
		const hash				= crypto.createHash('sha256').update(markup).digest('base64');

		const orig_svg			= new SVG(svg_data);
		const orig_mark			= orig_svg.getSVG().replace('xmlns:xlink="http://www.w3.org/1999/xlink" ','');
		const orig_hash			= crypto.createHash('sha256').update(orig_mark).digest('base64');


		if( hash in all_icons ){
			if( orig_hash != all_icons[hash].orig_hash ){
				console.log('===================');
				console.log('==duplicate found==', collection_key,icon);
				console.log('---new icon---');
				console.log(svg_data);
				console.log('---existing icon---');
				console.log(all_icons[hash]);

			}
			duplicates++;
		}else{
			all_icons[hash] = {
				collection: collection_key,
				icon: icon,
				svg_data: svg_data,
				orig_mark: orig_mark,
				orig_hash: orig_hash,
			}
		}

		json[var_name][icon]	= markup;



		html					+= '<h3>'+icon+'</h3>';
		html					+= '<div height="2em">';
		html					+= markup;
		html					+= orig_mark;
		html					+= '</div>';
	});

	readme_list[collection_key]		= `<tr><td><a href="${collection_meta.url}">${collection_meta.name}</a></td><td>${collection_key}</td><td>${Object.keys(json[var_name]).length}</td></tr>`;

	json[var_name]['__prefix']		= collection_key;
	var scss 						= objToSCSS(json);
	var less						= objToLess(json);

	fs.writeFileSync(scss_path, scss);
	fs.writeFileSync(less_path, less);
	//fs.writeFileSync(html_path, html);
}


console.log('Building icon scss from @iconify/json');

for(const collection_key in collections){

	total_collections++;
	let collection_meta					= collections[collection_key];

	CreateCollectionSCSS(collection_key,collection_meta);
}


readme_list = Object.keys(readme_list).sort().reduce(
  (obj, key) => {
    obj[key] = readme_list[key];
    return obj;
  },
  {}
);

var total_icons = Object.keys(all_icons).length;
console.log('Complete. ' + total_icons + ' icons in ' + total_collections + ' icon collections ');
console.log('Total gross', total_gross,'Duplicates',duplicates);


var readme_content = `<table><tr><th>Package Name</th><th>Prefix</th><th>Icons</th></tr>
${Object.values(readme_list).join("\n")}
</table>`;

//console.log('README list',readme_content);
