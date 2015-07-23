import ModuleB from '../../../src/js/demo/ModuleB';

describe('ModuleB', function () {
    'use strict';

    it('can do foo', function () {
        expect((new ModuleB()).foo()).toBe('foo - extended');
    });

    it('can do bar, too', function () {
        expect((new ModuleB()).bar(1, 3, 6)).toBe('x + y = 4 and x + y + z = 10');
    });
});
