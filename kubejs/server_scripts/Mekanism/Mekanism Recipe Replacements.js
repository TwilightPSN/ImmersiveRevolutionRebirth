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
  IRRebirth.replaceInput({ output: 'mekanism:electrolytic_core' },'#forge:dusts/gold', '#forge:plates/brass')
  IRRebirth.replaceInput({ output: 'mekanism:electrolytic_core' },'#forge:dusts/iron', '#forge:plates/electrum')
  IRRebirth.replaceInput({ output: 'mekanism:electrolytic_core' },'#forge:dusts/osmium', '#forge:rods/osmium')
  IRRebirth.replaceInput({ output: 'mekanism:teleportation_core' },'minecraft:lapis_lazuli', '#forge:plates/fluix')
  IRRebirth.replaceInput({ output: 'mekanism:teleportation_core' },'minecraft:gold_ingot', '#forge:rods/electrum')
  IRRebirth.replaceInput({ output: 'mekanism:teleportation_core' },'minecraft:diamond', '#forge:plates/diamond')
  IRRebirth.shaped(
    Item.of('mekanism:structural_glass', 2), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:plates/steel',
      B: '#forge:rods/steel',
      C: 'immersiveengineering:insulating_glass'
    }
  ).id('mekanism:structural_glass')
  IRRebirth.shaped(
    Item.of('mekanismgenerators:reactor_glass', 2), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:plates/lead',
      B: '#forge:rods/osmium',
      C: 'immersiveengineering:insulating_glass'
    }
  ).id('mekanismgenerators:reactor/glass')
  IRRebirth.shaped(
    Item.of('mekanism:boiler_casing', 2), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:plates/iron',
      B: '#forge:rods/steel',
      C: 'immersiveengineering:radiator'
    }
  ).id('mekanism:boiler_casing')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:control_rod_assembly' },'#forge:ingots/steel', 'immersiveengineering:graphite_electrode')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:control_rod_assembly' },'#forge:ingots/lead', '#forge:plates/lead')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:electromagnetic_coil' },'#forge:ingots/steel', 'immersiveengineering:coil_hv')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:electromagnetic_coil' },'#forge:ingots/gold', 'immersiveengineering:coil_mv')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:fission_fuel_assembly' },'#forge:ingots/steel', 'immersiveengineering:graphite_electrode')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:fission_fuel_assembly' },'#forge:ingots/lead', 'immersiveengineering:component_steel')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:fission_fuel_assembly' },'mekanism:basic_chemical_tank', 'mekanism:ultimate_chemical_tank')
  IRRebirth.shaped(
    Item.of('mekanism:radioactive_waste_barrel', 2), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'immersiveengineering:plate_duroplast',
      B: '#forge:plates/osmium',
      C: 'mekanism:ultimate_chemical_tank'
    }
  ).id('mekanism:radioactive_waste_barrel')
  IRRebirth.shaped(
    Item.of('mekanismgenerators:turbine_rotor'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: '#forge:plates/steel',
      B: 'mekanism:alloy_infused',
      C: '#forge:rods/steel',
      D: 'mekanism:advanced_control_circuit'
    }
  ).id('mekanismgenerators:turbine/rotor')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:laser_focus_matrix' },'minecraft:redstone_block', 'kubejs:acidic_redstone_block')
  IRRebirth.replaceInput({ output: 'mekanism:fuelwood_heater' },'minecraft:furnace', 'immersiveengineering:generator')
  IRRebirth.replaceInput({ output: 'mekanism:fuelwood_heater' },'#forge:ingots/steel', 'immersiveengineering:component_steel')
  IRRebirth.shaped(
    Item.of('mekanismgenerators:fission_reactor_casing'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: '#forge:plates/lead',
      B: '#forge:plates/aluminum',
      C: '#forge:rods/aluminum',
      D: 'mekanism:steel_casing'
    }
  ).id('mekanismgenerators:fission_reactor/casing')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:heat_generator' },'#forge:ingots/iron', 'immersiveengineering:component_iron')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:heat_generator' },'#minecraft:planks', '#forge:treated_wood')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:heat_generator' },'#forge:ingots/osmium', '#forge:plates/osmium')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:heat_generator' },'#forge:ingots/copper', '#forge:rods/bronze')
  IRRebirth.replaceInput({ output: 'mekanism:induction_casing' },'#forge:ingots/steel', 'immersiveengineering:coil_hv')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:rotational_complex' },'#forge:ingots/steel', '#forge:plates/refined_glowstone')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:saturating_condenser' },'#forge:ingots/tin', '#forge:rods/tin')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:saturating_condenser' },'#forge:ingots/steel', '#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanismgenerators:saturating_condenser' },'minecraft:bucket', 'immersiveengineering:fluid_pipe')
  IRRebirth.replaceInput({ output: 'mekanism:superheating_element' },'minecraft:redstone', 'immersiveengineering:rs_engineering')
  IRRebirth.replaceInput({ output: 'mekanism:superheating_element' },'minecraft:copper_ingot', '#forge:plates/bronze')
  IRRebirth.shaped(
    Item.of('mekanismgenerators:turbine_blade'), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:rods/steel',
      B: '#forge:plates/steel',
      C: 'mekanism:alloy_atomic'
    }
  ).id('mekanismgenerators:turbine/blade')
  IRRebirth.shaped(
    Item.of('mekanismgenerators:turbine_casing'), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:plates/lead',
      B: '#forge:plates/steel',
      C: '#forge:storage_blocks/osmium'
    }
  ).id('mekanismgenerators:turbine/casing')
  IRRebirth.replaceInput({ output: 'mekanism:pressure_disperser' },'minecraft:iron_bars', '#forge:sheetmetals/steel')
  IRRebirth.replaceInput({ output: 'mekanism:pressure_disperser' },'#forge:ingots/steel', '#forge:rods/steel')
  IRRebirth.replaceInput({ output: 'mekanism:supercharged_coil' },'#forge:ingots/copper', 'immersiveengineering:light_engineering')
  IRRebirth.shaped(
    Item.of('mekanism:laser_amplifier'), 
    [
      'ABC',
      'BDE',
      'ABC'
    ],
    {
      A: '#forge:plates/steel',
      B: '#forge:rods/steel',
      C: 'immersiveengineering:rs_engineering',
      D: 'mekanism:ultimate_energy_cube',
      E: 'mekanism:ultimate_control_circuit'
    }
  ).id('mekanism:laser_amplifier')
  IRRebirth.shaped(
    Item.of('mekanism:module_base'), 
    [
      'ABC',
      'ADC',
      'BBB'
    ],
    {
      A: '#forge:rods/bronze',
      B: 'mekanism:hdpe_sheet',
      C: '#forge:plates/tin',
      D: 'create_sa:hydraulic_engine'
    }
  ).id('mekanism:module_base')
  IRRebirth.replaceInput({ output: 'mekanism:mekasuit_helmet' },'minecraft:netherite_helmet', 'create_deep_dark:echo_armor_helmet')
  IRRebirth.replaceInput({ output: 'mekanism:mekasuit_bodyarmor' },'minecraft:netherite_chestplate', 'create_deep_dark:echo_armor_chestplate')
  IRRebirth.replaceInput({ output: 'mekanism:mekasuit_pants' },'minecraft:netherite_leggings', 'create_deep_dark:echo_armor_leggings')
  IRRebirth.replaceInput({ output: 'mekanism:mekasuit_boots' },'minecraft:netherite_boots', 'create_deep_dark:echo_armor_boots')
  IRRebirth.shaped(
    Item.of('mekanism:jetpack'), 
    [
      'ABA',
      'CDC',
      ' C '
    ],
    {
      A: '#forge:plates/steel',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/tin',
      D: 'minecraft:elytra'
    }
  ).id('mekanism:jetpack')
  IRRebirth.shaped(
    Item.of('mekanismcovers:empty_cover', 16), 
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:nuggets/osmium',
      B: '#forge:dusts/wood',
      C: 'immersiveengineering:insulating_glass'
    }
  ).id('mekanismcovers:cover')
  IRRebirth.custom({
    "type":"mekanism:crystallizing",
    "chemicalType":"gas",
    "input":{"amount":200,"gas":"mekanism:antimatter"},
    "output":{"item":"mekanism:pellet_antimatter"}
  }).id('mekanism:processing/lategame/antimatter_pellet/from_gas')
})