const getRealStateItems = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            name: "Teste",
          },
          {
            name: "Teste 2",
          },
        ]),
      1000
    );
  });
};

export { getRealStateItems };
