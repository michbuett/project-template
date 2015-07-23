import ModuleA from '../../../src/js/demo/ModuleA';

describe('ModuleA', function () {
    'use strict';

    it('can do foo', function () {
        expect((new ModuleA()).foo()).toBe('foo');
    });

    it('can do bar, too', function () {
        expect((new ModuleA()).bar(1, 3)).toBe('x + y = 4');
    });
});
