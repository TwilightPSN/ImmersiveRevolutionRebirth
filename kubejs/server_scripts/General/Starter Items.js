//onEvent('player.logged_in', IRRebirth =>{
PlayerEvents.loggedIn(IRRebirth => {
      if (!IRRebirth.player.stages.has('starterkit')) {
        IRRebirth.player.stages.add('starterkit')
        IRRebirth.player.give(Item.of('minecraft:iron_sword'))
        IRRebirth.player.give(Item.of('mekanismtools:iron_paxel'))
        IRRebirth.player.give(Item.of('prefab:item_house'))
        IRRebirth.player.give(Item.of('10x pamhc2foodextended:hamandpineapplepizzaitem'))
        IRRebirth.entity.setItemSlot(5, 'minecraft:iron_helmet')
        IRRebirth.entity.setItemSlot(4, 'minecraft:iron_chestplate')
        IRRebirth.entity.setItemSlot(3, 'minecraft:iron_leggings')
        IRRebirth.entity.setItemSlot(2, 'minecraft:iron_boots')
        IRRebirth.entity.setItemSlot(1, '10x minecraft:torch')
      }
})