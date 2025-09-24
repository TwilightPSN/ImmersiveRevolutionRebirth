const $InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const $InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')

StartupEvents.registry('mekanism:infuse_type', IRRebirth => {
    IRRebirth.createCustom('kubejs:echo', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x115e6c)))
    IRRebirth.createCustom('kubejs:fluix', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x674EA7)))
})
