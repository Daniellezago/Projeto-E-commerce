# Desenvolvimento Web em HTML5, CSS, JavaScript e PHP

Código desenvolvido ao longo das aulas da disciplina TMS0058 (YDUQS/Estácio),
Prof. Wender Firmino.

## Esta branch: `parte5` (S8, 28/09)

CSS responsivo (retomando o que ficou pendente de 21/09) + primeira
interatividade em JavaScript no `projeto-ecommerce/`:

- **Responsividade** — `viewport`, `box-sizing: border-box`, `.container`,
  imagens fluidas e a grade de produtos com breakpoints em 600px/992px
  (o "Plano B" da aula, caso o checkpoint mostre que a turma não praticou
  em 21/09).
- **Etapa 1** — mensagem de frete com `if`/`else` (`#aviso-frete`).
- **Etapa 2** — menu que abre/fecha no celular com `classList.toggle` e
  `addEventListener("click", ...)`.
- **Etapa 3** — validação simples do formulário de contato com
  `addEventListener("submit", ...)` e `evento.preventDefault()`.

```
projeto-ecommerce/
├── index.html          (header+menu, banner, vitrine, form de contato, footer)
├── css/style.css        (responsividade + CSS do menu)
├── js/app.js             (frete, menu, validação do formulário)
└── img/
```

> **Nota de reconstrução:** este código foi reconstruído a partir do
> material da aula (slides "Plano B", "Etapa 1/2/3"), pois o código escrito
> em sala não foi arquivado neste workspace. Reflete o que os slides
> ensinam a implementar — confira contra o que de fato foi feito em sala
> antes de usar como gabarito.

Ponto de partida desta aula: `parte4` (S6, 14/09) — a S7 (21/09) não gerou
código novo (ver README da `parte4`).

A partir de hoje começa a valer a **Atividade A1** (landing page
responsiva, 2,0 pts, entrega 19/10): cabeçalho com menu, vitrine com pelo
menos 6 produtos, formulário de contato, HTML semântico, CSS externo e
Mobile First — JavaScript no menu é opcional para a atividade.

## Navegação entre as partes

Veja `README.md` da branch `master` para a tabela completa de branches.
