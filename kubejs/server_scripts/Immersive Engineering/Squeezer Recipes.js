ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type":"immersiveengineering:squeezer",
        "energy":6400,
        "fluid":{"amount":100, "fluid":"immersiveengineering:plantoil"},
        "input":{"tag":"forge:seeds"}})
    IRRebirth.remove({id: "immersiveengineering:squeezer/melon_seeds"})
    IRRebirth.remove({id: "immersiveengineering:squeezer/beetroot_seeds"})
    IRRebirth.remove({id: "immersiveengineering:squeezer/pumpkin_seeds"})
    IRRebirth.remove({id: "immersiveengineering:squeezer/hemp_seeds"})
    IRRebirth.remove({id: "immersiveengineering:squeezer/wheat_seeds"})
})