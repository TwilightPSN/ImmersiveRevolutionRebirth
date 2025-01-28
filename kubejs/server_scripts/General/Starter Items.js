//onEvent('player.logged_in', IRRebirth =>{
PlayerEvents.loggedIn(IRRebirth => {
      if (!IRRebirth.player.stages.has('starterkit')) {
        IRRebirth.player.stages.add('starterkit')
        IRRebirth.player.give(Item.of('minecraft:stone_sword'))
        IRRebirth.player.give(Item.of('mekanismtools:stone_paxel'))
        IRRebirth.player.give(Item.of('10x pamhc2foodextended:hamandpineapplepizzaitem'))
        IRRebirth.player.give(Item.of('silentgear:blueprint_book', '{Inventory:{Items:[{Count:1b,Slot:0,id:"silentgear:sword_blueprint"},{Count:1b,Slot:1,id:"silentgear:katana_blueprint"},{Count:1b,Slot:2,id:"silentgear:machete_blueprint"},{Count:1b,Slot:3,id:"silentgear:spear_blueprint"},{Count:1b,Slot:4,id:"silentgear:trident_blueprint"},{Count:1b,Slot:5,id:"silentgear:knife_blueprint"},{Count:1b,Slot:6,id:"silentgear:dagger_blueprint"},{Count:1b,Slot:7,id:"silentgear:pickaxe_blueprint"},{Count:1b,Slot:8,id:"silentgear:shovel_blueprint"},{Count:1b,Slot:9,id:"silentgear:axe_blueprint"},{Count:1b,Slot:10,id:"silentgear:paxel_blueprint"},{Count:1b,Slot:11,id:"silentgear:hammer_blueprint"},{Count:1b,Slot:12,id:"silentgear:excavator_blueprint"},{Count:1b,Slot:13,id:"silentgear:saw_blueprint"},{Count:1b,Slot:14,id:"silentgear:hoe_blueprint"},{Count:1b,Slot:15,id:"silentgear:mattock_blueprint"},{Count:1b,Slot:16,id:"silentgear:prospector_hammer_blueprint"},{Count:1b,Slot:17,id:"silentgear:sickle_blueprint"},{Count:1b,Slot:18,id:"silentgear:shears_blueprint"},{Count:1b,Slot:19,id:"silentgear:fishing_rod_blueprint"},{Count:1b,Slot:20,id:"silentgear:bow_blueprint"},{Count:1b,Slot:21,id:"silentgear:crossbow_blueprint"},{Count:1b,Slot:22,id:"silentgear:slingshot_blueprint"},{Count:1b,Slot:23,id:"silentgear:shield_blueprint"},{Count:1b,Slot:24,id:"silentgear:helmet_blueprint"},{Count:1b,Slot:25,id:"silentgear:chestplate_blueprint"},{Count:1b,Slot:26,id:"silentgear:leggings_blueprint"},{Count:1b,Slot:27,id:"silentgear:rod_blueprint"},{Count:1b,Slot:28,id:"silentgear:tip_blueprint"},{Count:1b,Slot:29,id:"silentgear:coating_blueprint"},{Count:1b,Slot:30,id:"silentgear:grip_blueprint"},{Count:1b,Slot:31,id:"silentgear:binding_blueprint"},{Count:1b,Slot:32,id:"silentgear:lining_blueprint"},{Count:1b,Slot:33,id:"silentgear:cord_blueprint"},{Count:1b,Slot:34,id:"silentgear:fletching_blueprint"},{Count:1b,Slot:35,id:"silentgear:boots_blueprint"},{Count:1b,Slot:36,id:"silentgear:elytra_blueprint"},{Count:1b,Slot:37,id:"silentgear:arrow_blueprint"},{Count:1b,Slot:38,id:"silentgear:ring_blueprint"},{Count:1b,Slot:39,id:"silentgear:bracelet_blueprint"}],Size:54},Selected:0}'))
        IRRebirth.entity.setItemSlot(5, 'minecraft:leather_helmet')
        IRRebirth.entity.setItemSlot(4, 'minecraft:leather_chestplate')
        IRRebirth.entity.setItemSlot(3, 'minecraft:leather_leggings')
        IRRebirth.entity.setItemSlot(2, 'minecraft:leather_boots')
        IRRebirth.entity.setItemSlot(1, '10x minecraft:torch')
      }
})