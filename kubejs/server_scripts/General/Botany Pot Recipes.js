ServerEvents.recipes(IRRebirth => {
      IRRebirth.shaped(
        Item.of('botanypots:terracotta_botany_pot'), 
        [
          'A A',
          'A A',
          'ABA'
        ],
        {
          A: '#forge:storage_blocks/brass',
          B: 'minecraft:flower_pot'
        }
      )
      IRRebirth.shaped(
        Item.of('botanypotstiers:elite_terracotta_botany_pot'), 
        [
          'A A',
          'A A',
          'ABA'
        ],
        {
          A: '#forge:storage_blocks/steel',
          B: 'botanypots:terracotta_hopper_botany_pot'
        }
      )
      IRRebirth.shaped(
        Item.of('botanypotstiers:ultra_terracotta_botany_pot'), 
        [
          'A A',
          'A A',
          'ABA'
        ],
        {
          A: '#forge:storage_blocks/refined_obsidian',
          B: 'botanypotstiers:elite_terracotta_hopper_botany_pot'
        }
      )
      IRRebirth.shaped(
        Item.of('botanypotstiers:creative_terracotta_botany_pot'), 
        [
          'A A',
          'A A',
          'ABA'
        ],
        {
          A: '#forge:storage_blocks/draconium',
          B: 'botanypotstiers:ultra_terracotta_hopper_botany_pot'
        }
      )
      IRRebirth.shaped(
        Item.of('botanypots:terracotta_hopper_botany_pot'), 
        [
          'A A',
          'ABA',
          'ACA'
        ],
        {
          A: 'create_dd:kinetic_mechanism',
          B: 'botanypots:terracotta_botany_pot',
          C: 'create:chute'
        }
      )
      IRRebirth.shaped(
        Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot'), 
        [
          'A A',
          'ABA',
          'ACA'
        ],
        {
          A: 'immersiveengineering:heavy_engineering',
          B: 'botanypotstiers:elite_terracotta_botany_pot',
          C: 'immersiveengineering:chute_steel'
        }
      )
      IRRebirth.shaped(
        Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot'), 
        [
          'A A',
          'ABA',
          'ACA'
        ],
        {
          A: 'mekanism:hdpe_sheet',
          B: 'botanypotstiers:ultra_terracotta_botany_pot',
          C: Item.of('mekanism:quantum_entangloporter').ignoreNBT()
        }
      )
      IRRebirth.shaped(
        Item.of('botanypotstiers:creative_terracotta_hopper_botany_pot'), 
        [
          'A A',
          'ABA',
          'ACA'
        ],
        {
          A: 'draconicevolution:awakened_core',
          B: 'botanypotstiers:creative_terracotta_botany_pot',
          C: 'draconicevolution:dragon_heart'
        }
      )
})