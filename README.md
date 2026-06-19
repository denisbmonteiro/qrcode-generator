# QR Code Snow

Uma página simples e responsiva para gerar QR Codes rapidamente a partir de texto ou URLs.

**Status:** Pronto — versão mínima funcional

**Sumário**
- **Descrição:** Gerador de QR Code front-end, sem backend necessário.
- **Demo:** Abra [index.html](index.html) no seu navegador.
- **Tecnologias:** HTML, CSS, JavaScript, biblioteca `qrcode.min.js`.

**Recursos**
- Gera QR Code a partir de texto ou URLs.
- Layout responsivo para dispositivos móveis e desktop.
- Dependência única: `js/qrcode.min.js` (arquivo local incluído).

**Como executar**
1. Clone ou baixe este repositório.
2. Abra o arquivo [index.html](index.html) no navegador.

**Uso**
1. Digite texto ou um URL na caixa à esquerda.
2. Clique em "Create QR Code" ou pressione Enter.
3. O QR Code é exibido automaticamente no painel direito.

O comportamento padrão, quando o campo está vazio, é gerar um QR Code apontando para `https://denisbm.com`. Para alterar esse valor padrão, edite [js/script.js](js/script.js).

**Estrutura do projeto**
- [index.html](index.html) — página principal.
- [css/style.css](css/style.css) — estilos e responsividade.
- [js/script.js](js/script.js) — lógica de geração do QR Code.
- [js/qrcode.min.js](js/qrcode.min.js) — biblioteca do gerador (versão empacotada).

**Contribuindo**
- Sugestões, correções e melhorias são bem-vindas. Abra uma issue descrevendo a proposta antes de enviar um pull request.

**Autor**
- Denis Bittencourt — https://denisbm.com