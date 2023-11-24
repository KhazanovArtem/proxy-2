import  getSpecials from '../app'

test('check func getSpecials', ()=> {
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
      };

    const result = [      
{id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон'},      
{id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно'},
    ];
    const specials = getSpecials(character);
    expect(specials).toEqual(result);
})