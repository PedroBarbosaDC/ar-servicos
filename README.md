# AR Serviços Ambientais - Website

Website institucional da AR Serviços Ambientais, desenvolvido com Next.js e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Google Maps API

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Configuração do Projeto

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd ar-servicos-ambientais
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_api_aqui
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Acesse o projeto em `http://localhost:3000`

## Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas da aplicação
├── components/            # Componentes reutilizáveis
└── styles/               # Estilos globais
public/
└── images/              # Imagens e assets
```

## Páginas

- Home (`/`)
- Sobre Nós (`/sobre`)
- Serviços (`/servicos`)
- Parceiros (`/parceiros`)
- Blog (`/blog`)
- Contato (`/contato`)

## Imagens Necessárias

Para o funcionamento completo do site, você precisará adicionar as seguintes imagens na pasta `public/images/`:

- `hero-bg.jpg` - Imagem de fundo para a seção hero
- `blog/aterro-sanitario.jpg`
- `blog/reserva-legal.jpg`
- `blog/modelagem.jpg`
- Logos dos parceiros (a serem adicionados)

## Personalização

- Cores: As cores principais podem ser alteradas no arquivo `tailwind.config.js`
- Fontes: A fonte principal é a Inter, configurada no arquivo `layout.tsx`
- Conteúdo: O conteúdo pode ser editado diretamente nos arquivos das páginas

## Deploy

O site está configurado para ser facilmente deployado em plataformas como Vercel, Netlify ou AWS.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 