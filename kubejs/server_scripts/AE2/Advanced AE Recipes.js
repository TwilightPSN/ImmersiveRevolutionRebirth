ServerEvents.recipes(IRRebirth => {
   IRRebirth.custom({
      "type": "advanced_ae:reaction",
      "energy": 1000000,
      "fluid": {
        "fluidStack": {
          "Amount": 10000,
          "FluidName": "advanced_ae:quantum_infusion_source"
        }
      },
      "input_items": [
        {
          "amount": 8,
          "ingredient": {
            "item": "advanced_ae:quantum_alloy"
          }
        },
        {
            "amount": 4,
            "ingredient": {
              "item": "megacells:sky_steel_ingot"
            }
          },
        {
          "amount": 2,
          "ingredient": {
            "item": "minecraft:netherite_ingot"
          }
        },
        {
          "amount": 1,
          "ingredient": {
            "item": "minecraft:nether_star"
          }
        }
      ],
      "output": {
        "#": 1,
        "#c": "ae2:i",
        "id": "advanced_ae:quantum_alloy_plate"
      }
    }).id('advanced_ae:quantum_alloy_plate')
  IRRebirth.custom({
        "type": "advanced_ae:reaction",
        "energy": 1000000,
        "fluid": {
          "fluidStack": {
            "Amount": 500,
            "FluidName": "minecraft:lava"
          }
        },
        "input_items": [
          {
            "amount": 16,
            "ingredient": {
              "item": "ae2:charged_certus_quartz_crystal"
            }
          },
          {
            "amount": 16,
            "ingredient": {
              "tag": "forge:ingots/steel"
            }
          },
          {
            "amount": 16,
            "ingredient": {
              "item": "ae2:sky_stone_block"
            }
          }
        ],
        "output": {
          "#": 64,
          "#c": "ae2:i",
          "id": "megacells:sky_steel_ingot"
        }
      })
    IRRebirth.custom({
        "type": "advanced_ae:reaction",
        "energy": 2000000,
        "fluid": {
          "fluidStack": {
            "Amount": 1000,
            "FluidName": "advanced_ae:quantum_infusion_source"
          }
        },
        "input_items": [
          {
            "amount": 4,
            "ingredient": {
              "tag": "forge:ingots/refined_obsidian"
            }
          },
          {
            "amount": 4,
            "ingredient": {
              "item": "advanced_ae:shattered_singularity"
            }
          },
          {
            "amount": 4,
            "ingredient": {
              "item": "ae2:singularity"
            }
          }
        ],
        "output": {
          "#": 2,
          "#c": "ae2:i",
          "id": "advanced_ae:quantum_alloy"
        }
      }).id('advanced_ae:quantum_alloy')
})