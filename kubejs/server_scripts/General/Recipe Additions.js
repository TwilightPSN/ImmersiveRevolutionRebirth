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
      IRRebirth.shaped(
        Item.of('sophisticatedstorage:stack_upgrade_omega_tier'), 
        [
          'AAA',
          'ABA',
          'CAC'
        ],
        {
          A: '#forge:ingots/the_ultimate',
          B: 'sophisticatedstorage:stack_upgrade_tier_5',
          C: '#forge:storage_blocks/the_ultimate'
        }
      )
      IRRebirth.shaped(
        Item.of('sophisticatedbackpacks:stack_upgrade_omega_tier'), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: '#forge:storage_blocks/the_ultimate',
          B: 'sophisticatedbackpacks:stack_upgrade_tier_4',
        }
      )
      IRRebirth.shapeless(
        Item.of('minecraft:amethyst_shard', 4),
        [
          'minecraft:amethyst_block'
        ]
      )
      IRRebirth.shapeless(
        Item.of('minecraft:redstone', 9),
        [
          'minecraft:redstone_block'
        ]
      )
      IRRebirth.smelting('minecraft:andesite', 'kubejs:cobbled_andesite')
      IRRebirth.shapeless(
        Item.of('kubejs:raw_draconium', 9),
        [
          'kubejs:raw_draconium_block'
        ]
      )
      IRRebirth.shaped(
        Item.of('kubejs:raw_draconium_block'), 
        [
          'AAA',
          'AAA',
          'AAA'
        ],
        {
          A: '#forge:raw_materials/draconium'
        }
      )
      IRRebirth.shaped(
        Item.of('mob_grinding_utils:tank'), 
        [
          'ACA',
          'BDB',
          'ACA'
        ],
        {
          A: '#forge:plates/steel',
          B: '#forge:rods/steel',
          C: 'immersiveengineering:chute_steel',
          D: '#c:glass_blocks'
        }
      ).id('mob_grinding_utils:recipe_tank')
      IRRebirth.shapeless(
        Item.of('kubejs:raw_netherite', 9),
        [
          'kubejs:raw_netherite_block'
        ]
      )
      IRRebirth.shaped(
        Item.of('kubejs:raw_netherite_block'), 
        [
          'AAA',
          'AAA',
          'AAA'
        ],
        {
          A: '#forge:raw_materials/netherite'
        }
      )
      IRRebirth.smelting('minecraft:netherite_scrap', 'kubejs:raw_netherite')
      IRRebirth.blasting('minecraft:netherite_scrap', 'kubejs:raw_netherite')
      IRRebirth.shapeless(
        Item.of('minecraft:raw_iron_block', 4),
        [
          'quark:raw_iron_bricks'
        ]
      ).id('quark:building/crafting/raw_iron_bricks_revert')
      IRRebirth.shapeless(
        Item.of('minecraft:raw_gold_block', 4),
        [
          'quark:raw_gold_bricks'
        ]
      ).id('quark:building/crafting/raw_gold_bricks_revert')
      IRRebirth.shapeless(
        Item.of('minecraft:raw_copper_block', 4),
        [
          'quark:raw_copper_bricks'
        ]
      ).id('quark:building/crafting/raw_copper_bricks_revert')
})