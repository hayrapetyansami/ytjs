class DC {
	constructor(selector){
		this.elems = document.querySelectorAll(selector);
	}

	on(event, callback) {
		for (let i = 0; i < this.elems.length; i++) {
			this.elems[i].addEventListener(event, callback);
		}
		return this;
	}
};


(new DC("h1")).on("mouseenter", (e) => {
	e.target.style.cssText = `
		color: yellow;
		background: black;
		font-size: 100px;
		padding: 15px;
	`;
}).on("mouseleave", (e) => {
	e.target.style.cssText += `
		background: cyan !important;
	`
}).on("click", (e) => {
	document.body.style.cssText = `
		background: #f00;
		padding: 50px;
	`;
});