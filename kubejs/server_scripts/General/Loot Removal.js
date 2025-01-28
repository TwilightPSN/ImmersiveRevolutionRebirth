LootJS.modifiers((IRRebirth) => {
  IRRebirth
    .addLootTableModifier(/^minecraft:chests\/.*/)
    .removeLoot("minecraft:flint_and_steel");
});