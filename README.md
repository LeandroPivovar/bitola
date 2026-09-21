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
| Instagram | <https://www.instagram.com/bitola_servicos_eletricos/> |

## Confirmar com o cliente

- **Telefone para ligação**: o WhatsApp mostra `9138-2401` (8 dígitos). O link `tel:` usa `+55 45 99138-2401` (com o 9 do celular). Confirmar se o número correto para ligar tem o 9.
- **E-mail, endereço e CNPJ**: não foram informados. O mapa mostra só a cidade.
- **Preços**: o catálogo mostra R$ 300,00 em "circuitos de comando" e "montagem de quadro". Não foram publicados no site; o site fala em orçamento.
- **Anos de experiência / número de clientes**: não informados, nenhum número foi inventado.

## Depoimentos

Os 3 depoimentos são **placeholders genéricos** (sem nome de pessoa), marcados com
`<!-- PLACEHOLDER: trocar por avaliação real do Google -->` no `index.html`.
Trocar por avaliações reais do Google assim que o cliente mandar.

## Logo

Arquivo PNG com fundo transparente enviado pelo cliente, aparado e exportado em 512, 256, 180 (apple-touch) e 64 px (favicon).

## Serviços realizados (fotos reais)

Fotos enviadas pelo cliente via WhatsApp (21/09/2026), em `assets/img/obras/`, com ampliação ao clicar.
Legendas deduzidas pelas fotos; confirmar com o cliente.

| Arquivo | Legenda |
|---|---|
| `qdc-montagem.jpg` | Montagem de quadro de distribuição com DPS e cabos organizados |
| `quadro-comando.jpg` | Quadro de comando com fios identificados |
| `placas-solares.jpg` | Limpeza de placas solares |
| `qdc-finalizado.jpg` | Quadro de distribuição finalizado |
| `perfil-led.jpg` | Perfil de LED embutido no gesso (print recortado, resolução baixa) |
| `ramal-antes.jpg` / `ramal-depois.jpg` | Antes e depois de emenda de ramal |

## Fotos de banco

Todas do Pexels, uso livre para fim comercial, baixadas e servidas localmente.

| Arquivo | Fonte |
|---|---|
| `quadro-disjuntores.jpg` | <https://www.pexels.com/photo/257736/> |
| `tomadas.jpg` | <https://www.pexels.com/photo/5691588/> |
| `iluminacao-led.jpg` | <https://www.pexels.com/photo/6585757/> |
| `limpeza-solar.jpg` | <https://www.pexels.com/photo/33379364/> |

## Imagens novas

- `hero-foz-eletrica.webp`: imagem ilustrativa gerada com a ferramenta integrada de imagens. Prompt final: fotografia editorial horizontal de um quadro de distribuição em manutenção, com mãos enluvadas em primeiro plano e as Cataratas do Iguaçu ao fundo; iluminação natural, sem logotipo nem texto.
- `og-hero.jpg`: versão JPG da hero para prévia de link (WhatsApp, redes).
- `bitola-profissional.webp`: **não é foto do cliente**. É a foto de banco do Pexels (<https://www.pexels.com/photo/27928762/>, usada antes na hero) retocada por IA. Trocar por foto real do eletricista da Bitola.
- O Instagram está em um destaque após a galeria de obras, na seção de atendimento e no rodapé.

Ícones: Phosphor Icons (MIT). Fontes: Barlow e Barlow Condensed (Google Fonts, OFL).
