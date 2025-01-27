ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBBBBBA",
          "BCCDADCCB",
          "BCAEEEACB",
          "BDEADAEDB",
          "BAEDFDEAB",
          "BDEADAEDB",
          "BCAEEEACB",
          "BCCDADCCB",
          "ABBBBBBBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "item": "create:blaze_burner"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:blazecake\"}"
          },
          "E": {
            "item": "buddingcrystals:budding_blaze"
          },
          "F": {
            "item": "createaddition:cake_base"
          }
        },
        "result": {
          "item": "create:creative_blaze_cake"
        }
      })
})