(function () {
	'use strict'
	let exp = {}


	exp.create = (conf) => {
		let fd = new Map()
		let validators = new Map()
		let vGetters = new Map()
		
		conf.fields.forEach((field) => {
			let fName = field.$el[0].name
			
			fd.set(fName,null)
			validators.set(fName,field.validate)
			
			field.$el
				.on('blur', (evt) => {
					var val
					if(field.vGetter){
						val = field.vGetter(evt)
					}else{
						val = field.$el[0].value
					}
					
					
					
				 })
				.on('focus', (evt) => {
					
				 })

		})

		conf.btn.$el.on('submit', (evt)=>{
			for(let field of fd){
				
			}
		})
	}

	window.LValidator = exp

})()