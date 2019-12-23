function shadowizrdiq(options){
	let images=document.querySelectorAll('.shadowizrdiq');
	if(options.shado_type==='hard')
		options.shado_type='0px'
	else
		options.shado_type='15px'

images.forEach(imqge=>{
	image.style.boxShadow=`10px 10px ${options.shado_type} 10px  rgba(0,0,0,0.12)`

	if (options.padding) {
		image.style.padding='1em';
	}
})
}
module.exports.shadowizrdiq=shadowizrdiq