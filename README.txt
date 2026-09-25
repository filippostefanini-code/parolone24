PAROLONE 24 — PWA INSTALLABILE SU iPHONE
========================================

Questa versione segue la stessa logica di una web app installabile:
NON serve Xcode e NON serve un account Apple Developer.

CONTENUTO DELLA CARTELLA
- index.html
- manifest.webmanifest
- sw.js
- icon-180.png
- icon-192.png
- icon-512.png

COME PUBBLICARLA SU GITHUB PAGES
1. Vai su github.com e apri il tuo account.
2. Crea un nuovo repository, per esempio:
   parolone24
3. Carica TUTTI i file di questa cartella nella root del repository.
4. Apri:
   Settings > Pages
5. In "Build and deployment":
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
6. Premi Save.
7. GitHub mostrerà l'indirizzo pubblico, in genere:
   https://TUO-UTENTE.github.io/parolone24/

COME METTERLA SULL'IPHONE
1. Apri l'indirizzo GitHub Pages con Safari su iPhone.
2. Tocca Condividi.
3. Tocca "Aggiungi alla schermata Home".
4. Conferma il nome "Parolone 24".
5. L'app comparirà come una normale icona.

COME FUNZIONA
- Tenta di leggere i feed RSS pubblici de Il Sole 24 Ore.
- Se il browser blocca l'accesso diretto al feed, prova automaticamente
  un proxy CORS pubblico (AllOrigins).
- Estrae dai titoli le parole lunghe e crea 3 quiz.
- Ogni risposta sbagliata toglie un cuore.
- 3 errori = Game Over.
- Se i feed non sono disponibili, parte una modalità demo.

NOTA
È un prototipo personale e non è affiliato con Il Sole 24 Ore.
Per un'eventuale pubblicazione pubblica/commerciale conviene verificare
uso del marchio, nome dell'app e condizioni dei feed.
