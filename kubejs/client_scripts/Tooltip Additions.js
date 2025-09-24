ItemEvents.tooltip((IRRebirth) => {
    IRRebirth.addAdvanced(['#forge:ores_in_ground/end_stone', '#forge:ores_in_ground/netherrack'], (item, advanced, text) => {
      text.remove(1)
    })
    IRRebirth.add('botanypots:terracotta_botany_pot', "§6Create")
    IRRebirth.add('botanypots:terracotta_hopper_botany_pot', "§6Create")
    IRRebirth.add('botanypotstiers:elite_terracotta_botany_pot', "§2Immersive Engineering")
    IRRebirth.add('botanypotstiers:elite_terracotta_hopper_botany_pot', "§2Immersive Engineering")
    IRRebirth.add('botanypotstiers:ultra_terracotta_botany_pot', "§3Mekanism")
    IRRebirth.add('botanypotstiers:ultra_terracotta_hopper_botany_pot', "§3Mekanism")
    IRRebirth.add('botanypotstiers:creative_terracotta_botany_pot', "§dDraconic Evolution")
    IRRebirth.add('botanypotstiers:creative_terracotta_hopper_botany_pot', "§dDraconic Evolution")
});