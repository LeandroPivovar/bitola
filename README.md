# Bitola Serviços Elétricos

Site institucional (amostra) do eletricista Bitola, em Foz do Iguaçu - PR.
HTML/CSS/JS estático, sem build. Abre direto no navegador ou com:

```bash
npx --yes serve . -l 5400
```

## Estrutura

```
index.html
assets/
  css/styles.css
  js/main.js              menu mobile, animação de entrada, formulário -> WhatsApp
  fonts/phosphor/         ícones Phosphor (woff2 local, licença MIT)
  img/                    fotos otimizadas, logo recortada, favicon
```

## Dados usados (fonte: WhatsApp Business, flyers e catálogo do cliente)

| Campo | Valor |
|---|---|
| Nome | Bitola Serviços Elétricos |
| Slogan | A medida certa para sua segurança |
| WhatsApp | +55 45 9138-2401 (`wa.me/554591382401`) |
| Cidade | Foz do Iguaçu - PR |
| Horário | Aberto 24 horas |
| Serviços | catálogo do WhatsApp + flyers |

## Confirmar com o cliente

- **Telefone para ligação**: o WhatsApp mostra `9138-2401` (8 dígitos). O link `tel:` usa `+55 45 99138-2401` (com o 9 do celular). Confirmar se o número correto para ligar tem o 9.
- **E-mail, Instagram, endereço e CNPJ**: não aparecem nos prints, por isso não estão no site. O mapa mostra só a cidade.
- **Preços**: o catálogo mostra R$ 300,00 em "circuitos de comando" e "montagem de quadro". Não foram publicados no site; o site fala em orçamento.
- **Anos de experiência / número de clientes**: não informados, nenhum número foi inventado.

## Depoimentos

Os 3 depoimentos são **placeholders genéricos** (sem nome de pessoa), marcados com
`<!-- PLACEHOLDER: trocar por avaliação real do Google -->` no `index.html`.
Trocar por avaliações reais do Google assim que o cliente mandar.

## Logo

Recortada do mockup enviado pelo cliente (`logo-bitola.png`, 512 px, fundo transparente em círculo).
Para melhor qualidade, pedir ao cliente o arquivo original da logo (PNG/SVG).

## Fotos

Todas do Pexels, uso livre para fim comercial, baixadas e servidas localmente.

| Arquivo | Fonte |
|---|---|
| `hero-quadro.jpg` | <https://www.pexels.com/photo/27928762/> |
| `quadro-disjuntores.jpg` | <https://www.pexels.com/photo/257736/> |
| `tomadas.jpg` | <https://www.pexels.com/photo/5691588/> |
| `iluminacao-led.jpg` | <https://www.pexels.com/photo/6585757/> |
| `limpeza-solar.jpg` | <https://www.pexels.com/photo/33379364/> |
| `eletricista-manutencao.jpg` | <https://www.pexels.com/photo/8005397/> |

Ícones: Phosphor Icons (MIT). Fontes: Barlow e Barlow Condensed (Google Fonts, OFL).
