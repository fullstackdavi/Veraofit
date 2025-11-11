# Tutorial: Deploy no Vercel

Este guia mostra como fazer o deploy desta aplicação full-stack (Express + React) no Vercel.

## Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Conta no [GitHub](https://github.com) (recomendado)
- Node.js instalado localmente
- Banco de dados PostgreSQL (recomendado: [Neon](https://neon.tech) ou [Supabase](https://supabase.com))

## Passo 1: Preparar o Projeto

### 1.1 Criar arquivo `vercel.json`

Crie um arquivo `vercel.json` na raiz do projeto:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": null,
  "outputDirectory": "dist/public",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api"
    },
    {
      "source": "/(.*)",
      "destination": "/api"
    }
  ]
}
```

### 1.2 Criar arquivo de API para Vercel

Crie o arquivo `api/index.js` na raiz do projeto:

```javascript
// Este arquivo permite que o Vercel execute o servidor Express
import handler from '../dist/index.js';

export default handler;
```

### 1.3 Atualizar o servidor Express

Certifique-se de que o arquivo `server/index.ts` exporta o app Express como default:

```typescript
// No final do arquivo server/index.ts, certifique-se de ter:
export default app;
```

## Passo 2: Configurar Banco de Dados

### Opção A: Usar Neon (Recomendado)

1. Crie uma conta em [Neon.tech](https://neon.tech)
2. Crie um novo projeto
3. Copie a connection string (formato: `postgresql://user:password@host/database`)
4. Guarde essa string para usar nas variáveis de ambiente

### Opção B: Usar Supabase

1. Crie uma conta em [Supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Vá em Settings > Database
4. Copie a connection string no formato "URI"
5. Guarde essa string para usar nas variáveis de ambiente

## Passo 3: Subir o Código para GitHub

1. Crie um novo repositório no GitHub

2. No terminal do Replit ou local, execute:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

## Passo 4: Deploy no Vercel

### 4.1 Conectar Repositório

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New..." > "Project"
3. Importe seu repositório do GitHub
4. Selecione o repositório que você criou

### 4.2 Configurar Projeto

1. **Project Name**: Escolha um nome para seu projeto
2. **Framework Preset**: Selecione "Other"
3. **Root Directory**: Deixe como `./` (raiz)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist/public`
6. **Install Command**: `npm install`

### 4.3 Configurar Variáveis de Ambiente

Clique em "Environment Variables" e adicione as seguintes variáveis:

| Nome | Valor | Descrição |
|------|-------|-----------|
| `DATABASE_URL` | `postgresql://...` | String de conexão do seu banco de dados |
| `NODE_ENV` | `production` | Ambiente de produção |
| `SESSION_SECRET` | `sua-chave-secreta-aqui` | Chave para sessões (gere uma string aleatória segura) |

**Dica**: Para gerar uma chave secreta segura, use:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4.4 Fazer Deploy

1. Clique em "Deploy"
2. Aguarde o processo de build (geralmente 1-3 minutos)
3. Quando concluído, você verá a mensagem "Congratulations!"
4. Clique no link gerado (formato: `seu-projeto.vercel.app`)

## Passo 5: Executar Migrações do Banco de Dados

Após o primeiro deploy, você precisa criar as tabelas no banco de dados:

### Opção A: Via Comando Local

```bash
# Configure a variável de ambiente localmente
export DATABASE_URL="sua-connection-string-aqui"

# Execute as migrações
npm run db:push
```

### Opção B: Via Vercel CLI

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Execute o comando no ambiente de produção:
```bash
vercel env pull
npm run db:push
```

## Passo 6: Verificar Deploy

1. Acesse seu site em `https://seu-projeto.vercel.app`
2. Teste as funcionalidades principais
3. Verifique o console do navegador para erros
4. Acesse `https://seu-projeto.vercel.app/api/health` (se tiver endpoint de health check)

## Resolução de Problemas Comuns

### Erro: "Module not found"

**Solução**: Certifique-se de que todas as dependências estão em `dependencies` (não em `devDependencies`) no `package.json`.

```bash
# Mover dependência de dev para produção
npm install nome-do-pacote --save-prod
```

### Erro: "Database connection failed"

**Solução**: 
- Verifique se a variável `DATABASE_URL` está configurada corretamente
- Confirme que o banco de dados está acessível publicamente
- Teste a connection string localmente

### Erro: "Function timeout"

**Solução**: As funções serverless do Vercel têm limite de 10s (plano gratuito). Para tarefas longas:
- Otimize queries do banco
- Use caching
- Considere upgrade para plano Pro (60s timeout)

### Erro de Build

**Solução**:
1. Verifique os logs de build no Vercel Dashboard
2. Execute `npm run build` localmente para reproduzir o erro
3. Corrija os erros de TypeScript ou imports

## Atualizações Futuras

Após configurar o deploy inicial, atualizações são automáticas:

1. Faça alterações no código localmente
2. Commit e push para GitHub:
```bash
git add .
git commit -m "Descrição das alterações"
git push
```
3. O Vercel detecta automaticamente e faz redeploy

## Configurações Avançadas

### Domínio Personalizado

1. No Vercel Dashboard, vá em Settings > Domains
2. Adicione seu domínio personalizado
3. Configure os DNS records conforme instruções do Vercel

### Preview Deployments

O Vercel cria automaticamente preview URLs para cada branch e pull request.

### Variáveis de Ambiente por Ambiente

No Vercel Dashboard > Settings > Environment Variables, você pode configurar variáveis diferentes para:
- Production
- Preview
- Development

## Monitoramento

### Logs

Acesse logs em tempo real:
1. Vercel Dashboard
2. Seu projeto
3. Aba "Deployments"
4. Clique em um deployment
5. Aba "Functions" ou "Runtime Logs"

### Analytics

O Vercel oferece analytics integrado:
- Acesse a aba "Analytics" no dashboard
- Visualize métricas de performance e uso

## Custos

**Plano Gratuito (Hobby)**:
- 100 GB bandwidth/mês
- Funções serverless: 100h/mês
- Certificado SSL grátis
- Preview deployments ilimitados

**Quando considerar upgrade**:
- Tráfego > 100 GB/mês
- Precisa de timeout > 10s
- Necessita de mais de 1 membro na equipe
- Precisa de analytics avançado

## Suporte

- [Documentação Oficial Vercel](https://vercel.com/docs)
- [Comunidade Vercel](https://github.com/vercel/vercel/discussions)
- [Status do Vercel](https://www.vercel-status.com/)

## Checklist Final

- [ ] Código no GitHub
- [ ] Banco de dados criado (Neon/Supabase)
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Build executado com sucesso
- [ ] Migrações do banco executadas
- [ ] Site acessível e funcionando
- [ ] APIs respondendo corretamente
- [ ] Erros verificados no console

---

**Parabéns!** 🎉 Sua aplicação está no ar!
