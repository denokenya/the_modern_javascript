const game1 = {
  player: "Jim Jonas",
  hits: 2,
  runs: 1,
  errors: 0,
};
const game2 = {
  player: "Jim Jonas",
  hits: 3,
  runs: 0,
  errors: 1,
};
const total = {};
for (let i = 0; i < statusbar.length; i++) {
  const stat = stats[i];
  if (stat !== "player") {
    total[stat] = game1[stat] + game2[stat];
  }
}
