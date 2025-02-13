LootJS.modifiers((IRRebirth) => {
  IRRebirth
    .addLootTableModifier(/^minecraft:chests\/.*/)
    .removeLoot(["minecraft:flint_and_steel",
      "silentgear:helmet",
      "silentgear:chestplate",
      "silentgear:leggings",
      "silentgear:boots"
    ]);
  IRRebirth
    .addLootTableModifier(/^minecraft:barrel\/.*/)
    .removeLoot(["minecraft:flint_and_steel",
      "silentgear:helmet",
      "silentgear:chestplate",
      "silentgear:leggings",
      "silentgear:boots"
    ]);
});