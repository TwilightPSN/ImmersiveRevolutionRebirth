ItemEvents.modification((IRRebirth) => {
  let itemlist = [
    "minecraft:ender_pearl",
    "minecraft:snowball",
    "powah:charged_snowball",
    "endermanoverhaul:corrupted_pearl",
    "endermanoverhaul:soul_pearl",
    "endermanoverhaul:ancient_pearl",
    "endermanoverhaul:bubble_pearl",
    "endermanoverhaul:summoner_pearl",
    "endermanoverhaul:icy_pearl",
    "endermanoverhaul:crimson_pearl",
    "endermanoverhaul:warped_pearl",
    "minecraft:egg"
  ];

  itemlist.forEach((itemToModify) => {
    IRRebirth.modify(itemToModify, (item) => {
      item.maxStackSize = 64;
    });
  });
});