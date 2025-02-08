ItemEvents.modification((IRRebirth) => {
  let itemlist = [
    "minecraft:ender_pearl",
    "minecraft:snowball",
    "powah:charged_snowball",
    "minecraft:mushroom_stew",
    "minecraft:rabbit_stew",
    "minecraft:suspicious_stew",
    "minecraft:beetroot_soup",
    "biomeswevegone:white_puffball_stew",
    "biomeswevegone:allium_addion_soup",
    "endermanoverhaul:corrupted_pearl",
    "endermanoverhaul:soul_pearl",
    "endermanoverhaul:ancient_pearl",
    "endermanoverhaul:bubble_pearl",
    "endermanoverhaul:summoner_pearl",
    "endermanoverhaul:icy_pearl",
    "endermanoverhaul:crimson_pearl",
    "endermanoverhaul:warped_pearl",
    "aquaculture:turtle_soup",
  ];

  itemlist.forEach((itemToModify) => {
    IRRebirth.modify(itemToModify, (item) => {
      item.maxStackSize = 64;
    });
  });
});
