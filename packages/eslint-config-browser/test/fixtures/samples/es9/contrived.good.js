// Made up sample.. not genuine

async function fetchData(params) {
    await Promise.resolve({ some: 'data', ...params });
}

fetchData();
