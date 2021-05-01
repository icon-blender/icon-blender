
/**
 * Build scss files from icon definitions in @iconify/collections-json
 *
 */
const fs			= require('fs');
const path			= require('path');
const process		= require('process');
const objToSCSS		= require('../lib/obj-to-scss');
const collections	= require('@iconify/json').collections();
const crypto		= require('crypto');


const {SVG, Collection} = require('@iconify/json-tools');

const all_icons			= {};
var readme_list			= {};
var total_gross			= 0;
var duplicates			= 0;
var dups_cross_coll		= 0;
var total_collections	= 0;
var search_list			= {};
var search_list_coll	= {};
var undefined_count		= 0;


var svg_options			= {
	height:false,
};

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
	const html_path		= path.resolve( process.cwd(),'site','html',collection_key+'.html');
	const var_name		= 'icons-'+collection_key;
	var json			= {};
	var html			= '<style>svg{height:1em}</style>';
	svg_count			= 0;
	json[var_name]		= {};
	var samples			= [];
	const samples_alt	= [];

	let collection		= new Collection();

	collection.loadIconifyCollection(collection_key);
	collection.listIcons(true).forEach(icon => {

		total_gross++;

		const svg_data			= collection.getIconData(icon); // getIconData(icon,false) results in undefined values in the svg
		const svg				= new SimpleSVG(svg_data);
		const markup			= svg.getSVG().replace(' xmlns:xlink="http://www.w3.org/1999/xlink"','');
		const hash				= crypto.createHash('sha256').update(markup).digest('base64');
		json[var_name][icon]	= markup

		const orig_svg			= new SVG(svg_data);
		const orig_mark			= orig_svg.getSVG();
		const orig_hash			= crypto.createHash('sha256').update(orig_mark).digest('base64');


		var unique				= collection_key + '-' + icon;

		if( orig_mark.indexOf('undefined') != -1 ){
			undefined_count++;
			console.log('undefined for svg',unique);
			return;
		}

		if( icon in collection_meta.samples ){
			samples.push(markup);
		}else if( samples_alt.length < 3 ){
			samples_alt.push(markup);
		}


		//delete svg_data.width;
		//delete svg_data.height;
		//delete svg_data.body;


		if( hash in all_icons ){

			search_list[hash]['alias'] = search_list[hash]['alias'] || [];
			search_list[hash]['alias'].push(unique);

			if( orig_hash != all_icons[hash].orig_hash ){
				console.log('===================');
				console.log('==duplicate found==', collection_key,icon);
				console.log('---new icon---');
				console.log(svg_data);
				console.log('---existing icon---');
				console.log(all_icons[hash]);

			}
			duplicates++;

			if( collection_key != all_icons[hash].collection ){
				dups_cross_coll++;
			}

		}else{
			svg_count++;

			search_list[hash] = {
				//svg: markup,
				set: collection_key,
				name: icon,
			};


			all_icons[hash] = {
				collection: collection_key,
				icon: icon,
				svg_data: svg_data,
				orig_mark: orig_mark,
				orig_hash: orig_hash,
				unique: unique,
			}
		}


		html					+= '<h3>'+icon+'</h3>';
		html					+= '<div height="2em">';
		html					+= markup;
		html					+= orig_mark;
		html					+= '</div>';
	});



	/*
	"url": "https://github.com/Templarian/MaterialDesignLight",
	"palette": "Colorless",
	"category": "General"
	*/
	var add_samples = 3 - samples.length;
	if( add_samples > 0 ){
		samples = samples.concat( samples_alt );
	}
	samples = samples.slice(0,3);

	search_list_coll[collection_key] = {
		name: collection_meta.name,
		value: collection_key,
		license: collection_meta.license,
		optgroup: 'collections',
		total: svg_count,
		samples: samples,
	};


	var scss = objToSCSS(json);
	fs.writeFileSync(scss_path, scss);
	fs.writeFileSync(html_path, html);

	return svg_count;
}


console.log('Building icon scss from @iconify/json');

for(const collection_key in collections){

	total_collections++;
	let collection_meta				= collections[collection_key];
	readme_list[collection_key]		= '<li><a href="'+ collection_meta.url+'">'+collection_meta.name +'</a> ('+collection_key+')</li>';
	CreateCollectionSCSS(collection_key,collection_meta);
}



// save search_list
const search_list_path		= path.resolve( process.cwd(),'site','search_list.json');
fs.writeFileSync(search_list_path, JSON.stringify( Object.values(search_list), null, '\t') );

// save search_list_coll
const search_list_coll_path		= path.resolve( process.cwd(),'site','search_list_coll.json');
fs.writeFileSync(search_list_coll_path, JSON.stringify( search_list_coll, null, '\t') );


readme_list = Object.keys(readme_list).sort().reduce(
  (obj, key) => {
    obj[key] = readme_list[key];
    return obj;
  },
  {}
);



var total_icons = Object.keys(all_icons).length;
console.log('Complete. ' + total_icons + ' icons in ' + total_collections + ' icon collections ');
console.log('Total gross', total_gross,'Duplicates',duplicates,'Dups across collections',dups_cross_coll);
console.log('Undefined count',undefined_count);


//console.log('README list',Object.values(readme_list).join("\n"));
