const $InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const $InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')

StartupEvents.registry('mekanism:infuse_type', event => {
    event.createCustom('kubejs:echo', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x115e6c)))
})
