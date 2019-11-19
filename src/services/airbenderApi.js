export const getCharacters = (perPage = 10, page = 1) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`)
    .then(res => res.json());
};

export const getCharacter = (character = 'random') => {
  if(character === 'random') {
    return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
      .then(res => res.json());
  }
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${character}`)
    .then(res => res.json());
};

export const getSpecificCharacter = (id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};


// export const getCharacter = (options) => {
//   let url = 'https://last-airbender-api.herokuapp.com/api/v1/characters';
//   if(options.random) url += '/random';
//   else if(options.id) url += `/${options.id}`
//   else if(options.search && options.search === '*') {
//     url += `?perPage=${options.perPage || 10}&page=${options.page || 1}`;
//   }
//   else {
//     url += `?name=${options.search}&perPage=${options.perPage || 10}&page=${options.page || 1}`;
//   }

//   return fetch(url)
//     .then(res => {
//       return res.json();
//     });
// };
