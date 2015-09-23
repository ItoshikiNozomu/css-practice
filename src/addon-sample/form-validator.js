(function () {
	'use strict'
	let exp = {}


	exp.create = (conf) => {
		let fieldMap = new Map()

		let getValue = (field) => {
			let val
			if (field.vGetter) {
				val = field.vGetter(field.$el)
			} else {
				val = field.$el[0].value
			}
			return val
		}

		conf.fields.forEach((field) => {
			let fName = field.$el[0].name



			fieldMap.set(fName, field)



			field.$el
				.on('blur', (evt) => {


					let vRet = field.validate(getValue(field))

					if (vRet instanceof Promise) {
						vRet.then((vRet)=>{
							field.onBlur(vRet,field.$el)
							field.isLegal = !!vRet
						}, () => { })
					} else {
						field.onBlur(vRet,field.$el)
						field.isLegal = !!vRet
					}


				})
				.on('focus', (evt) => {
					
					field.onFocus(getValue(field),field.$el)
					
				})

		})

		conf.btn.$el.on('submit', (evt) => {
			for (let field of fieldMap) {
				
			}
		})
	}

	window.LValidator = exp

})()


