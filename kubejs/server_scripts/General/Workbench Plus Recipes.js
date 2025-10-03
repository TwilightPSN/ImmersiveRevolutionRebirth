ServerEvents.recipes(IRRebirth => {
  IRRebirth.remove({ output: 'quarryplus:quarry' })
  IRRebirth.custom({
    type: 'quarryplus:workbench_recipe',
    conditions: [{ type: 'quarryplus:machine_enabled', value: 'quarry' }],
    energy: 750000,
    ingredients: [
      { count: 64, tag: 'forge:ingots/hop_graphite' },
      { count: 64, item: 'immersiveengineering:wirecoil_steel' },
      { count: 5, item: 'immersiveengineering:grindingdisk' },
      { count: 64, item: 'immersiveengineering:fluid_pipe' },
      { count: 32, tag: 'forge:plates/plastic' }
    ],
    result: { count: 1, item: 'quarryplus:quarry' },
    showInJEI: true,
    subType: 'default'
  })
  IRRebirth.custom({
    type: 'quarryplus:workbench_recipe',
    conditions: [{ type: 'quarryplus:machine_enabled', value: 'quarry' }],
    energy: 500000,
    ingredients: [
      { count: 32, item: 'mekanism:alloy_atomic' },
      { count: 10, item: 'mekanism:logistical_sorter' },
      { count: 4, item: 'mekanism:robit' },
      { count: 32, item: 'mekanism:teleportation_core' },
      { count: 1, item: 'quarryplus:quarry' },
      { count: 4, item: 'mekanism:steel_casing' }
    ],
    result: { count: 1, item: 'mekanism:digital_miner' },
    showInJEI: true,
    subType: 'default'
  })
})