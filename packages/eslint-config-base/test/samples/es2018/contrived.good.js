// Made up sample.. not genuine

'use strict';

async function fetchData(params) {
    await Promise.resolve({ some: 'data', ...params });
}

fetchData();
