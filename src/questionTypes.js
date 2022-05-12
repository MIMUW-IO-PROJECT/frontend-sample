const immutable = {};

function define(name, value) {
    Object.defineProperty(immutable, name, {
        value: value,
        writable: false,
        enumerable: true,
    });
}

define("SINGLE", "SINGLE");
define("MULTI", "MULTI");
define("OPEN", "OPEN");

Object.freeze(immutable);

export const types = immutable;
