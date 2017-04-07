import { omit } from 'lodash';

export default function foo() {
    omit({ foo: 'bar' }, 'baz');
}
