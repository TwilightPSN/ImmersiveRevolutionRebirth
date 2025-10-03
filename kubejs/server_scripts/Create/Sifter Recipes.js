ServerEvents.recipes(IRRebirth => {
    IRRebirth.remove({id: 'createsifter:sifting/gravel_brass_mesh'})
    IRRebirth.remove({id: 'createsifter:sifting/gravel_zinc_mesh'})
    IRRebirth.remove({id: 'createsifter:sifting/gravel_andesite_mesh'})
    IRRebirth.remove({id: 'createsifter:sifting/soul_sand_brass_mesh'})

    IRRebirth.recipes.createsifterSifting(
      [
        Item.of('create:crushed_raw_aluminum').withChance(0.15),
        Item.of('create:crushed_raw_tin').withChance(0.15),
        Item.of('create:crushed_raw_silver').withChance(0.10),
        Item.of('create:crushed_raw_lead').withChance(0.10),
        Item.of('create:crushed_raw_uranium').withChance(0.05),
        Item.of('create:crushed_raw_nickel').withChance(0.05),
        Item.of('immersiveengineering:dust_coke').withChance(0.01),
      ],
    [
        'kubejs:graphite_mesh',
        'immersiveengineering:slag_gravel'
        ]
    )
    IRRebirth.recipes.createsifterSifting(
      [
        Item.of('mekanism:clump_osmium').withChance(0.15),
        Item.of('mekanism:dust_sulfur').withChance(0.10),
        Item.of('mekanism:fluorite_gem').withChance(0.10),
        Item.of('kubejs:acidic_redstone').withChance(0.05),
        Item.of('powah:uraninite_raw').withChance(0.01),
        Item.of('minecraft:echo_shard').withChance(0.01),
      ],
    [
        'kubejs:obsidian_mesh',
        'minecraft:sculk'
        ]
    )
    IRRebirth.recipes.createsifterSifting(
      [
        Item.of('kubejs:raw_draconium').withChance(0.15),
        Item.of('mekanism:pellet_polonium').withChance(0.01),
        Item.of('mekanism:pellet_plutonium').withChance(0.01),
        Item.of('mekanism:pellet_antimatter').withChance(0.01),
      ],
    [
        'kubejs:awakened_mesh',
        'createsifter:crushed_end_stone'
        ]
    )
})