// Made up sample.. not genuine

function fetchData() {
    return import(this.foo);
}

class myClass {
    foo = () => this.bar();

    bar() {
        return fetchData()
    }

    baz() {
        return {name: 'André' };
    }
}

const myClassInstance = new myClass();

export default myClassInstance;
