require("../src/data.js");

describe("função filtro", () => {
  it("is a function", () => {
    expect(typeof app.filtrar).toBe("function");
  });

  it("returns `pokemons filtrados por categoria tipo`", () => {
    expect(app.filtrar([
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}, 
      {"id": 4, "num": "004", "name": "Charmander", "type": ["Fire"], "spawn_chance": 0.253, "weaknesses": ["Water", "Ground", "Rock"]},
      {"id": 9, "num": "009", "name": "Blastoise", "type": ["Water"], "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ], "Water", "type" )).toEqual([
      {"id": 9, "num": "009", "name": "Blastoise", "type": ["Water"], "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ]);
  });
  it("returns `pokemons filtrados por categoria fraqueza`", () => {
    expect(app.filtrar([
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}, 
      {"id": 4, "num": "004", "name": "Charmander", "type": ["Fire"], "spawn_chance": 0.253, "weaknesses": ["Water", "Ground", "Rock"]},
      {"id": 9, "num": "009", "name": "Blastoise", "type": ["Water"], "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ], "Psychic", "weaknesses" )).toEqual([
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ]);
  });
});

describe("função ordem", () => {
  it("is a function", () => {
    expect(typeof app.ordenar).toBe("function");
  });

  it("returns `pokemons ordenados por nome`", () => {
    expect(app.ordenar([
      {"id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "spawn_chance": 6.52, "weaknesses": ["Electric", "Ice", "Psychic", "Rock"]}, 
      {"id": 54, "num": "054", "name": "Psyduck", "type": ["Water"], "spawn_chance": 2.54, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 96, "num": "096", "name": "Drowzee", "type": ["Psychic"], "spawn_chance": 3.21, "weaknesses": ["Bug", "Ghost", "Dark"]}, 
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}
    ], "A - Z", "name" )).toEqual([
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]},
      {"id": 96, "num": "096", "name": "Drowzee", "type": ["Psychic"], "spawn_chance": 3.21, "weaknesses": ["Bug", "Ghost", "Dark"]}, 
      {"id": 54, "num": "054", "name": "Psyduck", "type": ["Water"], "spawn_chance": 2.54, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "spawn_chance": 6.52, "weaknesses": ["Electric", "Ice", "Psychic", "Rock"]}
    ]);
  });

  it("returns `pokemons ordenados por raridade`", () => {
    expect(app.ordenar([
      {"id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "spawn_chance": 6.52, "weaknesses": ["Electric", "Ice", "Psychic", "Rock"]}, 
      {"id": 54, "num": "054", "name": "Psyduck", "type": ["Water"], "spawn_chance": 2.54, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 96, "num": "096", "name": "Drowzee", "type": ["Psychic"], "spawn_chance": 3.21, "weaknesses": ["Bug", "Ghost", "Dark"]}, 
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}
    ], "menosRaros", "spawn_chance" )).toEqual([
      {"id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "spawn_chance": 6.52, "weaknesses": ["Electric", "Ice", "Psychic", "Rock"]}, 
      {"id": 96, "num": "096", "name": "Drowzee", "type": ["Psychic"], "spawn_chance": 3.21, "weaknesses": ["Bug", "Ghost", "Dark"]}, 
      {"id": 54, "num": "054", "name": "Psyduck", "type": ["Water"], "spawn_chance": 2.54, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}
    ]);
  });
});

describe("função media", () => {
  it("is a function", () => {
    expect(typeof app.media).toBe("function");
  });

  it("returns `media da altura dos pokemons`", () => {
    expect(app.media(["0.89 m", "1.40 m", "0.61 m", "1.30 m", "0.61 m", "1.09 m", "0.51 m", "0.99 m", "0.79 m", "1.60 m", "0.51 m", "0.79 m", "1.19 m", "0.30 m", "0.99 m", "0.99 m", "1.50 m", "0.20 m", "0.71 m", "0.41 m", "0.99 m"])).toEqual(0.8747619047619049);
  });

  it("returns `media dos pesos dos pokemons`", () => {
    expect(app.media(["19.5 kg", "62.0 kg", "7.5 kg", "40.0 kg", "9.9 kg", "19.9 kg", "5.5 kg", "12.0 kg", "7.5 kg", "55.0 kg", "5.4 kg", "8.6 kg", "18.6 kg", "5.4 kg", "29.5 kg", "30.0 kg", "12.5 kg", "0.8 kg", "33.3 kg", "4.2 kg", "32.0 kg"])).toEqual(19.95714285714286);
  });
});
