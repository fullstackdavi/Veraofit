# 🚀 Deploy Rápido no Vercel

## ✅ Pré-requisitos Completos

Seu projeto já está pronto para deploy! Os seguintes arquivos foram configurados:

- ✅ `vercel.json` - Configuração do Vercel
- ✅ `api/index.js` - Handler para serverless functions
- ✅ `server/index.ts` - Exporta o app Express
- ✅ `.vercelignore` - Arquivos a ignorar no deploy

## 📋 Próximos Passos

### 1. Configurar Banco de Dados (Recomendado: Neon)

Crie um banco PostgreSQL gratuito:
- Acesse: https://neon.tech
- Crie um projeto
- Copie a connection string: `postgresql://user:password@host/database`

### 2. Subir para GitHub

```bash
git init
git add .
git commit -m "Preparado para deploy no Vercel"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### 3. Deploy no Vercel

1. Acesse: https://vercel.com
2. Clique em **"Add New..."** > **"Project"**
3. Importe seu repositório do GitHub
4. Configure as variáveis de ambiente:

| Variável | Valor |
|----------|-------|
| `DATABASE_URL` | Sua connection string do PostgreSQL |
| `NODE_ENV` | `production` |
| `SESSION_SECRET` | Gere com: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |

5. Clique em **"Deploy"**

### 4. Executar Migrações

Após o primeiro deploy, execute localmente:

```bash
# Configure a DATABASE_URL localmente
export DATABASE_URL="sua-connection-string-aqui"

# Execute as migrações
npm run db:push
```

## 🎉 Pronto!

Seu app estará disponível em: `https://seu-projeto.vercel.app`

## 📚 Documentação Completa

Para mais detalhes, consulte: [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md)

## ⚡ Comandos Úteis

```bash
# Testar build localmente
npm run build

# Testar produção localmente
npm run start

# Verificar tipos TypeScript
npm run check
```

## 🔧 Resolução de Problemas

### Build falhou?
Execute localmente: `npm run build` para ver os erros

### Banco não conecta?
Verifique se `DATABASE_URL` está configurada no Vercel

### Timeout de função?
Otimize queries ou considere plano Pro do Vercel (60s timeout)

---

**Dúvidas?** Consulte a [Documentação do Vercel](https://vercel.com/docs)
