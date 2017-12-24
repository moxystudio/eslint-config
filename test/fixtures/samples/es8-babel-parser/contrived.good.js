// Made up sample.. not genuine

function fetchData() {
    return import('foo');
}

class MyClass {
    foo = () => this.bar();

    bar() {
        return fetchData();
    }
}

export default MyClass;
