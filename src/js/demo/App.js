'use strict';

import ModuleA from './ModuleA';
import ModuleB from './ModuleB';

export default {
    demo: function() {
        var ma = new ModuleA();
        var mb = new ModuleB();

        return [
            'Module A',
            'Module A - foo:', ma.foo(),
            'Module A - bar:', ma.bar(2, 3),
            '',
            'Module B',
            'Module B - foo:', mb.foo(),
            'Module B - bar:', mb.bar(2, 3, 5),
        ].join('<br>');
    },
};
