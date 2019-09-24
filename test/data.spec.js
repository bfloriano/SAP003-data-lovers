require("../src/data.js");

describe("função filtro", () => {
  it("is a function", () => {
    expect(typeof app.filtrar).toBe("function");
  });

  it("returns `pokemons filtrados por categoria tipo`", () => {
    expect(app.filtrar([
      {"id": 1, "num": "001", "name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": ["Grass", "Poison"],
        "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.69, 
        "avg_spawns": 69, "spawn_time": "20:00", "multipliers": [1.58], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], 
        "next_evolution": [{"num": "002", "name": "Ivysaur"}, {"num": "003", "name": "Venusaur"}]}, 
      {"id": 4, "num": "004", "name": "Charmander", "img": "http://www.serebii.net/pokemongo/pokemon/004.png", "type": ["Fire"], 
        "height": "0.61 m", "weight": "8.5 kg", "candy": "Charmander Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.253, 
        "avg_spawns": 25.3, "spawn_time": "08:45", "multipliers": [1.65], "weaknesses": ["Water", "Ground", "Rock"], 
        "next_evolution": [{"num": "005", "name": "Charmeleon"}, {"num": "006", "name": "Charizard"}]},
      {"id": 9, "num": "009", "name": "Blastoise", "img": "http://www.serebii.net/pokemongo/pokemon/009.png", "type": ["Water"],
        "height": "1.60 m", "weight": "85.5 kg", "candy": "Squirtle Candy", "egg": "Not in Eggs", "spawn_chance": 0.0067,
        "avg_spawns": 0.67, "spawn_time": "00:06", "multipliers": null, "weaknesses": ["Electric", "Grass"],
        "prev_evolution": [{"num": "007", "name": "Squirtle"}, {"num": "008", "name": "Wartortle"}]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "img": "http://www.serebii.net/pokemongo/pokemon/072.png", "type": ["Water", "Poison"],
        "height": "0.89 m", "weight": "45.5 kg", "candy": "Tentacool Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 0.81,
        "avg_spawns": 81, "spawn_time": "03:20", "multipliers": [2.52], "weaknesses": ["Electric", "Ground", "Psychic"],
        "next_evolution": [{"num": "073", "name": "Tentacruel"}]}
    ], "Water", "type" )).toEqual([
      {"id": 9, "num": "009", "name": "Blastoise", "img": "http://www.serebii.net/pokemongo/pokemon/009.png", "type": ["Water"],
        "height": "1.60 m", "weight": "85.5 kg", "candy": "Squirtle Candy", "egg": "Not in Eggs", "spawn_chance": 0.0067,
        "avg_spawns": 0.67, "spawn_time": "00:06", "multipliers": null, "weaknesses": ["Electric", "Grass"],
        "prev_evolution": [{"num": "007", "name": "Squirtle"}, {"num": "008", "name": "Wartortle"}]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "img": "http://www.serebii.net/pokemongo/pokemon/072.png", "type": ["Water", "Poison"],
        "height": "0.89 m", "weight": "45.5 kg", "candy": "Tentacool Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 0.81,
        "avg_spawns": 81, "spawn_time": "03:20", "multipliers": [2.52], "weaknesses": ["Electric", "Ground", "Psychic"],
        "next_evolution": [{"num": "073", "name": "Tentacruel"}]} 
    ]);
  });
});

it("returns `pokemons filtrados por categoria fraqueza`", () => {
  expect(app.filtrar([
    {"id": 1, "num": "001", "name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": ["Grass", "Poison"],
      "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.69, 
      "avg_spawns": 69, "spawn_time": "20:00", "multipliers": [1.58], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], 
      "next_evolution": [{"num": "002", "name": "Ivysaur"}, {"num": "003", "name": "Venusaur"}]}, 
    {"id": 4, "num": "004", "name": "Charmander", "img": "http://www.serebii.net/pokemongo/pokemon/004.png", "type": ["Fire"], 
      "height": "0.61 m", "weight": "8.5 kg", "candy": "Charmander Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.253, 
      "avg_spawns": 25.3, "spawn_time": "08:45", "multipliers": [1.65], "weaknesses": ["Water", "Ground", "Rock"], 
      "next_evolution": [{"num": "005", "name": "Charmeleon"}, {"num": "006", "name": "Charizard"}]},
    {"id": 9, "num": "009", "name": "Blastoise", "img": "http://www.serebii.net/pokemongo/pokemon/009.png", "type": ["Water"],
      "height": "1.60 m", "weight": "85.5 kg", "candy": "Squirtle Candy", "egg": "Not in Eggs", "spawn_chance": 0.0067,
      "avg_spawns": 0.67, "spawn_time": "00:06", "multipliers": null, "weaknesses": ["Electric", "Grass"],
      "prev_evolution": [{"num": "007", "name": "Squirtle"}, {"num": "008", "name": "Wartortle"}]}, 
    {"id": 72, "num": "072", "name": "Tentacool", "img": "http://www.serebii.net/pokemongo/pokemon/072.png", "type": ["Water", "Poison"],
      "height": "0.89 m", "weight": "45.5 kg", "candy": "Tentacool Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 0.81,
      "avg_spawns": 81, "spawn_time": "03:20", "multipliers": [2.52], "weaknesses": ["Electric", "Ground", "Psychic"],
      "next_evolution": [{"num": "073", "name": "Tentacruel"}]}
  ], "Psychic", "weaknesses" )).toEqual([
    {"id": 1, "num": "001", "name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": ["Grass", "Poison"],
      "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.69, 
      "avg_spawns": 69, "spawn_time": "20:00", "multipliers": [1.58], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], 
      "next_evolution": [{"num": "002", "name": "Ivysaur"}, {"num": "003", "name": "Venusaur"}]}, 
    {"id": 72, "num": "072", "name": "Tentacool", "img": "http://www.serebii.net/pokemongo/pokemon/072.png", "type": ["Water", "Poison"],
      "height": "0.89 m", "weight": "45.5 kg", "candy": "Tentacool Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 0.81,
      "avg_spawns": 81, "spawn_time": "03:20", "multipliers": [2.52], "weaknesses": ["Electric", "Ground", "Psychic"],
      "next_evolution": [{"num": "073", "name": "Tentacruel"}]} 
  ]);
});

