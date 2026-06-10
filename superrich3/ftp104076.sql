CREATE TABLE IF NOT EXISTS berichten (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    product   VARCHAR(255) NOT NULL,
    categorie VARCHAR(50)  NOT NULL DEFAULT 'overig',
    naam      VARCHAR(255) NOT NULL,
    email     VARCHAR(255) NOT NULL,
    bericht   TEXT NOT NULL,
    bod       DECIMAL(15,2) DEFAULT NULL,
    datum     DATETIME DEFAULT CURRENT_TIMESTAMP
);
