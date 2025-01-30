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
      IRRebirth.shapeless(
        Item.of('kubejs:acidic_redstone', 9),
        [
          'kubejs:acidic_redstone_block'
        ]
      )
      IRRebirth.shaped(
        Item.of('kubejs:acidic_redstone_block'), 
        [
          'AAA',
          'AAA',
          'AAA'
        ],
        {
          A: 'kubejs:acidic_redstone'
        }
      )
      IRRebirth.shapeless(
        Item.of('minecraft:quartz', 4),
        [
          'minecraft:quartz_block'
        ]
      )
      IRRebirth.shapeless(
        Item.of('minecraft:glowstone_dust', 4),
        [
          'minecraft:glowstone'
        ]
      )
      IRRebirth.shaped(
        Item.of('immersiveengineering:ingot_hop_graphite'), 
        [
          'AAA',
          'AAA',
          'AAA'
        ],
        {
          A: '#forge:nuggets/hop_graphite'
        }
      )
      IRRebirth.shapeless(
        Item.of('kubejs:hop_graphite_nugget', 9),
        [
          '#forge:ingots/hop_graphite'
        ]
      )
      IRRebirth.smelting('kubejs:hop_graphite_nugget', '#forge:dusts/hop_graphite')
      IRRebirth.blasting('kubejs:hop_graphite_nugget', '#forge:dusts/hop_graphite')
      IRRebirth.remove({type: 'mekanism:energized_smelter', id: 'minecraft:kjs/hop_graphite_nugget_2'})
})