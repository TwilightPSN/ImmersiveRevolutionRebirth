StartupEvents.registry('block', IRRebirth => {
    IRRebirth.create('partial_coke_brick')
      .displayName('Unfinished Coke Brick')
      .soundType('gravel')
      .tagBlock('create:sequenced_assembly') 
      .tagBlock('minecraft:mineable/shovel'),
    IRRebirth.create('raw_blast_brick')
      .displayName('Raw Blast Brick')
      .soundType('gravel')
      .tagBlock('minecraft:mineable/shovel')
})