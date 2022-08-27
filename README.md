# Yedua
A very simple web scrapper that visualizes the DOM.

https://rowadz.github.io/Yedua/

* if you go to the `code` branch then these two files => `Yedua-api/src/composers/DomScraper.ts` & `Yedua-api/src/routes/scrap.ts`
you will see the logic behind recursive scrapper (ps: press **t** then search for the file name).

* The front-end just visualizes the DOM

* **if you choose ∞ levels the website might be really laggy for some websites**

* you can test on this one `https://www.infinitysymbol.net/` or this `https://motherfuckingwebsite.com`.


# Install

```bash
$ git clone https://github.com/MohammedAl-Rowad/Yedua.git
$ cd Yedua
$ git checkout code
# there is an api and client
$ cd Yedua-api
$ npm i
$ npm run start-dev
$ cd ..
$ cd Yedua-client
$ npm i
$ ng s
```

