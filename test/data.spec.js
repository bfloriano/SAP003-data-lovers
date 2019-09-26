require("../src/data.js");

describe("função filtro", () => {
  it("is a function", () => {
    expect(typeof app.filtrar).toBe("function");
  });
  it("returns `pokemons filtrados categoria e tipo`", () => {
    expect(app.filtrar([
      {"id": 1, "name": "Bulbasaur", "type": ["Grass", "Poison"], "height": "0.71 m", "weight": "6.9 kg", "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}, 
      {"id": 4, "name": "Charmander", "type": ["Fire"], "height": "0.61 m", "weight": "8.5 kg", "spawn_chance": 0.253, "weaknesses": ["Water", "Ground", "Rock"]},
      {"id": 9, "name": "Blastoise", "type": ["Water"], "height": "1.60 m", "weight": "85.5 kg", "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass" ]},
      {"id": 72, "name": "Tentacool", "type": ["Water", "Poison"], "height": "0.89 m", "weight": "45.5 kg", "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ], "Water", "type" )).toEqual([
      {"id": 9, "name": "Blastoise", "type": ["Water"], "height": "1.60 m", "weight": "85.5 kg", "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass" ]},
      {"id": 72, "name": "Tentacool", "type": ["Water", "Poison"], "height": "0.89 m", "weight": "45.5 kg", "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ]);
  });
});

