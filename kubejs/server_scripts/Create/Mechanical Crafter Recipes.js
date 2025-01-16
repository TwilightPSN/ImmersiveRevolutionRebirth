ServerEvents.recipes(IRRebirth => {
    IRRebirth.remove({ output: 'create:crushing_wheel'})
    IRRebirth.recipes.create.mechanical_crafting(Item.of('create:crushing_wheel', 4), [
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
    IRRebirth.recipes.create.mechanical_crafting(Item.of('create:empty_blaze_burner', 4), [
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
    IRRebirth.recipes.create.mechanical_crafting('quarryplus:workbench', [
      'ABBBBBBBA',
      'BDCCCCCDB',
      'BCDEEEDCB',
      'BCEFGFECB',
      'BCEGHGECB',
      'BCEFGFECB',
      'BCDEEEDCB',
      'BDCCCCCDB',
      'ABBBBBBBA'
    ], {
      A: '#forge:storage_blocks/steel',
      B: '#forge:plates/silver',
      C: '#forge:plates/constantan',
      D: '#forge:rods/steel',
      E: '#forge:plates/electrum',
      F: '#forge:storage_blocks/gold',
      G: 'minecraft:diamond_pickaxe',
      H: '#forge:storage_blocks/diamond'
    }) 
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:watermill',3), [
      ' AAA ',
      'ABCBA',
      'ACDCA',
      'ABCBA',
      ' AAA '
    ], {
      A: 'immersiveengineering:stick_treated',
      B: '#forge:treated_wood',
      C: '#forge:plates/brass',
      D: '#forge:storage_blocks/steel'
    })
    IRRebirth.recipes.create.mechanical_crafting(Item.of('immersiveengineering:windmill', 2), [
      'A       A',
      ' AAB BAA ',
      ' AAABAAA ',
      ' BACCCAB ',
      '  BCDCB  ',
      ' BACCCAB',
      ' AAABAAA ',
      ' AAB BAA ',
      'A        A'
    ], {
      A: 'immersiveengineering:stick_treated',
      B: '#forge:treated_wood',
      C: '#forge:plates/brass',
      D: '#forge:storage_blocks/steel'
    }) 
  })