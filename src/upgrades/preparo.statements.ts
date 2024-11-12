export const PreparoUpgradeStatements = [
    {
      toVersion: 1,
      statements: [
          `CREATE TABLE IF NOT EXISTS preparos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            list_index INTEGER NOT NULL,
            passo TEXT NOT NULL,
            receita_id INTEGER NOT NULL,
            FOREIGN KEY (receita_id) REFERENCES receitas(id) ON DELETE CASCADE
          );`,
      ],
    },
]