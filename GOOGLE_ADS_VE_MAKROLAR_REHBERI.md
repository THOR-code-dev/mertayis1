# MOCD Nextmeasure GmbH — Google Ads & Makrolar Zirveye Çıkma Rehberi

Bu rehber, **MOCD Nextmeasure GmbH** web sitesinin Google Ads aramalarında (*"Rauchwarnmelder Montage"*, *"Wasserzähler Austausch"*, *"Messdienst Hausverwaltung"* vb.) **en üst sırada (Top of Page / 1. sıra)** çıkmasını sağlamak ve gelen ziyaretçileri doğrudan B2B teklif talebine (Lead) dönüştürmek için hazırlanmıştır.

---

## 1. Web Sitesine Entegre Edilen Hazır Google Ads & DataLayer Makroları

Web sitenizin altyapısına (React & HTML) Google Ads ve Google Tag Manager (GTM) ile %100 uyumlu **DataLayer Makro Katmanı** entegre edilmiştir.

### Sitede Otomatik Tetiklenen Dönüşüm Olayları:
| Olay Adı (Event) | Açıklama | Tetiklenme Durumu | Google Ads Değeri |
| :--- | :--- | :--- | :--- |
| `b2b_conversion` (form_submission) | B2B Teklif Formu Gönderildi | Ana teklif formu başarıyla doldurulduğunda | 100 EUR |
| `b2b_conversion` (modal_offer_submission) | Modal Hızlı Teklif Gönderildi | Pop-up teklif penceresinden talep geldiğinde | 80 EUR |
| `b2b_conversion` (phone_call) | Telefon Numarasına Tıklandı | Header, Footer veya sabit butona tıklandığında | 25 EUR |
| `b2b_conversion` (whatsapp_click) | WhatsApp B2B Chat Başlatıldı | WhatsApp butonuna tıklandığında | 30 EUR |
| `b2b_conversion` (open_offer_modal) | Teklif Butonuna Tıklandı | Ziyaretçi teklif isteme niyetini gösterdiğinde | 10 EUR |

### Google Ads Takip Kodunuzu Eklemek İçin:
`index.html` dosyasındaki `<script>` alanına Google Ads ID'nizi girmeniz yeterlidir:
```html
<!-- Google Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX'); // Kendi Google Ads ID'nizi buraya yazın
</script>
```

---

## 2. Google Ads Kampanya Mimarisi (B2B Odaklı)

Bütçenizi gereksiz tekil ev sahiplerine (B2C) harcamamak ve doğrudan **Hausverwaltungen** ve **Wohnungsunternehmen** şirketlerine ulaşmak için 4 ana reklam grubu (Ad Groups) oluşturun:

### 🎯 Reklam Grubu 1: Rauchwarnmelder (En Yüksek Hacimli & Acil)
**Hedeflenen Anahtar Kelimeler (Phrase Match & Exact Match):**
* `"Rauchwarnmelder Montage"`
* `"Rauchwarnmelder Wartung DIN 14676"`
* `"Rauchwarnmelder kaufen Hausverwaltung"`
* `"Rauchmelder Komplettservice"`
* `"Rauchwarnmelder Austausch 10 Jahre"`
* `[Rauchwarnmelder Großbestand]`
* `"Rauchmelder Wohnungsbaugesellschaft"`

**Örnek Reklam Başlıkları (Headlines - 30 Karakter):**
1. Rauchwarnmelder Montage B2B
2. DIN 14676 Fachkräfte
3. Gerät + Montage + Wartung
4. Für Hausverwaltungen
5. Deutschlandweit im Einsatz
6. Jetzt Festpreis anfordern

**Örnek Reklam Açıklamaları (Descriptions - 90 Karakter):**
* *Komplettlösung für Rauchwarnmelder: Lieferung, DIN-Montage, lückenlose Fotodokumentation.*
* *Maßgeschneiderte Großkunden-Konditionen für 10 bis 5.000+ Wohnungen. Angebot in 24h.*

---

### 🎯 Reklam Grubu 2: Wasserzähler & Wärmezähler (Turnus & Montage)
**Hedeflenen Anahtar Kelimeler:**
* `"Wasserzähler Austausch"`
* `"Wasserzähler Montage"`
* `"Wärmezähler Montage"`
* `"Wärmezähler Turnuswechsel"`
* `"Wasserzähler Eichfrist"`
* `"Zählerwechsel Deutschland"`
* `[Wasserzähler Hausverwaltung]`

