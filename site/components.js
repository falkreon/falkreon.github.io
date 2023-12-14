const projectCardTemplate = document.createElement('template');
projectCardTemplate.innerHTML = `
	<style>
		.project-card {
			display: flex;
			box-sizing: border-box;
			width: 340px;
			min-height: 9em;
			border: 1px solid rgba(0, 0, 0, 0.5);
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8);
			background: background: rgb(35,7,66);
			background: linear-gradient(
				139deg,
				rgba(38,7,66,1) 19%,
				rgba(42,16,70,1) 35%,
				rgba(46,22,74,1) 45%,
				rgba(50,7,64,1) 65%
				);
			border-radius: 8px;
			margin: 0.5em;
			
			flex-direction: row;
			flex-wrap: nowrap;
		}
		
		.project-card:hover {
			box-shadow: 0 0 2px 1px var(--hilight);
		}
		
		.project-card img {
			flex-grow: 0;
			flex-shrink: 1.0;
			width: 4em;
			height: 4em;
			margin: 1em;
			object-fit: contain;
			image-rendering: pixelated;
		}
		
		.project-card a {
			display: flex;
			text-decoration: none;
			color: var(--text-dark) !important;
			margin: 0;
		}
		.project-card div {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			flex-basis: 6em;
			flex-grow: 1;
			margin: 0;
			padding: 0.5em;
		}
		.project-card h1 {
			font-size: 120%;
			font-weight: bold;
			margin: 0.2em;
		}
	</style>
	<div class="project-card">
		<a>
			<img />
			<div>
				<h1></h1>
				<p>
					<slot />
				</p>
			</div>
		</a>
	</div>
`;

class ProjectCard extends HTMLElement {
	constructor() {
		super();
		
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(projectCardTemplate.content.cloneNode(true));
		
	}
	
	connectedCallback() {
		let name = this.getWithFallback("name", "Untitled");
		let img = this.getWithFallback("image", "image/project/missing.png");
		let link = this.getWithFallback("href", "#");
		
		this.shadowRoot.querySelector("h1").innerText = name;
		this.shadowRoot.querySelector("img").src = img;
		this.shadowRoot.querySelector("a").href = link;
	}
	
	getWithFallback(attrName, fallback) {
		let attr = this.getAttribute(attrName);
		if (attr==null) return fallback;
		return attr;
	}
}


window.customElements.define("project-card", ProjectCard);
