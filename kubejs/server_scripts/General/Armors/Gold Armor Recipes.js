ServerEvents.recipes(IRRebirth => {
    IRRebirth.shaped(
        Item.of('minecraft:golden_helmet'), 
        [
          'AAA',
          'ABA'
        ],
        {
          A: '#forge:plates/gold',
          B: 'minecraft:iron_helmet'
        }
      ).id('minecraft:golden_helmet')
    IRRebirth.shaped(
        Item.of('minecraft:golden_chestplate'), 
        [
          'ABA',
          'AAA',
          'AAA'
        ],
        {
          A: '#forge:plates/gold',
          B: 'minecraft:iron_chestplate'
        }
      ).id('minecraft:golden_chestplate')
    IRRebirth.shaped(
        Item.of('minecraft:golden_leggings'), 
        [
          'AAA',
          'ABA',
          'A A'
        ],
        {
          A: '#forge:plates/gold',
          B: 'minecraft:iron_leggings'
        }
      ).id('minecraft:golden_leggings')
    IRRebirth.shaped(
        Item.of('minecraft:golden_boots'), 
        [
          'A A',
          'ABA'
        ],
        {
          A: '#forge:plates/gold',
          B: 'minecraft:iron_boots'
        }
      ).id('minecraft:golden_boots')
})