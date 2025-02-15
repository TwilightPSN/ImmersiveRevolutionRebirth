ServerEvents.recipes(IRRebirth => {
    IRRebirth.remove({ type: "immersiveengineering:alloy" })
    IRRebirth.recipes.immersiveengineering.alloy('create:brass_ingot', '#forge:ingots/copper', '#forge:ingots/zinc')
    IRRebirth.recipes.immersiveengineering.alloy('immersiveengineering:ingot_constantan', '#forge:ingots/copper', '#forge:ingots/nickel')
    IRRebirth.recipes.immersiveengineering.alloy('immersiveengineering:ingot_electrum', '#forge:ingots/gold', 'immersiveengineering:ingot_silver')
    IRRebirth.recipes.immersiveengineering.alloy('explorerscompass:explorerscompass', 'minecraft:compass', 'minecraft:ender_eye')
    IRRebirth.recipes.immersiveengineering.alloy(Item.of('minecraft:netherite_ingot', 1), Item.of('#forge:ingots/netherite_scrap', 4), Item.of('#forge:ingots/gold', 4))
})