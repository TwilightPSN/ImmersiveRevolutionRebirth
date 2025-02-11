PlayerEvents.loggedIn(IRRebirth => {
      if (!IRRebirth.player.stages.has('starterkit')) {
        IRRebirth.player.stages.add('starterkit')
        IRRebirth.player.give(Item.of('minecraft:stone_sword'))
        IRRebirth.player.give(Item.of('mekanismtools:stone_paxel'))
        IRRebirth.player.give(Item.of('10x pamhc2foodextended:hamandpineapplepizzaitem'))
        IRRebirth.player.give(Item.of('create_questing:blueprint'))
        IRRebirth.entity.setItemSlot(5, 'minecraft:leather_helmet')
        IRRebirth.entity.setItemSlot(4, 'minecraft:leather_chestplate')
        IRRebirth.entity.setItemSlot(3, 'minecraft:leather_leggings')
        IRRebirth.entity.setItemSlot(2, 'minecraft:leather_boots')
        IRRebirth.entity.setItemSlot(1, '10x minecraft:torch')
      }
})