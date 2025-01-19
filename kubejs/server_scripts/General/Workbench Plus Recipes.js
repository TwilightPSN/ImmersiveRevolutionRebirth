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
  IRRebirth.remove({ output: 'quarryplus:mover' })
  IRRebirth.custom({
    type: 'quarryplus:workbench_recipe',
    conditions: [{ type: 'quarryplus:machine_enabled', value: 'quarry' }],
    energy: 1250000,
    ingredients: [
      { count: 64, tag: 'forge:ingots/refined_obsidian' },
      { count: 64, item: 'kubejs:acidic_redstone' },
      { count: 64, tag: 'forge:ingots/brass' },
      { count: 64, tag: 'forge:rods/blaze' },
      { count: 64, tag: 'forge:dusts/diamond' }
    ],
    result: { count: 1, item: 'quarryplus:mover' },
    showInJEI: true,
    subType: 'default'
  })
})