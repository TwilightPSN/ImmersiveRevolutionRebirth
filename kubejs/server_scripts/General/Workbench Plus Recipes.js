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
})