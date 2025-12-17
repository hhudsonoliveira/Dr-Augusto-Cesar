# 🚀 Guia Rápido de Início

> Configuração rápida do site em 5 minutos!

---

## ⚡ Início Rápido (3 passos)

### 1️⃣ Abra o Site Localmente

**Opção mais fácil:**
1. Dê duplo clique no arquivo `index.html`
2. O site abrirá no seu navegador padrão
3. Pronto! ✅

**Ou use um servidor local (recomendado para edição):**
- Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code
- Clique com botão direito em `index.html` → "Open with Live Server"

---

## 📝 Primeiras Customizações (Obrigatórias)

### 🔗 Atualizar Links do WhatsApp

**Arquivo:** `index.html`

**Busque por:** `https://wa.me/5571999999999`

**Substitua por:** Seu número real no formato internacional

**Exemplo:**
```
https://wa.me/5571987654321
```

**Onde atualizar:**
- Header (botão "Agendar Consulta")
- Hero section (botão principal)
- Seção Especialidades (CTA)
- Seção Depoimentos (CTA)
- CTA Final (botão WhatsApp)
- Footer (ícone WhatsApp)

**💡 Dica:** Use "Ctrl + H" (ou Cmd + H no Mac) no editor para substituir tudo de uma vez!

---

### 📧 Atualizar E-mail

**Busque por:** `contato@augustocesar.adv.br`

**Substitua por:** Seu e-mail real

**Locais:**
- Footer (seção de contato)

---

### 📸 Instagram

**Busque por:** `@augusto.cesar.adv`

**Substitua por:** Seu Instagram (com ou sem @)

**Locais:**
- Footer
- Seção Sobre (links sociais)

---

### 🖼️ Trocar Imagens

**Imagens para substituir:**

1. **Logo** (`assets/images/logo.svg`)
   - Seu logo profissional
   - Formato recomendado: SVG ou PNG transparente
   - Dimensões: 240x60px

2. **Favicon** (`assets/images/favicon.svg`)
   - Ícone do site (aparece na aba do navegador)
   - Formato: SVG ou PNG
   - Dimensões: 64x64px

3. **Foto de Perfil** (`assets/images/perfil.webp`)
   - Sua foto profissional
   - Formato: WebP ou JPG
   - Dimensões: 500x600px
   - **Onde está no site:** Seção "Sobre"

