const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }

  export default function getSpecials(obj) {
    const special = obj.special;
    special.forEach(element => {
        if (!('description' in element)) {
            const proxy = new Proxy(element, {
                set(target, key, value, reciever) {
                    return Reflect.set(target, key, value, reciever)
                }
            })
            proxy.description = 'Описание недоступно';
        }
    });
    return special;
  }
  console.log(getSpecials(character));
