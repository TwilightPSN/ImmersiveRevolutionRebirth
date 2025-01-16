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
      IRRebirth.shaped(
        Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: '#forge:storage_blocks/hop_graphite',
          B: '#forge:dyes/blue'
        }
      )
})