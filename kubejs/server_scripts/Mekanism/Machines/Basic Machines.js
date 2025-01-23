ServerEvents.recipes(IRRebirth => {
  IRRebirth.replaceInput({ id: 'mekanism:tier_installer/basic' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ id: 'mekanism:tier_installer/basic' },'minecraft:iron_ingot','#forge:plates/steel')
  IRRebirth.replaceInput({ output: 'mekanism:basic_bin' },'minecraft:cobblestone','create:andesite_casing')
  IRRebirth.replaceInput({ output: 'mekanism:basic_bin' },'minecraft:redstone','kubejs:acidic_redstone')
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
  IRRebirth.replaceInput({ output: 'mekanism:basic_chemical_tank' },'minecraft:redstone','kubejs:acidic_redstone')
  IRRebirth.replaceInput({ output: 'mekanism:basic_chemical_tank' },'mekanism:ingot_osmium','kubejs:osmium_plate')
  IRRebirth.shaped(
    Item.of('mekanism:basic_enriching_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:enrichment_chamber'
    }
  ).id('mekanism:factory/basic/enriching')
  IRRebirth.shaped(
    Item.of('mekanism:basic_crushing_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:crusher'
    }
  ).id('mekanism:factory/basic/crushing')
  IRRebirth.shaped(
    Item.of('mekanism:basic_compressing_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:osmium_compressor'
    }
  ).id('mekanism:factory/basic/compressing')
  IRRebirth.shaped(
    Item.of('mekanism:basic_combining_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:combiner'
    }
  ).id('mekanism:factory/basic/combining')
  IRRebirth.shaped(
    Item.of('mekanism:basic_purifying_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:purification_chamber'
    }
  ).id('mekanism:factory/basic/purifying')
  IRRebirth.shaped(
    Item.of('mekanism:basic_injecting_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:chemical_injection_chamber'
    }
  ).id('mekanism:factory/basic/injecting')
  IRRebirth.shaped(
    Item.of('mekanism:basic_sawing_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:precision_sawmill'
    }
  ).id('mekanism:factory/basic/sawing')
  IRRebirth.shaped(
    Item.of('mekanism:basic_infusing_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:metallurgic_infuser'
    }
  ).id('mekanism:factory/basic/infusing')
  IRRebirth.shaped(
    Item.of('mekanism:basic_smelting_factory'), 
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:acidic_redstone',
      B: 'mekanism:basic_control_circuit',
      C: '#forge:plates/steel',
      D: 'mekanism:energized_smelter'
    }
  ).id('mekanism:factory/basic/smelting')
  IRRebirth.shaped(
    Item.of('mekanism:basic_universal_cable', 8), 
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:rods/osmium',
      B: 'kubejs:acidic_redstone'
    }
  ).id('mekanism:transmitter/universal_cable/basic')
  IRRebirth.shaped(
    Item.of('mekanism:basic_mechanical_pipe', 8), 
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:rods/osmium',
      B: 'immersiveengineering:redstone_acid_bucket'
    }
  ).id('mekanism:transmitter/mechanical_pipe/basic')
  IRRebirth.shaped(
    Item.of('mekanism:basic_pressurized_tube', 8), 
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:rods/osmium',
      B: 'immersiveengineering:insulating_glass'
    }
  ).id('mekanism:transmitter/pressurized_tube/basic')
  IRRebirth.shaped(
    Item.of('mekanism:basic_logistical_transporter', 8), 
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:rods/osmium',
      B: 'mekanism:basic_control_circuit'
    }
  ).id('mekanism:transmitter/logistical_transporter/basic')
  IRRebirth.shaped(
    Item.of('mekanism:basic_thermodynamic_conductor', 8), 
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: '#forge:rods/osmium',
      B: 'immersiveengineering:thermoelectric_generator'
    }
  ).id('mekanism:transmitter/thermodynamic_conductor/basic')
})