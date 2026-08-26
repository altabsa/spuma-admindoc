---
sidebar_position: 6
---

# Zakładka - Funkcje JS 
Zakładka **Funkcje JS** służy do definiowania globalnych funkcji JavaScript wykorzystywanych w obliczeniach wartości atrybutów.

Przykład funkcji dodającej 5 dni do bieżącej daty:

```js
function add5days()
{
    var ret = new Date();
    ret.setDate(ret.getDate() + 5);
    return ret;
};
```

---

## Testowanie funkcji

W dolnej części zakładki dostępny jest mechanizm testowania funkcji JavaScript.

- `Numer dokumentu` - ID dokumentu używanego jako kontekst testu.
- `LID` - ID linii dokumentu używanej jako kontekst testu.

Po wskazaniu dokumentu i opcjonalnie linii można wprowadzić kod JavaScript do wykonania i uruchomić test. Pozwala to zweryfikować działanie funkcji na danych konkretnego dokumentu przed użyciem jej w konfiguracji.