**💡 Como converter para WebP (opcional, mas recomendado):**
- Use o site [Squoosh.app](https://squoosh.app)
- Arraste sua foto
- Escolha "WebP" no formato de saída
- Baixe e substitua o arquivo

---

## 📄 Editar Textos

### Seção SOBRE

**Arquivo:** `index.html`

**Busque por:** `<section class="sobre section" id="sobre">`

**O que editar:**
- Sua biografia (3 parágrafos)
- Anos de experiência (mude o `data-target="12"`)
- Casos resolvidos (mude o `data-target="865"`)
- Taxa de sucesso (mude o `data-target="94"`)

**Exemplo:**
```html
<div class="stat__number" data-target="15">0</div>
<div class="stat__label">Anos de Experiência</div>
```

---

### Depoimentos

**Busque por:** `<section class="depoimentos section">`

**O que editar:**
- Nomes dos clientes
- Textos dos depoimentos
- Valores recuperados
- Fotos dos clientes (opcional)

**⚠️ Importante:** Use iniciais ou primeiro nome + inicial do sobrenome para privacidade (ex: "Maria Clara S.")

---

### FAQ (Perguntas Frequentes)

**Busque por:** `<section class="faq section">`

**O que editar:**
- Perguntas
- Respostas
- Adicione ou remova itens conforme necessário

**Como adicionar uma nova pergunta:**
1. Copie todo o bloco `<div class="faq__item">...</div>`
2. Cole abaixo da última pergunta
3. Edite o texto da pergunta e resposta

---

## 🎨 Personalizar Cores (Opcional)

**Arquivo:** `css/style.css`

**Busque por:** `:root {`

**Cores principais:**
```css
:root {
    /* Fundo escuro principal */
    --color-bg: #0A0E27;

    /* Gradiente neon (mude as cores aqui!) */
    --gradient-primary: linear-gradient(135deg, #00D4FF 0%, #7C3AED 50%, #F59E0B 100%);

    /* Cores de destaque */
    --color-cyan: #00F5FF;    /* Azul neon */
    --color-purple: #A855F7;  /* Roxo */
    --color-gold: #FBBF24;    /* Dourado */
}
```

**💡 Dica:** Use [Coolors.co](https://coolors.co) para gerar paletas de cores harmoniosas!

---

## 🌐 Colocar o Site no Ar (Deploy)

### Opção 1: Netlify (Mais Fácil) ⭐

1. Vá em [Netlify Drop](https://app.netlify.com/drop)
2. Arraste a pasta `Dr Augusto` para a área de upload
3. Aguarde o upload (30 segundos)
4. **Pronto!** Seu site está no ar com URL gratuita
5. (Opcional) Configure seu domínio personalizado nas configurações

**Vantagens:**
- ✅ 100% gratuito
- ✅ HTTPS automático
- ✅ Sem configuração
- ✅ Deploy em segundos

---

### Opção 2: Vercel

1. Crie conta em [Vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe seu projeto (GitHub ou faça upload)
4. Deploy automático

---

### Opção 3: GitHub Pages (Gratuito)

1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório
3. Faça upload dos arquivos
4. Vá em Settings → Pages
5. Escolha a branch `main`
6. Clique em Save
7. Aguarde 2-3 minutos
8. Acesse `https://seu-usuario.github.io/nome-do-repositorio`

---

## ✅ Checklist Final Antes do Deploy

Antes de publicar, verifique:

- [ ] Todos os links do WhatsApp atualizados
- [ ] E-mail correto no footer
- [ ] Instagram correto
- [ ] Foto de perfil substituída
- [ ] Logo personalizado
- [ ] Textos da seção "Sobre" editados
- [ ] Stats (números) atualizados
- [ ] Depoimentos reais (ou remova a seção se não tiver)
- [ ] FAQ com perguntas relevantes
- [ ] Testado no celular (responsive)
- [ ] Testado em pelo menos 2 navegadores (Chrome, Firefox)

---

## 🆘 Problemas Comuns

### "Particles não aparecem"

**Solução:** Verifique sua conexão de internet. O particles.js vem de um CDN externo.

---

### "Menu mobile não abre"

**Solução:**
1. Verifique se o arquivo `js/main.js` está sendo carregado
2. Abra o Console do navegador (F12) e veja se há erros

---

### "Animações não funcionam"

**Solução:**
1. Role a página devagar
2. As animações aparecem quando você rola até a seção
3. Se ainda não funcionar, verifique o Console (F12)

---

### "Fontes estranhas"

**Solução:**
- As fontes vêm do Google Fonts
- Verifique sua conexão de internet
- Aguarde o carregamento completo da página

---

## 📞 Precisa de Ajuda?

**Entre em contato com o desenvolvedor:**

**HO DEVWEB**
- 🌐 Site: [hodevweb.com](https://hodevweb.com)
- 📧 E-mail: contato@hodevweb.com
- 💬 WhatsApp: [Clique aqui]

---

## 🎓 Recursos Úteis

### Aprender mais sobre o site:
- 📖 [README.md](README.md) - Documentação completa

### Ferramentas online úteis:
- 🎨 [Coolors](https://coolors.co) - Gerador de paletas de cores
- 🖼️ [TinyPNG](https://tinypng.com) - Comprimir imagens
- 📝 [Remove.bg](https://remove.bg) - Remover fundo de fotos
- 🔄 [Squoosh](https://squoosh.app) - Converter imagens para WebP
- ✅ [W3C Validator](https://validator.w3.org) - Validar HTML

---

## 🎉 Pronto!

Seu site está configurado e pronto para impressionar clientes!

**Próximos passos sugeridos:**
1. ✅ Publique o site
2. 📱 Compartilhe nas redes sociais
3. 🔗 Adicione o link na bio do Instagram
4. 📧 Inclua o link na assinatura do e-mail
5. 💼 Use em cartões de visita digitais

---

<div align="center">

**Feito com ❤️ por [HO DEVWEB](https://hodevweb.com)**

Qualquer dúvida, estamos à disposição! 🚀

</div>
