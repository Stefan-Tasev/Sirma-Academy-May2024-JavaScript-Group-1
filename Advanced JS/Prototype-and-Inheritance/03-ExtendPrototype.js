function extendPrototype(Class) {
    Class.prototype.species = 'Human';

    Class.prototype.toSpecialString = function() {
        return `I am a <species>. <toString()>`
    }
}