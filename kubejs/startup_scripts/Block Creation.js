StartupEvents.registry('block', IRRebirth => {
    IRRebirth.create('partial_coke_brick')
      .displayName('Unfinished Coke Brick')
      .soundType('gravel')
      .tagBlock('create:sequenced_assembly') 
      .tagBlock('minecraft:mineable/shovel')
      .tagBlock('forge:mineable/paxel')
      .tagBlock('cucumber:mineable/paxel')

      //kubejs by default use registry id to generate display name so in some cases can be useless
    IRRebirth.create('raw_blast_brick') 
    // .displayName('Raw Blast Brick')
      .soundType('gravel')
      .tagBlock('minecraft:mineable/shovel')
      .tagBlock('forge:mineable/paxel')
      .tagBlock('cucumber:mineable/paxel')

    IRRebirth.create('acidic_redstone_block')
      .displayName('Block of Acidic Redstone')
      .soundType('stone')
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('forge:storage_blocks')
      .tagBlock('cucumber:mineable/paxel')
})