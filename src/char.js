class Char {
  constructor(name, basehp, sc) {
    this.name = name
    this.hp = this.basehp = basehp
    this.sc = sc
    this.handcards = []
    this.uselimit = 3
    this.use = []
    this.card = undefined
    this.conds = {}
    this.lvl = {num: 1, round: -1}
  }

  sufferDamage(dmg) {
    this.hp -= dmg
    if (this.hp < 0) {
      this.hp = 0
    }
  }

  setCond(cond, args) {
    this.conds[cond] = args
  }

  levelUp(num, round) {
    this.lvl.num += num
    this.lvl.round = round
    if (this.lvl.num > 3) {
      this.lvl.num = 3
    }
  }

  levelDown(num) {
    this.lvl.num -= num
    if (this.lvl.num <= 1) {
      this.lvl.num = 1
      this.lvl.round = -1
    }
  }
}

class Reimu extends Char {
  constructor() {
    super(
      'Reimu',
      3000,
      []
    )
  }
}

class Marisa extends Char {
  constructor() {
    super(
      'Marisa',
      2400,
      []
    )
  }
}

module.exports = {
	Reimu,
  Marisa
}