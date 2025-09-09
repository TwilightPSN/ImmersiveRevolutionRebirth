ServerEvents.recipes(IRRebirth => {
  IRRebirth.replaceInput({ output: 'mekanism:metallurgic_infuser' },'minecraft:iron_ingot','kubejs:graphite_plate')
  IRRebirth.replaceInput({ output: 'mekanism:metallurgic_infuser' },'minecraft:furnace','immersiveengineering:radiator')
  IRRebirth.replaceInput({ output: 'mekanism:metallurgic_infuser' },'mekanism:ingot_osmium','#forge:plates/osmium')
  IRRebirth.replaceInput({ output: 'mekanism:metallurgic_infuser' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:energized_smelter' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:energized_smelter' },'#forge:glass/silica','immersiveengineering:slag_glass')
  IRRebirth.replaceInput({ output: 'mekanism:precision_sawmill' },'minecraft:iron_ingot','#forge:plates/refined_obsidian')
  IRRebirth.replaceInput({ output: 'mekanism:electrolytic_separator' },'minecraft:iron_ingot','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:electrolytic_separator' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:enrichment_chamber' },'minecraft:iron_ingot','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:enrichment_chamber' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:combiner' },'minecraft:cobblestone','create:andesite_casing')
  IRRebirth.replaceInput({ output: 'mekanism:crusher' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.shaped(
    Item.of('mekanism:purification_chamber'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'mekanism:alloy_infused',
      B: 'mekanism:advanced_control_circuit',
      C: 'kubejs:osmium_plate',
      D: 'mekanism:enrichment_chamber'
    }
  ).id('mekanism:purification_chamber')
  IRRebirth.shaped(
    Item.of('mekanism:chemical_injection_chamber'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'mekanism:alloy_reinforced',
      B: 'mekanism:elite_control_circuit',
      C: '#forge:plates/brass',
      D: 'mekanism:purification_chamber'
    }
  ).id('mekanism:chemical_injection_chamber')
  IRRebirth.shaped(
    Item.of('mekanism:chemical_washer'), 
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'kubejs:refined_obsidian_rod',
      B: 'mekanism:basic_fluid_tank',
      C: 'mekanism:ultimate_control_circuit',
      D: 'mekanism:steel_casing',
      E: 'mekanism:basic_chemical_tank'
    }
  ).id('mekanism:chemical_washer')
  IRRebirth.shaped(
    Item.of('mekanism:chemical_dissolution_chamber'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:refined_obsidian_rod',
      B: 'mekanism:basic_chemical_tank',
      C: 'mekanism:ultimate_control_circuit',
      D: 'mekanism:steel_casing'
    }
  ).id('mekanism:chemical_dissolution_chamber')
  IRRebirth.shaped(
    Item.of('mekanism:rotary_condensentrator'), 
    [
      'ABA',
      'CDE',
      'ABA'
    ],
    {
      A: 'immersiveengineering:slag_glass',
      B: 'mekanism:basic_control_circuit',
      C: 'mekanism:basic_chemical_tank',
      D: 'mekanism:energy_tablet',
      E: 'mekanism:basic_fluid_tank'
    }
  ).id('mekanism:rotary_condensentrator')
})

