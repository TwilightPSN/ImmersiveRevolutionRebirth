ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:black_iron_slate"
        },
        "ingredients": [
          {
            "tag": "forge:ingots/brass"
          },
          {
            "tag": "forge:ingots/brass"
          },
          {
            "item": "extendedcrafting:luminessence"
          },
          {
            "item": "extendedcrafting:luminessence"
          }
        ],
        "result": {
            "item": "extendedcrafting:advanced_component"
        },
        "tier": "CHAOTIC",
        "total_energy": 150000000
      }).id('extendedcrafting:advanced_component')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "tag": "forge:ingots/black_iron"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:advanced_component"
          },
          {
            "item": "extendedcrafting:advanced_component"
          },
          {
            "item": "extendedcrafting:advanced_component"
          },
          {
            "item": "extendedcrafting:advanced_component"
          }
        ],
        "result": {
            "item": "extendedcrafting:advanced_catalyst"
        },
        "tier": "CHAOTIC",
        "total_energy": 150000000
      }).id('extendedcrafting:advanced_catalyst')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:basic_table"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:advanced_component"
          },
          {
            "item": "extendedcrafting:advanced_component"
          },
          {
            "item": "extendedcrafting:advanced_component"
          },
          {
            "item": "extendedcrafting:advanced_component"
          },
          {
            "item": "extendedcrafting:advanced_catalyst"
          },
          {
            "item": "draconicevolution:chaotic_core"
          }
        ],
        "result": {
            "item": "extendedcrafting:advanced_table"
        },
        "tier": "CHAOTIC",
        "total_energy": 150000000
      }).id('extendedcrafting:advanced_table')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:advanced_table"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:redstone_component"
          },
          {
            "item": "extendedcrafting:redstone_component"
          },
          {
            "item": "extendedcrafting:crystaltine_component"
          },
          {
            "item": "extendedcrafting:crystaltine_component"
          }
        ],
        "result": {
            "item": "extendedcrafting:advanced_auto_table"
        },
        "tier": "CHAOTIC",
        "total_energy": 150000000
      }).id('extendedcrafting:advanced_auto_table')
})