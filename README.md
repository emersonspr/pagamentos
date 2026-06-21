# Pagamentos

Projeto de automação de testes desenvolvido com Node.js e Mocha para validação de funcionalidades relacionadas ao sistema de pagamentos.

## Tecnologias

* Node.js
* Mocha
* Mochawesome
* GitHub Actions

## Pré-requisitos

Antes de iniciar, certifique-se de possuir:

* Node.js 20 ou superior
* NPM

## Instalação

Clone o repositório:

```bash
git clone https://github.com/emersonspr/pagamentos.git
cd pagamentos
```

Instale as dependências:

```bash
npm install
```

## Execução dos Testes

Para executar todos os testes e gerar o relatório Mochawesome:

```bash
npm test
```

## Relatórios

Após a execução dos testes, o relatório HTML será gerado automaticamente no diretório:

```text
mochawesome-report/
```

Abra o arquivo abaixo em seu navegador:

```text
mochawesome-report/mochawesome.html
```

## Estrutura do Projeto

```text
.
├── test/
│   └── *.spec.js
├── mochawesome-report/
├── .github/
│   └── workflows/
├── package.json
└── README.md
```

## Integração Contínua

O projeto utiliza GitHub Actions para execução automatizada dos testes:

* Execução a cada push na branch principal;
* Execução manual através do workflow_dispatch;
* Execução agendada via cron;
* Publicação automática dos relatórios Mochawesome como artefatos da pipeline.

## Dependências Principais

| Pacote                       | Finalidade                  |
| ---------------------------- | --------------------------- |
| Mocha                        | Framework de testes         |
| Mochawesome                  | Geração de relatórios HTML  |
| Mochawesome Report Generator | Renderização dos relatórios |

## Executando Localmente

```bash
npm install
npm test
```

## Autor
Desenvolvido por Emerson.
