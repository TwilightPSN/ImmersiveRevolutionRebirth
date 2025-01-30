ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type":"immersiveengineering:fermenter",
        "energy":6400,
        "fluid":{"amount":75, "fluid":"immersiveengineering:ethanol"},
        "input":{"tag":"forge:crops"}})
    IRRebirth.remove({id: "immersiveengineering:fermenter/potato"})
    IRRebirth.remove({id: "immersiveengineering:fermenter/melon_slice"})
    IRRebirth.remove({id: "immersiveengineering:fermenter/sweet_berries"})
    IRRebirth.remove({id: "immersiveengineering:fermenter/apple"})
    IRRebirth.remove({id: "immersiveengineering:fermenter/glow_berries"})
    IRRebirth.remove({id: "immersiveengineering:fermenter/beetroot"})
})