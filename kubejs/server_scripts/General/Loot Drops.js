LootJS.modifiers((IRRebirth) => {
    IRRebirth.addBlockLootModifier("#forge:ores/draconium").removeLoot("draconicevolution:draconium_dust");
    IRRebirth.addBlockLootModifier("draconicevolution:nether_draconium_ore").addLoot("draconicevolution:nether_draconium_ore");
    IRRebirth.addBlockLootModifier("draconicevolution:end_draconium_ore").addLoot("draconicevolution:end_draconium_ore");
    IRRebirth.addBlockLootModifier("draconicevolution:overworld_draconium_ore").addLoot("draconicevolution:overworld_draconium_ore");
    IRRebirth.addBlockLootModifier("draconicevolution:deepslate_draconium_ore").addLoot("draconicevolution:deepslate_draconium_ore");
});