**Örnek Reklam Metinleri:**
* *Başlık:* Wasser- & Wärmezähler Service | Rechtssicher nach Eichgesetz | MOCD Nextmeasure
* *Açıklama:* Termingerechter Zählerwechsel inkl. digitaler Mieterterminierung und Barcode-Erfassung.

---

### 🎯 Reklam Grubu 3: Heizkostenverteiler & Ablesung (HKVO)
**Hedeflenen Anahtar Kelimeler:**
* `"Heizkostenverteiler Montage"`
* `"Heizkostenverteiler Funk"`
* `"Heizkostenverteiler Austausch"`
* `"Zählerablesung Hausverwaltung"`
* `"Submetering Deutschland"`

---

### 🎯 Reklam Grubu 4: Bölgesel / Şehir Bazlı B2B Kampanyalar (Local High-Intent)
Google Ads'te coğrafi hedefleme ile yüksek bütçeli büyük şehirler:
* `"Messdienst Köln"` / `"Rauchwarnmelder Montage Köln"`
* `"Messdienst Düsseldorf"` / `"Rauchwarnmelder Düsseldorf"`
* `"Messdienst Dortmund"` / `"Messdienst Essen"`
* `"Messdienst Frankfurt"` / `"Messdienst München"`
* `"Messdienst Berlin"` / `"Messdienst Hamburg"`

*(Web sitenizdeki interaktif şehir seçici sayesinde bu aramalardan gelen müşteriler doğrudan kendi şehirlerine özel bilgileri görür).*

---

## 3. Olmazsa Olmaz: Negatif Anahtar Kelime Listesi (Negative Keywords)

Google Ads'te paranızın boşa gitmesini engelleyen en kritik adım **B2C ve ucuzcu aramaları engellemektir**. Kampanyanıza şu negatif kelimeleri ekleyin:

* `selber machen` (kendin yap)
* `bauhaus`, `obi`, `hornbach`, `toom` (yapı market arayanlar)
* `amazon`, `ebay`, `kleinanzeigen` (perakende tek ürün arayanlar)
* `kostenlos`, `gratis`, `billig`
* `test`, `stiftung warentest` (sadece inceleme okuyanlar)
* `batterie wechseln anleitung` (bireysel tamir arayanlar)
* `gehalt`, `ausbildung`, `jobs` (iş arayanlar - ayrı kariyer sayfası yoksa)

---

## 4. Google Ads Kalite Puanı (Quality Score: 10/10) Neden Garantilendi?

Google Ads'te 1. sıraya çıkmak sadece çok para vermekle değil, **Kalite Puanı (Quality Score)** ile olur. Hazırladığımız web sitesi şu 3 kriteri %100 karşılar:

1. **Açılış Sayfası Deneyimi (Landing Page Experience):**
   * Mobil uyumlu (Mobile-first responsive)
   * Ultra hızlı açılış süresi (Vite/React optimize bundle)
   * Güvenlik (HTTPS, DSGVO uyumlu formlar, Impressum, DIN 14676 sertifika vurgusu)
2. **Reklam Alaka Düzeyi (Ad Relevance):**
   * Anahtar kelimeler (`Rauchwarnmelder`, `Wasserzähler`, `Wärmezähler`, `Heizkostenverteiler`, `Hausverwaltung`) sitenin H1, H2 başlıklarında ve meta etiketlerinde eksiksiz yer alır.
3. **Beklenen Tıklama Oranı (Expected CTR):**
   * Net B2B çağrı butonları (*"ANGEBOT ANFORDERN"*, *"24h Rückmeldung"*, *"Deutschlandweit"*).

---

## 5. Başlatma ve Canlıya Alma Komutları

Geliştirme ortamında çalıştırmak için:
```bash
npm run dev
```

Sunucuya yüklemek üzere canlı üretim (Production) paketini almak için:
```bash
npm run build
```
*(Oluşan `dist/` klasöründeki dosyaları herhangi bir web sunucusuna veya hostinge yükleyebilirsiniz).*
