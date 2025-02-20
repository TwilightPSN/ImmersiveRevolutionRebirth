//const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
//const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

//StartupEvents.registry('mekanism:slurry', IRRebirth => {
//    let slurry = (ore, color) => {
//        IRRebirth.createCustom(`kubejs:dirty_${ore}`, () => new $Slurry($SlurryBuilder.dirty().tint(color)))
//        IRRebirth.createCustom(`kubejs:clean_${ore}`, () => new $Slurry($SlurryBuilder.clean().tint(color)))
//    }

//    slurry('netherite', 0x594e44)
//})