ServerEvents.recipes(IRRebirth => {
    IRRebirth.shaped(
        Item.of('minecraft:iron_helmet'), 
        [
          'AAA',
          'ABA'
        ],
        {
          A: '#forge:plates/iron',
          B: 'minecraft:leather_helmet'
        }
      ).id('minecraft:iron_helmet')
    IRRebirth.shaped(
        Item.of('minecraft:iron_chestplate'), 
        [
          'ABA',
          'AAA',
          'AAA'
        ],
        {
          A: '#forge:plates/iron',
          B: 'minecraft:leather_chestplate'
        }
      ).id('minecraft:iron_chestplate')
    IRRebirth.shaped(
        Item.of('minecraft:iron_leggings'), 
        [
          'AAA',
          'ABA',
          'A A'
        ],
        {
          A: '#forge:plates/iron',
          B: 'minecraft:leather_leggings'
        }
      ).id('minecraft:iron_leggings')
    IRRebirth.shaped(
        Item.of('minecraft:iron_boots'), 
        [
          'A A',
          'ABA'
        ],
        {
          A: '#forge:plates/iron',
          B: 'minecraft:leather_boots'
        }
      ).id('minecraft:iron_boots')
})