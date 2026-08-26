---
sidebar_position: 30
---

# Typy danych

Sekcja **Typy danych** opisuje typy wartości wspólne dla różnych elementów konfiguracji SPUMA, m.in.:

- atrybutów klas,
- parametrów SQL,
- parametrów raportów,
- parametrów procesów.

| Typ | Opis |
| --- | --- |
| `Liczba całkowita` | Wartość całkowita. |
| `Liczba rzeczywista` | Wartość zmiennoprzecinkowa. |
| `Tekst` | Wartość tekstowa. |
| `Czas` | Data i czas. |
| `Partner handlowy` | Pole udostępnia listę partnerów handlowych pobranych z SAP Business One. Dla typu dostępne jest pole `Filtrowanie PH`:<ul><li>Wszyscy aktywni PH</li><li>Wszyscy aktywni dostawcy</li><li>Wszyscy aktywni odbiorcy</li><li>Wszyscy aktywni prospekci</li></ul> |
| `Słownik systemowy` | Pole typu lista rozwijana. Wartość wybierana ze [słownika systemowego.](/docs/spuma-admin/Slowniki/Slowniki-systemowe/systemowe.md) |
| `Słownik użytkownika` | Pole typu lista rozwijana. Pole pobiera wartości ze słownika zdefiniowanego bezpośrednio w konfiguracji atrybutu. Po wybraniu typu użyj opcji `Definiuj`, aby otworzyć konfigurację słownika. Dla każdej pozycji wpisz `Wartość` oraz `Opis`. |
| `Słownik interaktywny` | Pole typu lista rozwijana. Dane są pobierane ze wskazanego [słownika interaktywnego](/docs/spuma-admin/Slowniki/Slowniki-dynamiczne/dynamiczne.md). |
| `Słownik stały` | Pole typu lista rozwijana. Dane są pobierane ze wskazanego [słownika statycznego](/docs/spuma-admin/Slowniki/Slowniki-statystyczne/statyczne.md). |
| `Długi tekst` | Wielowierszowa wartość tekstowa. |

---

### Dodatkowe ustawienia typów słownikowych

Dla typów słownikowych dostępne są dodatkowe ustawienia:

- `Widok listy` - Określa sposób wyświetlania wartości.

| Opcja | Opis |
| --- | --- |
| Auto | System automatycznie dobiera sposób wyświetlania listy. |
| Lista rozwijana | Wartości są wyświetlane jako lista rozwijana. |
| Lista interaktywna | Wartości są wyświetlane jako lista z wyszukiwaniem. |

- `Dowolne wartości` - Zezwala na wpisanie wartości spoza wskazanego słownika.
