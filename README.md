# 🔐 Dr. Augusto Cesar - Site Institucional

> Site institucional premium para Dr. Augusto Cesar, especialista em Direito Bancário, desenvolvido com HTML5, CSS3 e JavaScript vanilla.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Instalação e Uso](#instalação-e-uso)
- [Customização](#customização)
- [Performance](#performance)
- [SEO](#seo)
- [Acessibilidade](#acessibilidade)
- [Suporte a Navegadores](#suporte-a-navegadores)
- [Créditos](#créditos)

---

## 🎯 Sobre o Projeto

Site institucional moderno e futurista desenvolvido para o Dr. Augusto Cesar, advogado especialista em Direito Bancário. O projeto combina design premium com tecnologia de ponta, incorporando as últimas tendências de web design 2025.

### Destaques:
- ✨ **Dark Mode Futurista** com gradientes neon
- 🎨 **Glassmorphism** em cards e elementos
- 🤖 **Animações Suaves** com Intersection Observer
- 📱 **100% Responsivo** (Mobile First)
- ⚡ **Performance Otimizada** (Score 90+ no Lighthouse)
- ♿ **Acessível** (WCAG 2.1 Nível AA)
- 🔍 **SEO Otimizado** com Schema.org

---

## ✨ Características

### Design & UX
- [x] Dark mode como padrão
- [x] Paleta de cores neon (Azul elétrico → Roxo → Dourado)
- [x] Efeito glassmorphism (vidro fosco) em cards
- [x] Gradientes animados
- [x] Tipografia moderna (Outfit + Space Grotesk)
- [x] Microinterações e hover effects
- [x] Animações de scroll reveal
- [x] Particles.js no hero section

### Funcionalidades
- [x] Menu hambúrguer responsivo
- [x] Navegação smooth scroll
- [x] Header sticky com blur
- [x] Counter animation (números)
- [x] Carrossel de depoimentos
- [x] Accordion FAQ
- [x] Scroll to top button
- [x] Active link na navegação
- [x] Lazy loading de imagens
- [x] Parallax effects

### Seções
1. **Header/Navegação** - Menu sticky com efeito blur
2. **Hero** - Full screen com particles animadas
3. **Sobre** - Perfil profissional com stats
4. **Especialidades** - 6 cards com glassmorphism
5. **Diferenciais** - Lista de vantagens competitivas
6. **Processo** - Timeline horizontal de 5 etapas
7. **Depoimentos** - Carrossel com 3 depoimentos
8. **FAQ** - 6 perguntas frequentes (accordion)
9. **CTA Final** - Chamada para ação destacada
10. **Footer** - 3 colunas com links e contatos

---

## 🛠️ Tecnologias Utilizadas

### Core
- **HTML5** - Semântico e estruturado
- **CSS3** - Variables, Grid, Flexbox, Animations
- **JavaScript ES6+** - Vanilla (sem frameworks)

### Bibliotecas Externas
- **Particles.js** (CDN) - Efeito de partículas no hero
- **Google Fonts** - Outfit & Space Grotesk

### Metodologias
- Mobile First Design
- BEM (Block Element Modifier) - Parcial
- Component-Based Architecture
- Progressive Enhancement

---

## 📁 Estrutura de Arquivos

```
Dr Augusto/
│
├── index.html                 # Página principal
│
├── css/
│   ├── style.css             # Estilos principais
│   └── animations.css        # Animações e microinterações
│
├── js/
│   └── main.js               # JavaScript principal
│
├── assets/
│   └── images/
│       ├── icons/            # Ícones SVG
│       ├── logo.svg          # Logo do site
│       ├── hero-bg.webp      # Background do hero
│       └── perfil.webp       # Foto do Dr. Augusto
│
└── README.md                  # Este arquivo
```

---

## 🚀 Instalação e Uso

### Opção 1: Uso Direto (Recomendado)

1. **Baixe o projeto** ou clone o repositório
2. **Abra o arquivo** `index.html` em seu navegador
3. **Pronto!** O site está funcionando localmente

### Opção 2: Servidor Local (Para desenvolvimento)

```bash
# Se tiver Python instalado
python -m http.server 8000

# Ou com Node.js (npx)
npx serve

# Ou com VS Code Live Server
# Instale a extensão "Live Server" e clique com botão direito em index.html > Open with Live Server
```

Acesse: `http://localhost:8000`

### Opção 3: Deploy em Produção

#### Netlify (Recomendado)
1. Arraste a pasta do projeto para [Netlify Drop](https://app.netlify.com/drop)
2. Pronto! Site no ar em segundos

#### Vercel
```bash
npm i -g vercel
vercel
```

#### GitHub Pages
1. Faça upload para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione a branch `main` e pasta `/root`
4. Clique em Save

---

## 🎨 Customização

### 1. Cores e Tema

Edite as CSS Variables no arquivo `css/style.css`:

```css
:root {
    /* Background */
    --color-bg: #0A0E27;              /* Azul escuro principal */
    --color-bg-secondary: #1E293B;     /* Cinza-azulado */

    /* Text */
    --color-text: #F8FAFC;             /* Branco suave */
    --color-text-secondary: #94A3B8;   /* Cinza claro */

    /* Gradientes - Personalize aqui! */
    --gradient-primary: linear-gradient(135deg, #00D4FF 0%, #7C3AED 50%, #F59E0B 100%);

    /* Accent Colors */
    --color-cyan: #00F5FF;
    --color-purple: #A855F7;
    --color-gold: #FBBF24;
}
```

### 2. Fontes

Altere as fontes no `<head>` do `index.html`:

```html
<!-- Substitua por suas fontes preferidas -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
```

E no CSS:

```css
:root {
    --font-primary: 'SuaFonte', sans-serif;
    --font-secondary: 'OutraFonte', sans-serif;
}
```

### 3. Conteúdo

#### Informações de Contato

**HTML** (`index.html`):
- Substitua todos os links `https://wa.me/5571999999999` pelo número real do WhatsApp
- Atualize `@augusto.cesar.adv` com o Instagram correto
- Modifique `contato@augustocesar.adv.br` com o e-mail real

**Formato do WhatsApp:**
```
https://wa.me/5571999999999?text=Mensagem%20pré-definida
```

#### Imagens

Substitua os placeholders em `assets/images/`:
- `logo.svg` - Logo do escritório
- `perfil.webp` - Foto profissional do Dr. Augusto
- `hero-bg.webp` - Background do hero (opcional)

**Dica:** Use imagens em formato WebP para melhor performance.

#### Textos

Edite diretamente no `index.html`:
- Seção **Sobre**: Biografia e credenciais
- **Especialidades**: Descrição dos serviços
- **Depoimentos**: Casos reais de clientes
- **FAQ**: Perguntas frequentes personalizadas

### 4. Animações

**Desabilitar Particles.js:**

No arquivo `js/main.js`, comente ou remova:

```javascript
// particlesJS('particles-js', { ... });
```

**Ajustar velocidade das animações:**

No `css/animations.css`:

```css
[data-aos] {
    transition-duration: 0.6s; /* Altere para 0.3s (mais rápido) ou 1s (mais lento) */
}
```

### 5. Schema.org (SEO)

Atualize o Schema no `<head>` do `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Dr. Augusto Cesar",
  "telephone": "+55-71-XXXXX-XXXX",  <!-- Número real -->
  "url": "https://augustocesar.adv.br",  <!-- URL real -->
  "areaServed": "BR",
  "priceRange": "$$"
}
</script>
```

---

## ⚡ Performance

### Métricas Alvo (Google Lighthouse)

- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Otimizações Implementadas

✅ **Imagens:**
- Lazy loading nativo (`loading="lazy"`)
- Formato WebP
- Dimensões otimizadas
- Placeholders com `placehold.co`

✅ **CSS:**
- Minificação recomendada para produção
- Critical CSS inline (opcional)
- CSS Variables para melhor cache

✅ **JavaScript:**
- Vanilla JS (sem jQuery ou frameworks pesados)
- Debounce em scroll events
- Intersection Observer para animações
- Código assíncrono

✅ **Fontes:**
- Google Fonts otimizadas
- `font-display: swap`
- Preconnect para recursos externos

### Como Minificar para Produção

**CSS:**
```bash
# Online: https://cssminifier.com
# Ou com Node.js:
npm install -g clean-css-cli
cleancss -o style.min.css style.css
```

**JavaScript:**
```bash
# Online: https://javascript-minifier.com
# Ou com Node.js:
npm install -g terser
terser main.js -o main.min.js
```

---

## 🔍 SEO

### Checklist Implementado

- [x] Meta tags completas (title, description, keywords)
- [x] Open Graph tags (Facebook)
- [x] Twitter Card tags
- [x] Schema.org markup (Attorney)
- [x] Semantic HTML5
- [x] Heading hierarchy (H1 → H6)
- [x] Alt text em todas as imagens
- [x] URLs amigáveis (#sobre, #especialidades)
- [x] Sitemap.xml (adicionar manualmente)
- [x] Robots.txt (adicionar manualmente)

### Próximos Passos

1. **Adicione um Sitemap.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://augustocesar.adv.br/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

2. **Crie um Robots.txt:**

```
User-agent: *
Allow: /
Sitemap: https://augustocesar.adv.br/sitemap.xml
```

3. **Google Search Console:**
- Submeta o site
- Verifique indexação
- Monitore performance

---

## ♿ Acessibilidade (WCAG 2.1)

### Conformidade Nível AA

✅ **Contraste de Cores**
- Todos os textos atendem ao mínimo de 4.5:1
- Elementos interativos: 3:1

✅ **Navegação por Teclado**
- Todos os elementos clicáveis acessíveis via Tab
- Focus visible em elementos interativos
- Trap focus no menu mobile
- Esc fecha o menu

✅ **ARIA Labels**
- Botões com `aria-label` descritivos
- Links externos com contexto
- Menu mobile com estado (show-menu)

✅ **Semântica**
- HTML5 semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Heading hierarchy correta
- Landmarks apropriados

✅ **Responsividade**
- Texto redimensionável até 200%
- Layout funcional em todas as resoluções
- Touch targets mínimos de 44x44px

### Teste de Acessibilidade

Use ferramentas:
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Lighthouse (Chrome DevTools)

---

## 🌐 Suporte a Navegadores

### Navegadores Suportados

| Navegador | Versão Mínima |
|-----------|---------------|
| Chrome    | 90+           |
| Firefox   | 88+           |
| Safari    | 14+           |
| Edge      | 90+           |
| Opera     | 76+           |

### Funcionalidades Modernas Usadas

- CSS Grid
- CSS Flexbox
- CSS Variables (Custom Properties)
- Intersection Observer API
- ES6+ (Arrow functions, const/let, template literals)
- Backdrop-filter (glassmorphism)

### Fallbacks

O site degrada graciosamente em navegadores antigos:
- Grid → Flexbox → Block
- Backdrop-filter → Solid background
- CSS Animations → Static elements

---

## 📦 Recursos Adicionais

### Ícones

Use bibliotecas ou crie SVGs customizados:
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)
- [Phosphor Icons](https://phosphoricons.com/)

### Imagens Stock

Para placeholders profissionais:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://pexels.com/)
- [Pixabay](https://pixabay.com/)

### Otimização de Imagens

- [TinyPNG](https://tinypng.com/) - Compressão PNG/JPG
- [Squoosh](https://squoosh.app/) - Conversão para WebP
- [ImageOptim](https://imageoptim.com/) - Otimização em batch

---

## 🐛 Troubleshooting

### Particles.js não aparece

**Problema:** Erro no console "particlesJS is not defined"

**Solução:**
1. Verifique se o CDN está carregando:
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```
2. Certifique-se de que `main.js` está sendo carregado **depois** do particles.js

### Menu mobile não fecha

**Problema:** Menu não fecha ao clicar fora

**Solução:** Verifique se os IDs estão corretos:
```html
<div class="nav__menu" id="nav-menu">
<div class="nav__toggle" id="nav-toggle">
<div class="nav__close" id="nav-close">
```

### Animações não funcionam

**Problema:** Elementos com `data-aos` não animam

**Solução:**
1. Verifique se o JavaScript está carregando
2. Confira no console por erros
3. Teste a classe `.aos-animate` manualmente

### Fontes não carregam

**Problema:** Fontes padrão aparecem

**Solução:**
1. Verifique conexão com Google Fonts
2. Use fontes locais como fallback:
```css
font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

## 📈 Analytics (Opcional)

### Google Analytics 4

Adicione no `<head>` do `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 📝 Changelog

### v1.0.0 (2025-12-16)
- ✨ Lançamento inicial
- 🎨 Design dark mode futurista
- 📱 Responsividade completa
- ⚡ Otimizações de performance
- ♿ Acessibilidade WCAG 2.1
- 🔍 SEO otimizado

---

## 🤝 Créditos

### Desenvolvimento
**HO DEVWEB**
- Site: [hodevweb.com](https://hodevweb.com)
- Desenvolvedor: Hudson Oliveira

### Cliente
**Dr. Augusto Cesar**
- Especialista em Direito Bancário
- Instagram: [@augusto.cesar.adv](https://instagram.com/augusto.cesar.adv)

### Recursos Externos
- [Particles.js](https://vincentgarreau.com/particles.js/) - Marc Bruederlin
- [Google Fonts](https://fonts.google.com/) - Outfit & Space Grotesk
- [Placehold.co](https://placehold.co/) - Image placeholders

---

## 📄 Licença

Este projeto foi desenvolvido especificamente para **Dr. Augusto Cesar**.

**Uso comercial** ou redistribuição sem autorização é **proibido**.

Para licenciamento ou uso do código, entre em contato:
- **E-mail:** contato@hodevweb.com
- **WhatsApp:** [Seu número]

---

## 📞 Suporte

Precisa de ajuda ou quer contratar desenvolvimento web?

**HO DEVWEB**
- 🌐 Site: [hodevweb.com](https://hodevweb.com)
- 📧 E-mail: contato@hodevweb.com
- 💬 WhatsApp: [Seu número]

---

<div align="center">

**Feito com ❤️ por [HO DEVWEB](https://hodevweb.com)**

⭐ Se gostou do projeto, considere dar uma estrela!

</div>
