const fs				= require('fs');
const path				= require('path');
const process			= require('process');
const sass				= require('sass');

const scss_path			= path.resolve( process.cwd(),'scss','icon-blender.scss');
const css_path			= path.resolve( process.cwd(),'css','icon-blender.css');

const result			= sass.renderSync({file: scss_path});

fs.writeFileSync(css_path, result.css);
