// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function hp(object) {
    if (object.health >= 51) {
        return 'healthy';
    } else if (object.health <= 50 && object.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}

export function sor(mass) {
    mass.sort((a, b) => {
        return b.health - a.health;
        })
    return mass;
}
