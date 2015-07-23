import ModuleA from './ModuleA';

class ModuleB extends ModuleA {

    foo() {
        return super.foo() + ' - extended';
    }

    bar(x, y, z) {
        var result = super.bar(x, y);
        result += ' and x + y + z = ' + (x + y + z);
        return result;
    }
}

export default ModuleB;
