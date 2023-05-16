 const heroes = [
    {
        id: 1,
        name: 'SuperMan',
        company: 'DC'
    },
    {
        id: 2,
        name: 'Batman',
        company: 'DC'
    },
    {
        id: 3,
        name: 'Capitan America',
        company: 'Marvel',
    },
    {
        id: 4,
        name: 'Iron Man',
        company: 'Marvel'
    },
    {
        id: 5,
        name: 'Spiderman',
        company: 'Marvel'
    }
]

const companies = [
    {
        id: 1,
        name: 'DC'
    },
    {
        id: 2,
        name: 'Marvel'
    }
];

// export default heroes;

export {
    heroes as default,
    companies,
}