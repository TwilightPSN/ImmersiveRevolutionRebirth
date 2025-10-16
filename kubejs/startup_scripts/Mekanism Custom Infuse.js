const $InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const $InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')

StartupEvents.registry('mekanism:infuse_type', IRRebirth => {
    IRRebirth.createCustom('kubejs:echo', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x115e6c)))
    IRRebirth.createCustom('kubejs:fluix', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x674EA7)))
    IRRebirth.createCustom('kubejs:refined_glowstone', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0xE5CA79)))
    IRRebirth.createCustom('kubejs:iron', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0xC3C3C3)))
})