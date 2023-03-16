
const base_url = 'https://api.edamam.com/api/recipes/v2?type=public';
const api_id = '0a958e23';
const api_key = 'db2ad00a56c6c785f72b5bea65b9a546'



export const getApiUrl = query  => `${base_url}&q=${query}&app_id=${api_id}&app_key=${api_key}`;



export const predefinidedFoodDishes = [
    {_id: 1, title: 'Eggs', selected: false},
    {_id: 2, title: 'Chiken', selected: false},
    {_id: 3, title: 'Milk', selected: false},
    {_id: 4, title: 'Coffee', selected: false},
    {_id: 5, title: 'Banana', selected: false},
    {_id: 6, title: 'Burger', selected: false},
    {_id: 7, title: 'Ramen', selected: false},
    {_id: 8, title: 'Curry', selected: false},
    {_id: 9, title: 'Sushi', selected: false},
    {_id: 10, title: 'Lasagna', selected: false},
];

export const anyFoodDishes = [
    {_id: 1, title: 'Vegan'},
    {_id: 2, title: 'Chips'},
    {_id: 3, title: 'Cookies'},
    {_id: 4, title: 'Apple'},
    {_id: 5, title: 'Potato'},
    {_id: 6, title: 'Tomato'},
    {_id: 7, title: 'Cheese'},
    {_id: 8, title: 'Meat'},
    {_id: 8, title: 'Oat'},
    {_id: 10, title: 'Lentils'},
];
