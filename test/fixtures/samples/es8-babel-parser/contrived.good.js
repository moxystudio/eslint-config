// Made up sample.. not genuine

function fetchData() {
    return import('foo');
}

class MyClass {
    myObject = {};

    foo = () => this.bar();

    bar() {
        this.myObject?.foo();

        return fetchData();
    }
}

export default MyClass;
