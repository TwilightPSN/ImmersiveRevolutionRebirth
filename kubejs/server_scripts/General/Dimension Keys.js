ServerEvents.recipes((IRRebirth) => {
  
  let craftedItems = [
    "kubejs:end_mining_key",
    "kubejs:nether_key",
    "kubejs:mining_key",
    "kubejs:nether_mining_key",
    "kubejs:void_key",
    "kubejs:end_key",
  ];

  let matA = [
    "minecraft:purpur_block",
    "#forge:ingots/steel",
    "#forge:plates/lead",
    "#forge:ingots/netherite",
    "#forge:gems/fluix",
    "minecraft:end_stone",
  ];

  let matB = [
    "minecraft:shulker_shell",
    "minecraft:flint_and_steel",
    "immersiveengineering:hammer",
    "minecraft:nether_star",
    "ae2:fluix_pearl",
    "minecraft:dragon_breath",
  ];

  craftedItems.forEach((crafted, index) => {
    IRRebirth.shaped(Item.of(crafted), ["AAA", "ABA", "AAA"], {
      A: matA[index],
      B: matB[index],
    });
  });
});
