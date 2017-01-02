class Edge {
	constructor(length, type) {
		this.length = length;
		this.type = type;
	}

	get edgeLength() {
		return this.length;
	}

	get edgeType() {
		return this.type;
	}
}