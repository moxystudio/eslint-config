// Made up sample.. not genuine

'use strict';

function fnWithManyArgs(x, y,
    z, w) {
    return x + y + z + w;
}

fnWithManyArgs(
    0.3,
    0.2,
    0.3,
    0.5,
);

// -------------------------------------------------

async function fetchData() {
    await Promise.resolve({ some: 'data' });
}

fetchData();