describe("função ordem", () => {
  it("is a function", () => {
    expect(typeof app.ordenar).toBe("function");
  });

  it("returns `pokemons ordenados por nome`", () => {
    expect(app.ordenar([
      {"id": 41, "num": "041", "name": "Zubat", "img": "http://www.serebii.net/pokemongo/pokemon/041.png", "type": ["Poison", "Flying"],
        "height": "0.79 m", "weight": "7.5 kg", "candy": "Zubat Candy", "candy_count": 50, "egg": "2 km", "spawn_chance": 6.52,
        "avg_spawns": 652, "spawn_time": "12:28", "multipliers": [2.6, 3.67], "weaknesses": ["Electric", "Ice", "Psychic", "Rock"],
        "next_evolution": [{"num": "042", "name": "Golbat"}]}, 
      {"id": 54, "num": "054", "name": "Psyduck", "img": "http://www.serebii.net/pokemongo/pokemon/054.png", "type": ["Water"],
        "height": "0.79 m", "weight": "19.6 kg", "candy": "Psyduck Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 2.54,
        "avg_spawns": 254, "spawn_time": "03:41", "multipliers": [2.27], "weaknesses": ["Electric", "Grass"],
        "next_evolution": [{"num": "055", "name": "Golduck"}]}, 
      {"id": 96, "num": "096", "name": "Drowzee", "img": "http://www.serebii.net/pokemongo/pokemon/096.png", "type": ["Psychic"],
        "height": "0.99 m", "weight": "32.4 kg", "candy": "Drowzee Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 3.21,
        "avg_spawns": 321, "spawn_time": "01:51", "multipliers": [2.08, 2.09], "weaknesses": ["Bug", "Ghost", "Dark"],
        "next_evolution": [{"num": "097", "name": "Hypno"}]}, 
      {"id": 1, "num": "001", "name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": ["Grass", "Poison"],
        "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.69, 
        "avg_spawns": 69, "spawn_time": "20:00", "multipliers": [1.58], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], 
        "next_evolution": [{"num": "002", "name": "Ivysaur"}, {"num": "003", "name": "Venusaur"}]}
    ], "A - Z", "name" )).toEqual([
      {"id": 1, "num": "001", "name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": ["Grass", "Poison"],
        "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.69, 
        "avg_spawns": 69, "spawn_time": "20:00", "multipliers": [1.58], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], 
        "next_evolution": [{"num": "002", "name": "Ivysaur"}, {"num": "003", "name": "Venusaur"}]}, 
      {"id": 96, "num": "096", "name": "Drowzee", "img": "http://www.serebii.net/pokemongo/pokemon/096.png", "type": ["Psychic"],
        "height": "0.99 m", "weight": "32.4 kg", "candy": "Drowzee Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 3.21,
        "avg_spawns": 321, "spawn_time": "01:51", "multipliers": [2.08, 2.09], "weaknesses": ["Bug", "Ghost", "Dark"],
        "next_evolution": [{"num": "097", "name": "Hypno"}]}, 
      {"id": 54, "num": "054", "name": "Psyduck", "img": "http://www.serebii.net/pokemongo/pokemon/054.png", "type": ["Water"],
        "height": "0.79 m", "weight": "19.6 kg", "candy": "Psyduck Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 2.54,
        "avg_spawns": 254, "spawn_time": "03:41", "multipliers": [2.27], "weaknesses": ["Electric", "Grass"],
        "next_evolution": [{"num": "055", "name": "Golduck"}]}, 
      {"id": 41, "num": "041", "name": "Zubat", "img": "http://www.serebii.net/pokemongo/pokemon/041.png", "type": ["Poison", "Flying"],
        "height": "0.79 m", "weight": "7.5 kg", "candy": "Zubat Candy", "candy_count": 50, "egg": "2 km", "spawn_chance": 6.52,
        "avg_spawns": 652, "spawn_time": "12:28", "multipliers": [2.6, 3.67], "weaknesses": ["Electric", "Ice", "Psychic", "Rock"],
        "next_evolution": [{"num": "042", "name": "Golbat"}]}
    ]);
  });
});

