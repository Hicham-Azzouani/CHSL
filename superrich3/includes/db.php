<?php
$db_pad = __DIR__ . '/../database/superrich2.db';

$pdo = new PDO('sqlite:' . $db_pad);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->exec("
    CREATE TABLE IF NOT EXISTS berichten (
        id        INTEGER PRIMARY KEY AUTOINCREMENT,
        product   TEXT NOT NULL,
        categorie TEXT NOT NULL DEFAULT 'overig',
        naam      TEXT NOT NULL,
        email     TEXT NOT NULL,
        bericht   TEXT NOT NULL,
        bod       REAL DEFAULT NULL,
        datum     TEXT DEFAULT (datetime('now'))
    )
");
