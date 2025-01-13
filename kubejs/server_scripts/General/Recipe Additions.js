ServerEvents.recipes(IRRebirth => {

    IRRebirth.shaped(
        Item.of('minecraft:chest', 2), 
        [
          'AAA',
          'A A',
          'AAA'
        ],
        {
          A: '#minecraft:logs',
        }
      )
    IRRebirth.shaped(
        Item.of('minecraft:stick', 4), 
        [
          'A',
          'A'
        ],
        {
          A: '#minecraft:planks',
        }
      )
    IRRebirth.shaped(
        Item.of('minecraft:stick'), 
        [
          'A',
          'A'
        ],
        {
          A: 'minecraft:bamboo',
        }
      )
    IRRebirth.shapeless(
        Item.of('minecraft:flint'),
        [
          '3x minecraft:gravel'
        ]
      )
      IRRebirth.shaped(
        Item.of('immersiveengineering:hammer'), 
        [
          ' AB',
          ' CA',
          'C  '
        ],
        {
          A: '#forge:plates/iron',
          B: 'immersiveengineering:hemp_fiber',
          C: 'immersiveengineering:stick_treated'
        }
      )
})