it("returns `pokemons ordenados por raridade`", () => {
  expect(app.ordenar([
    {"id": 41, "num": "041", "name": "Zubat", "img": "http://www.serebii.net/pokemongo/pokemon/041.png", "type": ["Poison", "Flying"],
      "height": "0.79 m", "weight": "7.5 kg", "candy": "Zubat Candy", "candy_count": 50, "egg": "2 km", "spawn_chance": 6.52,
      "avg_spawns": 652, "spawn_time": "12:28", "multipliers": [2.6, 3.67], "weaknesses": ["Electric", "Ice", "Psychic", "Rock"],
      "next_evolution": [{"num": "042", "name": "Golbat"}]}, 
    {"id": 54, "num": "054", "name": "Psyduck", "img": "http://www.serebii.net/pokemongo/pokemon/054.png", "type": ["Water"],
      "height": "0.79 m", "weight": "19.6 kg", "candy": "Psyduck Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 2.54,
      "avg_spawns": 254, "spawn_time": "03:41", "multipliers": [2.27], "weaknesses": ["Electric", "Grass"],
      "next_evolution": [{"num": "055", "name": "Golduck"}]}, 
    {"id": 96, "num": "096", "name": "Drowzee", "img": "http://www.serebii.net/pokemongo/pokemon/096.png", "type": ["Psychic"],
      "height": "0.99 m", "weight": "32.4 kg", "candy": "Drowzee Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 3.21,
      "avg_spawns": 321, "spawn_time": "01:51", "multipliers": [2.08, 2.09], "weaknesses": ["Bug", "Ghost", "Dark"],
      "next_evolution": [{"num": "097", "name": "Hypno"}]}, 
    {"id": 1, "num": "001", "name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": ["Grass", "Poison"],
      "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.69, 
      "avg_spawns": 69, "spawn_time": "20:00", "multipliers": [1.58], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], 
      "next_evolution": [{"num": "002", "name": "Ivysaur"}, {"num": "003", "name": "Venusaur"}]}
  ], "menosRaros", "spawn_chance" )).toEqual([
    {"id": 41, "num": "041", "name": "Zubat", "img": "http://www.serebii.net/pokemongo/pokemon/041.png", "type": ["Poison", "Flying"],
      "height": "0.79 m", "weight": "7.5 kg", "candy": "Zubat Candy", "candy_count": 50, "egg": "2 km", "spawn_chance": 6.52,
      "avg_spawns": 652, "spawn_time": "12:28", "multipliers": [2.6, 3.67], "weaknesses": ["Electric", "Ice", "Psychic", "Rock"],
      "next_evolution": [{"num": "042", "name": "Golbat"}]},
    {"id": 96, "num": "096", "name": "Drowzee", "img": "http://www.serebii.net/pokemongo/pokemon/096.png", "type": ["Psychic"],
      "height": "0.99 m", "weight": "32.4 kg", "candy": "Drowzee Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 3.21,
      "avg_spawns": 321, "spawn_time": "01:51", "multipliers": [2.08, 2.09], "weaknesses": ["Bug", "Ghost", "Dark"],
      "next_evolution": [{"num": "097", "name": "Hypno"}]}, 
    {"id": 54, "num": "054", "name": "Psyduck", "img": "http://www.serebii.net/pokemongo/pokemon/054.png", "type": ["Water"],
      "height": "0.79 m", "weight": "19.6 kg", "candy": "Psyduck Candy", "candy_count": 50, "egg": "5 km", "spawn_chance": 2.54,
      "avg_spawns": 254, "spawn_time": "03:41", "multipliers": [2.27], "weaknesses": ["Electric", "Grass"],
      "next_evolution": [{"num": "055", "name": "Golduck"}]}, 
    {"id": 1, "num": "001", "name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": ["Grass", "Poison"],
      "height": "0.71 m", "weight": "6.9 kg", "candy": "Bulbasaur Candy", "candy_count": 25, "egg": "2 km", "spawn_chance": 0.69, 
      "avg_spawns": 69, "spawn_time": "20:00", "multipliers": [1.58], "weaknesses": ["Fire", "Ice", "Flying", "Psychic"], 
      "next_evolution": [{"num": "002", "name": "Ivysaur"}, {"num": "003", "name": "Venusaur"}]}
  ]);
});