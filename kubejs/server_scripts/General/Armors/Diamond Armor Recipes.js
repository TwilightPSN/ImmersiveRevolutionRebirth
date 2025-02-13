ServerEvents.recipes(IRRebirth => {
    IRRebirth.shaped(
        Item.of('minecraft:diamond_helmet'), 
        [
          'AAA',
          'ABA'
        ],
        {
          A: '#forge:plates/diamond',
          B: 'minecraft:golden_helmet'
        }
      ).id('minecraft:diamond_helmet')
    IRRebirth.shaped(
        Item.of('minecraft:diamond_chestplate'), 
        [
          'ABA',
          'AAA',
          'AAA'
        ],
        {
          A: '#forge:plates/diamond',
          B: 'minecraft:golden_chestplate'
        }
      ).id('minecraft:diamond_chestplate')
    IRRebirth.shaped(
        Item.of('minecraft:diamond_leggings'), 
        [
          'AAA',
          'ABA',
          'A A'
        ],
        {
          A: '#forge:plates/diamond',
          B: 'minecraft:golden_leggings'
        }
      ).id('minecraft:diamond_leggings')
    IRRebirth.shaped(
        Item.of('minecraft:diamond_boots'), 
        [
          'A A',
          'ABA'
        ],
        {
          A: '#forge:plates/diamond',
          B: 'minecraft:golden_boots'
        }
      ).id('minecraft:diamond_boots')
})