
const {SVG} = require('@iconify/json-tools');

class BlenderSVG extends SVG{

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

	/**
	 * Get svg markup
	 *
	 */
	getSVG(){
		var markup = super.getSVG();
		if( markup.indexOf('xlink:href') == -1 ){
			markup				= markup.replace(' xmlns:xlink="http://www.w3.org/1999/xlink"','');
		}
		return markup;
	}

}

module.exports = BlenderSVG;
