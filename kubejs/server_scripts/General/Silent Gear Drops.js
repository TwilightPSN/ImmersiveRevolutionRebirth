EntityEvents.spawned (IRRebirth => {
  const {entity} = IRRebirth 
  if (!entity.alive) return;

  if (entity.isMonster()) {
    if (entity.type == 'minecraft:piglin' || entity.type == 'minecraft:zombified_piglin' || entity.type == 'minecraft:zombie' || entity.type == 'minecraft:skeleton') {
      let nbt = entity.getNbt();

      if (entity.getArmorCoverPercentage() >0 ) {
        let armorSlots = entity.getArmorSlots()
        for (let i = 0; i < armorSlots.length; i++) {
          if (armorSlots[i].getId().contains('silentgear')) {
            switch (i) {
              case 0:
                nbt.ArmorItems[0] = {}
                nbt.ArmorDropChances[0] = NBT.f(0)
                break;
              case 1:
                nbt.ArmorItems[1] = {}
                nbt.ArmorDropChances[1] = NBT.f(0)
                break;
              case 2:
                nbt.ArmorItems[2] = {}
                nbt.ArmorDropChances[2] = NBT.f(0)
                break;
              case 3:
                nbt.ArmorItems[3] = {}
                nbt.ArmorDropChances[3] = NBT.f(0)
            }
          }
        }
      }
      entity.setNbt(nbt);
    }
  }
})