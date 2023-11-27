// class Person {
//   constructor() {
//     this.gender = "male";
//   }
//   printPerson() {}
// }
// class User extends Person {
//   constructor() {
//     super();
//     this.name = "kunal";
//   }
//   printUser() {}
// }
// var u = new User();
// console.log(u);

// class MyLibrary {
// 	constructor(start = []) {
// 		this._list = start
// 		this._groupKeys = []
// 		this._map = new Map()
// 		this._curr = 0
// 	}

// 	get all() {
// 		return this._list
// 	}

// 	set all(stat = false) {
// 		this._list.forEach((x, id) => {
// 			this._list[id].hidden = stat
// 		})
// 	}

// 	get current() {
// 		return this._list[this._curr]
// 	}
// 	set current(index) {
// 		let el = this._list.findIndex((x) => x.id == index)
// 		if (el) {
// 			this._curr = el
// 		} else {
// 			return false
// 		}
// 	}

// 	groups() {
// 		return this._groupKeys
// 	}

// 	init() {
// 		const keyGetter = (d) => d.svg
// 		this._list.forEach((item) => {
// 			const key = keyGetter(item)
// 			const collection = this._map.get(key)
// 			if (!collection) {
// 				this._map.set(key, [item])
// 			} else {
// 				collection.push(item)
// 			}
// 		})
// 		for (const key of this._map.keys()) {
// 			this._groupKeys.push(key)
// 		}
// 	}
// }

// export default MyLibrary
const resource = {
	wood: {
		slug: 'wood',
		name: 'Wood',
		description: 'Brown stuff that grows on trees.',
		action: 'Chop',
		total: 0,
		clickIncrement: 1,
		autoIncrement: 0,
		storage: {
			total: 1,
			max: 100,
			cost: {
				wood: 50,
				stone: 50
			},
			costIncrease: 1.1
		}
	},
	stone: {
		slug: 'stone',
		name: 'Stone',
		description: 'Hard stuff.',
		action: 'Mine',
		total: 0,
		clickIncrement: 1,
		autoIncrement: 0,
		max: 100,
		storage: {
			total: 1,
			max: 100,
			cost: {
				wood: 50,
				stone: 50
			},
			costIncrease: 1.1
		},
		chance: {
			iron: 30,
			food: 10
		}
	},
	food: {
		slug: 'food',
		name: 'Food',
		description: 'Can be cooked to provide nutrition.',
		action: 'Hunt',
		total: 0,
		clickIncrement: 1,
		autoIncrement: 0,
		chanceIncrement: 1,
		max: 100,
		storage: {
			total: 1,
			max: 100,
			cost: {
				wood: 50,
				stone: 50
			},
			costIncrease: 1.1
		}
	},
	iron: {
		slug: 'iron',
		name: 'Iron',
		description: 'Even harder stuff. Bit rusty.',
		action: 'Recover',
		total: 0,
		clickIncrement: 1,
		autoIncrement: 0,
		chanceIncrement: 1,
		max: 100,
		storage: {
			total: 1,
			max: 100,
			cost: {
				wood: 100,
				stone: 100
			},
			costIncrease: 1.1
		}
	}
}

const workers = {
	lumberjack: {
		slug: 'lumberjack',
		name: 'Lumberjack',
		description: 'A person who likes to chop wood.',
		resource: 'wood',
		total: 0,
		autoIncrement: 1,
		cost: {
			food: 10
		},
		costIncrease: 1.1
	},
	miner: {
		slug: 'miner',
		name: 'Miner',
		description: 'Not a young person.',
		total: 0,
		increment: 1,
		resource: 'stone',
		cost: {
			food: 10
		},
		costIncrease: 1.1
	},
	hunter: {
		slug: 'hunter',
		name: 'Hunter',
		description: 'The opposite to a gatherer.',
		resource: 'food',
		total: 0,
		autoIncrement: 1,
		cost: {
			food: 10
		},
		costIncrease: 1.1,
		chance: {
			// Percent
			skin: 10
		}
	},
	ironcooker: {
		slug: 'ironcooker',
		name: 'Ironcooker',
		description: "Isn't it obvious?",
		resource: 'iron',
		total: 0,
		autoIncrement: 1,
		cost: {
			food: 10,
			stone: 10
		},
		costIncrease: 1.2
	}
}

