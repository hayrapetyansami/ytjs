const createElement = (parent, elem, className, content) => {
	const el = document.createElement(elem);
	el.classList.add(className);
	el.innerHTML = content;
	parent.append(el);
};

const styles = (...arg) => {
	return `${arg}; `;
}

createElement(document.body, "div", "wrapper", `
	<p style="${styles("color: red")}${styles("font-size: 35px")}${styles("font-family: Arial")}">
		Hello my name is mr. Robot
	</p>
`);

createElement(document.querySelector(".wrapper"), "h1", "title", "JS");
createElement(document.querySelector(".wrapper"), "h1", "some", "Googel");