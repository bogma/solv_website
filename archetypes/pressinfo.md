---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
type: pressinfo
series: ["Presseinfo"]
info_year: {{ now.Year }}
info_number: 1
info_date: {{ now.Year }}-01-01
info_place: "Henndorf, "
---

{{< figure src="/images/pressinfo/<image>" caption="<caption>" class="pressinfo" >}}

Pressinfotext