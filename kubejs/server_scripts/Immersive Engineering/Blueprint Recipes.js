ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"molds","inputs":[
                {"base_ingredient":{"tag":"forge:plates/steel"},"count":3},
                {"item":"immersiveengineering:wirecutter"}],
                "result":{"item":"kubejs:dust_mold"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"tag":"forge:plates/steel"},"count":3},
                {"item":"immersiveengineering:component_steel", "count": 1},
                {"tag":"forge:rods/steel","count":1}],
                "result":{"item":"immersiveengineering:steel_scaffolding_standard"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"item":"immersiveengineering:component_iron"},"count":3},
                {"item":"create:precision_mechanism", "count": 1},
                {"tag":"forge:sheetmetals/constantan","count":1},
                {"tag":"forge:sheetmetals/iron","count":1},
                {"tag":"forge:plates/lead","count":1},
                {"tag":"forge:plates/silver","count":1}],
                "result":{"item":"immersiveengineering:light_engineering"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"item":"create:fluid_pipe"},"count":1},
                {"tag":"forge:plates/iron", "count": 3}],
                "result":{"count": 2, "item":"immersiveengineering:fluid_pipe"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"item":"immersiveengineering:component_steel"},"count":2},
                {"item":"create:precision_mechanism", "count": 1},
                {"tag":"forge:sheetmetals/electrum","count":1},
                {"tag":"forge:sheetmetals/steel","count":2},
                {"tag":"forge:plates/electrum","count":1},
                {"tag":"forge:plates/steel","count":2}],
                "result":{"item":"immersiveengineering:heavy_engineering"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"item":"immersiveengineering:component_iron"},"count":3},
                {"item":"create:precision_mechanism", "count": 1},
                {"tag":"forge:plates/copper","count":1},
                {"tag":"forge:sheetmetals/iron","count":1}],
                "result":{"item":"immersiveengineering:rs_engineering"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"item":"immersiveengineering:component_iron"},"count":1},
                {"tag":"forge:plates/steel","count": 2},
                {"tag":"forge:sheetmetals/electrum","count":2},
                {"item":"immersiveengineering:coil_mv","count":1},
                {"tag":"forge:sheetmetals/steel","count":2}],
                "result":{"item":"immersiveengineering:generator"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"tag":"forge:plates/constantan"},"count": 2},
                {"item":"create_sa:heat_engine", "count": 1},
                {"tag":"forge:plates/steel","count":2},
                {"tag":"forge:sheetmetals/constantan", "count": 1},
                {"tag":"forge:sheetmetals/steel","count":2}],
                "result":{"item":"immersiveengineering:radiator"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"tag":"forge:ingots/steel"},"count": 4},
                {"tag":"forge:rods/treated_wood", "count": 14},
                {"tag":"forge:plates/brass","count":4},
                {"tag":"forge:treated_wood","count":6}],
                "result":{"item":"immersiveengineering:windmill"}
            }
        )
    IRRebirth.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"Machine Components","inputs":[
                {"base_ingredient":{"tag":"forge:ingots/steel"},"count": 3},
                {"tag":"forge:rods/treated_wood", "count": 4},
                {"tag":"forge:plates/brass","count":1},
                {"tag":"forge:treated_wood","count":1}],
                "result":{"item":"immersiveengineering:watermill"}
            }
        )
})