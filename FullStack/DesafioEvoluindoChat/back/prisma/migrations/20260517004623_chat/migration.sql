-- CreateTable
CREATE TABLE "Mensagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "remetente" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
