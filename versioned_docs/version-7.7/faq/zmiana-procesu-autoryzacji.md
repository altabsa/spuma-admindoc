---
id: zmiana-procesu-autoryzacji
title: Zmiana procesu autoryzacji w trakcie obiegu dokumentów
---

# Zmiana procesu autoryzacji w trakcie obiegu dokumentów

**Zgłoszony problem**

Klient chce zmodyfikować istniejący proces autoryzacji, np. dodać nowy etap, ale część dokumentów jest już w trakcie obiegu.

Po zapisaniu zmian pojawia się komunikat:

```text
Czy zaktualizować powiązane dokumenty w początkowym stadium autoryzacji?
```

---

**Rozwiązanie**

Zmiana procesu autoryzacji w trakcie trwających obiegów może wpłynąć na dokumenty, które już korzystają z tego procesu.

Jeżeli potwierdzisz komunikat:

1. powiązane otwarte procesy zostaną zaktualizowane,
2. dokumenty rozpoczną ścieżkę autoryzacji od początku,
3. dalszy przebieg będzie odbywał się według zmodyfikowanej definicji procesu.

Jeżeli odrzucisz komunikat, istniejące dokumenty pozostaną w dotychczasowym obiegu, ale mogą pojawić się problemy wynikające z różnic pomiędzy aktualną definicją procesu a stanem rozpoczętych wcześniej autoryzacji.

### Zalecane rozwiązanie

Najbezpieczniejszym sposobem wprowadzenia zmian jest utworzenie nowego procesu autoryzacji.

1. skopiuj lub utwórz nowy proces na podstawie dotychczasowego,
2. wprowadź wymagane zmiany, np. dodaj nowy etap,
3. odłącz stary proces od klas dokumentów,
4. dla czytelności zmień nazwę starego procesu, np. dodając dopisek `OLD`,
5. przypisz nowy proces do odpowiednich klas,
6. zapisuj nowe dokumenty z wykorzystaniem nowego procesu,
7. dokumenty, które rozpoczęły wcześniej autoryzację, dokończ w starym procesie.

Dzięki temu nowe dokumenty korzystają już ze zmienionego obiegu, a rozpoczęte wcześniej procesy mogą zostać zakończone bez ingerencji w ich dotychczasowy przebieg.

---