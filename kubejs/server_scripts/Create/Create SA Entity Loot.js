EntityEvents.spawned (IRRebirth => {
  const {entity} = IRRebirth 
  if (!entity.alive) return;

  if (entity.isMonster()) {
    if (entity.type == 'minecraft:piglin' || entity.type == 'minecraft:zombified_piglin' || entity.type == 'minecraft:zombie' || entity.type == 'minecraft:skeleton') {
      let nbt = entity.getNbt();

      if (entity.getArmorCoverPercentage() >0 ) {
        let armorSlots = entity.getArmorSlots()
        for (let i = 0; i < armorSlots.length; i++) {
          if (armorSlots[i].getId().contains('create_sa')) {
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

      if (entity.getHandSlots() != '[0 air, 0 air]') {
        let handSlots = entity.getHandSlots()
        for (let i = 0; i < handSlots.length; i++) {
          if (handSlots[i].getId().contains('create_sa')) {
            switch (i) {
              case 0:
                nbt.HandItems[0] = {}
                nbt.HandDropChances[0] = NBT.f(0)
                break;
              case 1:
                nbt.HandItems[1] = {}
                nbt.HandDropChances[1] = NBT.f(0)
            }
          }
        }
      }
      entity.setNbt(nbt);
    }
  }
})