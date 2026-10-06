# Terminál, prosím!

2D webová hra z prostředí check-in přepážky na Letišti Václava Havla Praha.

Hráč během časově omezené směny kontroluje doklady, zavazadla a rozhovory cestujících. Každá směna náhodně vybírá osm případů z databáze 33 situací a mění denní nařízení i provozní události.

Hra obsahuje kombinované a kuriózní případy, interaktivní rozhovory, povinné RTG kontroly, reakce cestujících, animované odbavení, letištní hlášení a závěrečné hodnocení směny.

## Spuštění lokálně

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Poté otevřete `http://127.0.0.1:4173/`.

## Nasazení

Projekt je připravený pro GitHub Pages. Každý push do větve `main` automaticky publikuje obsah složky `dist`.
