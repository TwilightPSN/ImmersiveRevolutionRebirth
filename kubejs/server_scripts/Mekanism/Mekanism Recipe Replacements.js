ServerEvents.recipes(IRRebirth => {
  IRRebirth.replaceInput(
    { id: 'mekanism:metallurgic_infusing/alloy/infused' },
    'minecraft:iron_ingot',
    '#forge:ingots/constantan'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:infusion_conversion/redstone/from_dust' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:infusion_conversion/redstone/from_block' },
    'minecraft:redstone_block',
    'kubejs:acidic_redstone_block'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:enriching/enriched/redstone' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:steel_casing' },
    '#forge:ingots/steel',
    'immersiveengineering:steel_scaffolding_standard'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:steel_casing' },
    '#forge:glass/silica',
    'immersiveengineering:insulating_glass'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:steel_casing' },
    'mekanism:ingot_osmium',
    'kubejs:osmium_plate'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:tier_installer/basic' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.replaceInput(
    { id: 'mekanism:tier_installer/basic' },
    'minecraft:iron_ingot',
    '#forge:plates/steel'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:energy_tablet' },
    'minecraft:gold_ingot',
    '#forge:plates/brass'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:energy_tablet' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:basic_bin' },
    'minecraft:cobblestone',
    'create:andesite_casing'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:basic_bin' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.shaped(
    Item.of('mekanism:basic_fluid_tank'), 
    [
      'ABA',
      'C C',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: '#forge:plates/steel',
      C: '#forge:rods/steel'
    }
  ).id('mekanism:fluid_tank/basic')
  IRRebirth.shaped(
    Item.of('mekanism:basic_energy_cube'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:energy_tablet',
      C: '#forge:plates/steel',
      D: 'mekanism:steel_casing'
    }
  ).id('mekanism:energy_cube/basic')
  IRRebirth.replaceInput(
    { output: 'mekanism:basic_chemical_tank' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:basic_chemical_tank' },
    'mekanism:ingot_osmium',
    'kubejs:osmium_plate'
  )
  IRRebirth.shaped(
    Item.of('mekanism:thermal_evaporation_block', 4), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:plates/steel',
      B: '#forge:rods/steel',
      C: '#forge:storage_blocks/constantan'
    }
  ).id('mekanism:thermal_evaporation/block')
  IRRebirth.replaceInput(
    { output: 'mekanismgenerators:advanced_solar_generator' },
    'minecraft:iron_ingot',
    '#forge:plates/steel'
  )
  IRRebirth.replaceInput(
    { output: 'mekanismgenerators:solar_generator' },
    'mekanism:ingot_osmium',
    '#forge:rods/osmium'
  )
  IRRebirth.replaceInput(
    { output: 'mekanismgenerators:solar_panel' },
    'mekanism:ingot_osmium',
    '#forge:rods/osmium'
  )
  IRRebirth.replaceInput(
    { output: 'mekanismgenerators:solar_panel' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:chemical_crystallizer' },
    'mekanism:ingot_refined_obsidian',
    'kubejs:refined_obsidian_plate'
  )
  IRRebirth.shaped(
    Item.of('mekanism:dynamic_tank', 4), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:plates/steel',
      B: '#forge:rods/steel',
      C: 'immersiveengineering:fluid_pipe'
    }
  ).id('mekanism:dynamic_tank')
  IRRebirth.replaceInput(
    { output: 'mekanism:personal_chest' },
    '#forge:ingots/steel',
    '#forge:plates/steel'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:personal_chest' },
    '#forge:chests/wooden',
    'sophisticatedstorage:diamond_chest'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:personal_barrel' },
    '#forge:ingots/steel',
    '#forge:plates/steel'
  )
  IRRebirth.replaceInput(
    { output: 'mekanism:personal_barrel' },
    'minecraft:barrel',
    'sophisticatedstorage:diamond_barrel'
  )
  IRRebirth.replaceInput(
    { output: 'mekanismgenerators:bio_generator' },
    'minecraft:redstone',
    'kubejs:acidic_redstone'
  )
  IRRebirth.replaceInput(
    { output: 'mekanismgenerators:bio_generator' },
    'minecraft:iron_ingot',
    '#forge:plates/steel'
  )
})