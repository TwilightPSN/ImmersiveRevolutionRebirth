ServerEvents.recipes(IRRebirth => {
    IRRebirth.remove({ output: 'create:crushing_wheel'})
    IRRebirth.recipes.create.mechanical_crafting(Item.of('create:crushing_wheel', 2), [
      ' ABA ',
      'ACBCA',
      'BACAB',
      'ACBCA',
      ' ABA '
    ], {
      A: 'create:andesite_alloy',
      B: '#forge:treated_wood',
      C: '#forge:rods/brass'
    })
    IRRebirth.recipes.create.mechanical_crafting(Item.of('create:empty_blaze_burner', 4), [
      'ABBA',
      'B  B',
      'BDDB',
      'ACCA'
    ], {
      A: '#forge:plates/iron',
      B: '#forge:rods/iron',
      C: 'minecraft:nether_brick_slab',
      D: 'minecraft:nether_brick_fence'
    })
    IRRebirth.recipes.create.mechanical_crafting('quarryplus:workbench', [
      'ABBBBBBBA',
      'BDCCCCCDB',
      'BCDEEEDCB',
      'BCEFGFECB',
      'BCEGHGECB',
      'BCEFGFECB',
      'BCDEEEDCB',
      'BDCCCCCDB',
      'ABBBBBBBA'
    ], {
      A: '#forge:storage_blocks/steel',
      B: '#forge:plates/silver',
      C: '#forge:plates/constantan',
      D: '#forge:rods/steel',
      E: '#forge:plates/electrum',
      F: '#forge:storage_blocks/gold',
      G: 'minecraft:diamond_pickaxe',
      H: '#forge:storage_blocks/diamond'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:watermill',3), [
      ' AAA ',
      'ABCBA',
      'ACDCA',
      'ABCBA',
      ' AAA '
    ], {
      A: 'immersiveengineering:stick_treated',
      B: '#forge:treated_wood',
      C: '#forge:plates/brass',
      D: '#forge:storage_blocks/steel'
    })
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:windmill', 2), [
      'A       A',
      ' AAB BAA ',
      ' AAABAAA ',
      ' BACCCAB ',
      '  BCDCB  ',
      ' BACCCAB ',
      ' AAABAAA ',
      ' AAB BAA ',
      'A       A'
    ], {
      A: 'immersiveengineering:stick_treated',
      B: '#forge:treated_wood',
      C: '#forge:plates/brass',
      D: '#forge:storage_blocks/steel'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:steel_scaffolding_standard', 8), [
      'AAAAAAA',
      'AB   BA',
      'A C C A',
      'A  C  A',
      'A C C A',
      'AB   BA',
      'AAAAAAA'
    ], {
      A: '#forge:plates/steel',
      B: 'immersiveengineering:component_steel',
      C: '#forge:rods/steel'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:light_engineering', 6), [
      'BBAAABB',
      'BCCDCCB',
      'AIEFEIA',
      'AGIHIGA',
      'AIEFEIA',
      'BCCDCCB',
      'BBAAABB'
    ], {
      A: '#forge:plates/iron',
      B: 'immersiveengineering:component_iron',
      C: '#forge:sheetmetals/iron',
      D: '#forge:sheetmetals/lead',
      E: '#forge:sheetmetals/constantan',
      F: '#forge:sheetmetals/silver',
      G: '#forge:sheetmetals/copper',
      H: '#forge:storage_blocks/iron',
      I: 'create:precision_mechanism'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:heavy_engineering', 6), [
      'BBAAABB',
      'BCCDCCB',
      'AEGDGEA',
      'AGEFEGA',
      'AEGDGEA',
      'BCCDCCB',
      'BBAAABB'
    ], {
      A: '#forge:plates/steel',
      B: 'immersiveengineering:component_steel',
      C: '#forge:sheetmetals/steel',
      D: '#forge:sheetmetals/electrum',
      E: '#forge:plates/electrum',
      F: '#forge:storage_blocks/steel',
      G: 'create:precision_mechanism'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:rs_engineering', 4), [
      'AABAA',
      'ACDCA',
      'BDEDB',
      'ACDCA',
      'AABAA'
    ], {
      A: 'immersiveengineering:component_steel',
      B: '#forge:sheetmetals/iron',
      C: 'create:precision_mechanism',
      D: '#forge:plates/copper',
      E: '#forge:storage_blocks/redstone',
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:fluid_pipe', 10), [
      'AAAAAAA',
      ' ABBBA ',
      ' ABBBA ',
      'AAAAAAA'
    ], {
      A: '#forge:plates/iron',
      B: 'create:fluid_pipe'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:generator', 6), [
      'AABBBAA',
      'ACCDCCA',
      'BCEEECB',
      'BDEDEDB',
      'BCEEECB',
      'ACCDCCA',
      'AABBBAA'
    ], {
      A: '#forge:plates/steel',
      B: '#forge:sheetmetals/steel',
      C: '#forge:sheetmetals/electrum',
      D: 'immersiveengineering:component_iron',
      E: 'immersiveengineering:coil_mv'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:radiator', 6), [
      'AABBBAA',
      'ACCCCCA',
      'BCDEDCB',
      'BDEEEDB',
      'BCDEDCB',
      'ACCCCCA',
      'AABBBAA'
    ], {
      A: '#forge:plates/steel',
      B: '#forge:sheetmetals/steel',
      C: '#forge:plates/constantan',
      D: 'create_sa:heat_engine',
      E: '#forge:sheetmetals/constantan'
    })
    IRRebirth.recipes.create.mechanical_crafting(Item.of('draconicevolution:reactor_prt_stab_frame'), [
      'ABBBA',
      'B C B',
      'BCDDB',
      'B C B',
      'ABBBA'
    ], {
      A: '#forge:plates/refined_obsidian',
      B: '#forge:rods/refined_obsidian',
      C: 'draconicevolution:wyvern_core',
      D: '#forge:storage_blocks/draconium_awakened'
    }).id('draconicevolution:machines/reactor_prt_stab_frame')
    IRRebirth.recipes.create.mechanical_crafting(Item.of('draconicevolution:reactor_prt_focus_ring'), [
      '  AA  ',
      ' ABBA ',
      'AD  CA',
      'AC  DA',
      ' ABBA ',
      '  AA  '
    ], {
      A: '#forge:plates/refined_glowstone',
      B: 'draconicevolution:wyvern_core',
      C: 'mekanism:ultimate_control_circuit',
      D: '#forge:plates/diamond'
    }).id('draconicevolution:machines/reactor_prt_focus_ring')
    IRRebirth.recipes.create.mechanical_crafting(Item.of('draconicevolution:reactor_prt_in_rotor'), [
      'AAAAAAA',
      'ABCDCBA',
      'ABDCDBA',
      'AAAAAAA'
    ], {
      A: '#forge:plates/refined_glowstone',
      B: 'draconicevolution:wyvern_core',
      C: '#forge:ingots/draconium',
      D: '#forge:ingots/draconium_awakened'
    }).id('draconicevolution:machines/reactor_prt_in_rotor')
    IRRebirth.recipes.create.mechanical_crafting(Item.of('draconicevolution:reactor_prt_out_rotor'), [
      'AAAAAAA',
      'ABCDCBA',
      'ABDCDBA',
      'AAAAAAA'
    ], {
      A: '#forge:plates/refined_obsidian',
      B: 'draconicevolution:wyvern_core',
      C: '#forge:ingots/draconium',
      D: '#forge:ingots/draconium_awakened'
    }).id('draconicevolution:machines/reactor_prt_out_rotor')
    IRRebirth.recipes.create.mechanical_crafting(Item.of('draconicevolution:reactor_prt_rotor_full'), [
      ' AAAAA ',
      'ABBBBBA',
      'CCDDDCC',
      'ABBBBBA',
      ' AAAAA '
    ], {
      A: 'draconicevolution:reactor_prt_out_rotor',
      B: 'draconicevolution:reactor_prt_in_rotor',
      C: 'draconicevolution:wyvern_core',
      D: '#forge:ingots/draconium'
    }).id('draconicevolution:machines/reactor_prt_rotor_full')
    IRRebirth.recipes.create.mechanical_crafting(Item.of('draconicevolution:fluid_gate'), [
      'ABBBA',
      'B C B',
      'BCDDB',
      'B C B',
      'ABBBA'
    ], {
      A: '#forge:plates/refined_obsidian',
      B: '#forge:rods/refined_obsidian',
      C: 'draconicevolution:wyvern_core',
      D: 'mekanism:ultimate_fluid_tank'
    }).id('draconicevolution:fluid_gate')
    IRRebirth.recipes.create.mechanical_crafting(Item.of('draconicevolution:flux_gate'), [
      'ABBBA',
      'B C B',
      'BCDDB',
      'B C B',
      'ABBBA'
    ], {
      A: '#forge:plates/refined_obsidian',
      B: '#forge:rods/refined_obsidian',
      C: 'draconicevolution:wyvern_core',
      D: 'mekanism:ultimate_energy_cube'
    }).id('draconicevolution:flux_gate')
  })