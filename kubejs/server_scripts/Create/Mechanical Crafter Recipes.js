ServerEvents.recipes(IRRebirth => {
    IRRebirth.remove({ output: 'create:crushing_wheel'})
    IRRebirth.recipes.create.mechanical_crafting('create:crushing_wheel', [
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
    IRRebirth.recipes.create.mechanical_crafting('create:empty_blaze_burner', [
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
  })