const path			= require('path');
const fs			= require('fs');
const less			= require('less');


function renderFile(less_file,callback){

	fs.readFile(less_file, 'utf8', function (err,content) {
		less.render(content, {}, (error,output)=>{
			if( error ){
				console.log('less error',error);
			}
			callback(error,output);
		});
	});
}


describe('Less',()=>{
	test('iconUrl()',(done)=>{

		const less_file		= path.resolve(process.cwd(), 'test/iconUrl.less');
		var expected		= `.test {
  --url: url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1408"%3e%3cpath d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 576V448q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 64v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1152q26 0 45 19t19 45z" fill="currentColor"/%3e%3c/svg%3e');
}`;

		renderFile(less_file,(err,output)=>{
			expect(output.css.trim()).toBe(expected);
			done();

		});

	});


	test('icon()',(done)=>{

		const less_file		= path.resolve(process.cwd(), 'test/icon.less');
		var expected		= `.ib-fa-align-left {
  --url: url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1408"%3e%3cpath d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 576V448q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 64v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1152q26 0 45 19t19 45z" fill="currentColor"/%3e%3c/svg%3e');
}`;

		renderFile(less_file,(err,output)=>{
			expect(output.css.trim()).toBe(expected);
			done();

		});

	});


	test('ib-stroke-width',(done)=>{

		const less_file		= path.resolve(process.cwd(), 'test/iconStrokeWidth.less');
		var expected		= `.test {
  --url: url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3e%3cpath d="M3 12h4l3 8l4-16l3 8h4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/%3e%3c/svg%3e');
}`;

		renderFile(less_file,(err,output)=>{
			expect(output.css.trim()).toBe(expected);
			done();

		});

	});


});
