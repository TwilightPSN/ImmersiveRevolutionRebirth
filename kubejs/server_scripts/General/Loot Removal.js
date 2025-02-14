LootJS.modifiers((IRRebirth) => {
  IRRebirth
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(["minecraft:flint_and_steel",
      "silentgear:helmet",
      "silentgear:chestplate",
      "silentgear:leggings",
      "silentgear:boots"
    ]);
});