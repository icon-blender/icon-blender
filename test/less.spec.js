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
  --url: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201792%201408%22%3E%3Cpath%20d%3D%22M1792%201216v128q0%2026-19%2045t-45%2019H64q-26%200-45-19t-19-45v-128q0-26%2019-45t45-19h1664q26%200%2045%2019t19%2045zm-384-384v128q0%2026-19%2045t-45%2019H64q-26%200-45-19T0%20960V832q0-26%2019-45t45-19h1280q26%200%2045%2019t19%2045zm256-384v128q0%2026-19%2045t-45%2019H64q-26%200-45-19T0%20576V448q0-26%2019-45t45-19h1536q26%200%2045%2019t19%2045zM1280%2064v128q0%2026-19%2045t-45%2019H64q-26%200-45-19T0%20192V64q0-26%2019-45T64%200h1152q26%200%2045%2019t19%2045z%22%20fill%3D%22currentColor%22/%3E%3C/svg%3E');
}`;

		renderFile(less_file,(err,output)=>{
			expect(output.css.trim()).toBe(expected);
			done();

		});

	});


	test('icon()',(done)=>{

		const less_file		= path.resolve(process.cwd(), 'test/icon.less');
		var expected		= `.ib-fa-align-left {
  --url: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201792%201408%22%3E%3Cpath%20d%3D%22M1792%201216v128q0%2026-19%2045t-45%2019H64q-26%200-45-19t-19-45v-128q0-26%2019-45t45-19h1664q26%200%2045%2019t19%2045zm-384-384v128q0%2026-19%2045t-45%2019H64q-26%200-45-19T0%20960V832q0-26%2019-45t45-19h1280q26%200%2045%2019t19%2045zm256-384v128q0%2026-19%2045t-45%2019H64q-26%200-45-19T0%20576V448q0-26%2019-45t45-19h1536q26%200%2045%2019t19%2045zM1280%2064v128q0%2026-19%2045t-45%2019H64q-26%200-45-19T0%20192V64q0-26%2019-45T64%200h1152q26%200%2045%2019t19%2045z%22%20fill%3D%22currentColor%22/%3E%3C/svg%3E');
}`;

		renderFile(less_file,(err,output)=>{
			expect(output.css.trim()).toBe(expected);
			done();

		});

	});


	test('ib-stroke-width',(done)=>{

		const less_file		= path.resolve(process.cwd(), 'test/iconStrokeWidth.less');
		var expected		= `.test {
  --url: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2012h4l3%208l4-16l3%208h4%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E');
}`;

		renderFile(less_file,(err,output)=>{
			expect(output.css.trim()).toBe(expected);
			done();

		});

	});


});
