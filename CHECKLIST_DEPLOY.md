# ✅ Checklist de Deploy no Vercel

## Preparação Local (Concluído ✓)

- [x] Arquivo `vercel.json` criado
- [x] Arquivo `api/index.js` criado  
- [x] Servidor Express exporta o app
- [x] Build testado com sucesso (`npm run build`)
- [x] Arquivo `.vercelignore` configurado

## Próximos Passos (Sua Vez!)

### 1. Banco de Dados
- [ ] Criar conta no [Neon](https://neon.tech) ou [Supabase](https://supabase.com)
- [ ] Criar novo projeto PostgreSQL
- [ ] Copiar connection string
- [ ] Guardar a string em local seguro

### 2. GitHub
- [ ] Criar repositório no GitHub
- [ ] Executar comandos git:
  ```bash
  git init
  git add .
  git commit -m "Preparado para deploy no Vercel"
  git branch -M main
  git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
  git push -u origin main
  ```

### 3. Vercel
- [ ] Acessar [vercel.com](https://vercel.com)
- [ ] Criar conta / fazer login
- [ ] Clicar em "Add New..." > "Project"
- [ ] Importar repositório do GitHub
- [ ] Configurar variáveis de ambiente:
  - [ ] `DATABASE_URL` = sua connection string
  - [ ] `NODE_ENV` = `production`
  - [ ] `SESSION_SECRET` = string aleatória (gerar com comando abaixo)
  
  ```bash
  # Gerar SESSION_SECRET
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

- [ ] Clicar em "Deploy"
- [ ] Aguardar build completar

### 4. Pós-Deploy
- [ ] Executar migrações do banco:
  ```bash
  export DATABASE_URL="sua-connection-string-aqui"
  npm run db:push
  ```
- [ ] Acessar `https://seu-projeto.vercel.app`
- [ ] Testar funcionalidades principais
- [ ] Verificar console do navegador por erros

## 🎯 Resumo de Comandos

```bash
# 1. Gerar SESSION_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# 2. Subir para GitHub
git init
git add .
git commit -m "Preparado para deploy no Vercel"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main

# 3. Executar migrações (após deploy)
export DATABASE_URL="postgresql://user:pass@host/db"
npm run db:push
```

## 📚 Documentação

- [README_DEPLOY.md](./README_DEPLOY.md) - Guia rápido
- [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) - Tutorial completo

## ⚡ Variáveis de Ambiente Necessárias

| Variável | Onde Obter |
|----------|------------|
| `DATABASE_URL` | Neon.tech ou Supabase.com |
| `NODE_ENV` | Definir como `production` |
| `SESSION_SECRET` | Gerar com comando acima |

---

**Status**: ✅ Projeto pronto para deploy!