const buildings = {
	tent: {
		slug: 'tent',
		name: 'Tent',
		description: 'Just like a house but way smaller and made out of fabric.',
		total: 0,
		residents: 1,
		cost: {
			wood: 30
		},
		costIncrease: 1.1
	},
	house: {
		slug: 'house',
		name: 'House',
		description: 'Just like a tent but way bigger and not made out of fabric.',
		total: 0,
		residents: 4,
		cost: {
			wood: 75,
			stone: 10,
			iron: 50
		},
		costIncrease: 1.1
	},
	hostel: {
		slug: 'hostel',
		name: 'Hostel',
		description: 'A bit like a house but not as nice and not as private.',
		total: 0,
		residents: 10,
		cost: {
			wood: 200,
			stone: 30,
			iron: 200
		},
		costIncrease: 1.1
	}
}

const upgrades = {
	twoAxes: {
		name: 'Two Axes',
		description: 'Two wood per click.',
		cost: {
			wood: 200,
			stone: 100,
			meat: 100
		},
		live: false,
		visible: true,
		nextTier: 'fiveAxes'
	},
	fiveAxes: {
		name: 'Five Axes',
		description: 'Five wood per click.',
		cost: {
			wood: 800,
			stone: 400,
			meat: 400
		},
		live: false,
		visible: false,
		nextTier: 'tenAxes'
	},
	tenAxes: {
		name: 'Ten Axes',
		description: 'Ten wood per click.',
		cost: {
			wood: 2000,
			stone: 1000,
			meat: 1000
			// bread: 100
		},
		live: false,
		visible: false
	},
	twoPickaxes: {
		name: 'Two Pickaxes',
		description: 'Two stone per click.',
		cost: {
			wood: 100,
			stone: 200,
			meat: 100
		},
		live: false,
		visible: true,
		nextTier: 'fivePickaxes'
	},
	fivePickaxes: {
		name: 'Five Pickaxes',
		description: 'Five stone per click.',
		cost: {
			wood: 400,
			stone: 800,
			meat: 400
		},
		live: false,
		visible: false,
		nextTier: 'tenPickaxes'
	},
	tenPickaxes: {
		name: 'Ten Pickaxes',
		description: 'Ten stone per click.',
		cost: {
			wood: 1000,
			stone: 2000,
			meat: 1000
			// bread: 100
		},
		live: false,
		visible: false
	},
	twoArrows: {
		name: 'Two Arrows',
		description: 'Two meat per click.',
		cost: {
			wood: 100,
			stone: 100,
			meat: 200
		},
		live: false,
		visible: true,
		nextTier: 'fiveArrows'
	},
	fiveArrows: {
		name: 'Five Arrows',
		description: 'Five meat per click.',
		cost: {
			wood: 400,
			stone: 400,
			meat: 800
		},
		live: false,
		visible: false,
		nextTier: 'tenArrows'
	},
	tenArrows: {
		name: 'Ten Arrows',
		description: 'Ten meat per click.',
		cost: {
			wood: 1000,
			stone: 1000,
			meat: 2000
			// bread: 100
		},
		live: false,
		visible: false
	},

	biggerTents: {
		name: 'Bigger Tents',
		description: 'Tents built from now on can hold three people.',
		cost: {
			wood: 100,
			stone: 30,
			iron: 20,
			meat: 200
		},
		live: false,
		visible: true
	}
}

const meta = {
	devmode: false,
	versionNumber: 'alpha 0.10.2',
	fps: 100,
	tick: 1000,
	saveGameInterval: 30000,
	city: 'Gotham City',
	name: 'Bruce Wayne',
	maxPopulation: 0,
	population: 0
}

export let rpg = { resource, workers, buildings, upgrades, meta }
export default rpg

class Rocket {
	constructor({ slug, name, description, action, total }) {
		this.slug = slug
		this.name = name
		this.description = description
		this.action = action
		this.total = total
	}
}

class Res extends Rocket {
	constructor({
		slug,
		name,
		description,
		action,
		total,
		clickIncrement,
		autoIncrement,
		storage
	}) {
		super(slug, name, description, action, total)
		this.clickIncrement = clickIncrement
		this.autoIncrement = autoIncrement
		this.storage = storage
	}
	get details() {
		return {
			slug: this.slug,
			name: this.name,
			description: this.description,
			action: this.action,
			total: this.total,
			clickIncrement: this.clickIncrement,
			autoIncrement: this.autoIncrement,
			storage: this.storage
		}
	}

	set details(newValue) {
		if (typeof newValue === 'number') {
			this.total = newValue
		} else {
			console.error('Invalid nInt: ' + newValue)
		}
	}
}

let food = new Res(rpg.resource.wood)
