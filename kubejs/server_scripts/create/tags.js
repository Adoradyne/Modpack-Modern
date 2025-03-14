// priority: 0

const registerCreateItemTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Тэги для ручек и сидушек
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`)
        
        if (dye != 'white') event.add('tfg:colored_seats', `create:${dye}_seat`)
    })

    // Add "cloth" items so sails can be created with any kind of cloth instead of wool blocks
    event.add('tfg:usable_in_sail_frame', 'tfc:burlap_cloth')
    event.add('tfg:usable_in_sail_frame', 'tfc:wool_cloth')
    event.add('tfg:usable_in_sail_frame', "tfc:silk_cloth")

    event.add('minecraft:trimmable_armor', 'create:copper_diving_helmet')
    event.add('minecraft:trimmable_armor', 'create:copper_diving_boots')

}

const registerCreateBlockTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Тэги для ручек и сидушек
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`)
        
        if (dye != 'white') event.add('tfg:colored_seats', `create:${dye}_seat`)
    })
}


const registerCreateFluidTags = (event) => {
    
    // Делаем воду из TFC бесконечной для помпы Create
    event.add('create:bottomless/allow', 'tfc:fresh_water')
    event.add('create:bottomless/allow', 'tfc:salt_water')

    // Добавляем тег для скрытия в EMI
    event.add('c:hidden_from_recipe_viewers', 'create:chocolate')
    event.add('c:hidden_from_recipe_viewers', 'create:honey')
}
