ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCCCCCBA",
          "BDDEAEDDB",
          "CDAFFFADC",
          "CEFAEAFEC",
          "CAFEGEFAC",
          "CEFAEAFEC",
          "CDAFFFADC",
          "BDDEAEDDB",
          "ABCCCCCBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "B": {
            "item": "create_sa:heap_of_experience"
          },
          "C": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "D": {
            "item": "createaddition:electric_motor"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:hydraulicengine\"}"
          },
          "F": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:brass\"}"
          },
          "G": {
            "item": "create:hand_crank"
          }
        },
        "result": {
          "item": "create:creative_motor"
        }
      })
})