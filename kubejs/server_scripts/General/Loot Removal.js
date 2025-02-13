LootJS.modifiers((IRRebirth) => {
  IRRebirth
    .addLootTableModifier(/^minecraft:chests\/.*/)
    .removeLoot("minecraft:flint_and_steel")
    .removeLoot("silentgear:helmet")
    .removeLoot("silentgear:chestplate")
    .removeLoot("silentgear:leggings")
    .removeLoot("silentgear:boots");
  IRRebirth
    .addLootTableModifier(/^minecraft:barrel\/.*/)
    .removeLoot("minecraft:flint_and_steel")
    .removeLoot("silentgear:helmet")
    .removeLoot("silentgear:chestplate")
    .removeLoot("silentgear:leggings")
    .removeLoot("silentgear:boots");
});