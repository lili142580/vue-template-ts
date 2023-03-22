const dounce = {
	dounce: {
		mounted(el: Element, binding: any) {
			let timer: any = null
			el.addEventListener('blur', () => {
				if (timer) {
					clearInterval(timer)
				}
				timer = setTimeout(() => {
					binding.value()
				}, 1000)
			})
		},
	},
}
export default dounce
