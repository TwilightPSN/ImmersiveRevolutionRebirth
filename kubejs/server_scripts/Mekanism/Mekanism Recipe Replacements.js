ServerEvents.recipes(IRRebirth => {
  IRRebirth.replaceInput({ id: 'mekanism:metallurgic_infusing/alloy/infused' },'minecraft:iron_ingot','#forge:ingots/constantan')
  IRRebirth.replaceInput({ id: 'mekanism:infusion_conversion/redstone/from_dust' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ id: 'mekanism:infusion_conversion/redstone/from_block' },'minecraft:redstone_block','kubejs:acidic_redstone_block')
  IRRebirth.replaceInput({ id: 'mekanism:enriching/enriched/redstone' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ id: 'mekanism:steel_casing' },'#forge:ingots/steel','immersiveengineering:steel_scaffolding_standard')
  IRRebirth.replaceInput({ id: 'mekanism:steel_casing' },'#forge:glass/silica','immersiveengineering:insulating_glass')
  IRRebirth.replaceInput({ id: 'mekanism:steel_casing' },'mekanism:ingot_osmium','kubejs:osmium_plate')
  IRRebirth.replaceInput({ output: 'mekanism:energy_tablet' },'minecraft:gold_ingot','#forge:plates/brass')
  IRRebirth.replaceInput({ output: 'mekanism:energy_tablet' },'minecraft:redstone','kubejs:acidic_redstone')
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
  IRRebirth.replaceInput({ output: 'mekanismgenerators:advanced_solar_generator' },'minecraft:iron_ingot','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:solar_generator' },'mekanism:ingot_osmium','#forge:rods/osmium')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:solar_panel' },'mekanism:ingot_osmium','#forge:rods/osmium')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:solar_panel' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:chemical_crystallizer' },'mekanism:ingot_refined_obsidian','kubejs:refined_obsidian_plate')
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
  IRRebirth.replaceInput({ output: 'mekanism:personal_chest' },'#forge:ingots/steel','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:personal_chest' },'#forge:chests/wooden','sophisticatedstorage:diamond_chest')
  IRRebirth.replaceInput({ output: 'mekanism:personal_barrel' },'#forge:ingots/steel','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:personal_barrel' },'minecraft:barrel','sophisticatedstorage:diamond_barrel')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:bio_generator' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:bio_generator' },'minecraft:iron_ingot','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:electric_pump' },'mekanism:ingot_osmium','#forge:plates/osmium')
  IRRebirth.replaceInput({ output: 'mekanism:electric_pump' },'minecraft:bucket','immersiveengineering:fluid_pipe')
  IRRebirth.replaceInput({ output: 'mekanism:logistical_sorter' },'minecraft:piston','immersiveengineering:component_electronic_adv')
  IRRebirth.replaceInput({ output: 'mekanism:logistical_sorter' },'minecraft:iron_ingot','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:seismic_vibrator' },'mekanism:ingot_tin','#forge:plates/tin')
  IRRebirth.replaceInput({ output: 'mekanism:nutritional_liquifier' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:nutritional_liquifier' },'minecraft:bowl','cookingforblockheads:fridge')
  IRRebirth.replaceInput({ output: 'mekanism:diversion_transporter' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:diversion_transporter' },'#forge:ingots/steel','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:diversion_transporter' },'minecraft:iron_bars','create:item_drain')
  IRRebirth.replaceInput({ output: 'mekanism:restrictive_transporter' },'#forge:ingots/steel','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:restrictive_transporter' },'minecraft:iron_bars','create:item_drain')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:fusion_reactor_logic_adapter' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:fission_reactor_logic_adapter' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:upgrade_stone_generator' },'#forge:glass/silica', 'immersiveengineering:insulating_glass')
  IRRebirth.replaceInput({ output: 'mekanism:upgrade_anchor' },'#forge:glass/silica', 'immersiveengineering:insulating_glass')
  IRRebirth.replaceInput({ output: 'mekanism:upgrade_gas' },'#forge:glass/silica', 'immersiveengineering:insulating_glass')
  IRRebirth.replaceInput({ output: 'mekanism:upgrade_muffling' },'#forge:glass/silica', 'immersiveengineering:insulating_glass')
  IRRebirth.replaceInput({ output: 'mekanism:upgrade_filter' },'#forge:glass/silica', 'immersiveengineering:insulating_glass')
  IRRebirth.replaceInput({ output: 'mekanism:upgrade_energy' },'#forge:glass/silica', 'immersiveengineering:insulating_glass')
  IRRebirth.replaceInput({ output: 'mekanism:upgrade_speed' },'#forge:glass/silica', 'immersiveengineering:insulating_glass')
})