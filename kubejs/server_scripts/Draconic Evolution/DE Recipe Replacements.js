ServerEvents.recipes(IRRebirth => {
  IRRebirth.replaceInput({ output: 'draconicevolution:module_core' },'minecraft:iron_ingot','#forge:plates/refined_obsidian')
  IRRebirth.replaceInput({ output: 'draconicevolution:module_core' },'minecraft:gold_ingot','#forge:plates/refined_glowstone')
  IRRebirth.replaceInput({ output: 'draconicevolution:module_core' },'minecraft:redstone','#forge:plates/diamond')
  IRRebirth.replaceInput({ output: 'draconicevolution:crystal_binder' },'minecraft:diamond','mekanism:ultimate_control_circuit')
  IRRebirth.replaceInput({ output: 'draconicevolution:wyvern_energy_core' },'minecraft:redstone_block','mekanism:ultimate_induction_provider')
  IRRebirth.replaceInput({ output: 'draconicevolution:basic_relay_crystal' },'minecraft:diamond','mekanism:ultimate_control_circuit')
  IRRebirth.replaceInput({ output: 'draconicevolution:basic_crafting_injector' },'minecraft:diamond','mekanism:pellet_plutonium')
  IRRebirth.replaceInput({ output: 'draconicevolution:basic_crafting_injector' },'minecraft:iron_block','mekanism:sps_casing')
  IRRebirth.replaceInput({ output: 'draconicevolution:basic_crafting_injector' },'#forge:stone','mekanism:hdpe_sheet')
  IRRebirth.replaceInput({ output: 'draconicevolution:disenchanter' },'minecraft:emerald','powah:spirited_crystal_block')
  IRRebirth.replaceInput({ output: 'draconicevolution:particle_generator' },'minecraft:blaze_rod','#forge:rods/refined_glowstone')
  IRRebirth.replaceInput({ output: 'draconicevolution:particle_generator' },'minecraft:redstone_block','mekanism:alloy_atomic')
  IRRebirth.shaped(
    Item.of('draconicevolution:energy_core_stabilizer'), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'mekanism:pellet_plutonium',
      B: 'mekanism:pellet_polonium',
      C: 'draconicevolution:particle_generator'
    }
  ).id('draconicevolution:machines/energy_core_stabilizer')
  IRRebirth.replaceInput({ output: 'draconicevolution:wyvern_relay_crystal' },'draconicevolution:draconium_core','draconicevolution:wyvern_core')
})