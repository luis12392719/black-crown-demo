BLACK CROWN — MASTER TEMPLATE
=====================================

OBJETIVO
Este é o modelo-base para criar sites de barbearias rapidamente.

REGRA PRINCIPAL
Para personalizar um novo cliente, comece pelo arquivo:

    config.js

Quase tudo que muda de cliente para cliente está centralizado nele.


PASSO A PASSO PARA UM CLIENTE NOVO
-------------------------------------

1. DUPLIQUE A PASTA INTEIRA
Exemplo:
black-crown-master-template
vira:
imperial-barbearia

2. ABRA config.js

3. ALTERE:
- nome da empresa
- iniciais
- WhatsApp
- telefone
- Instagram
- endereço
- horário
- textos
- cores
- serviços
- preços
- equipe
- galeria

4. SE NÃO TIVER EQUIPE OU GALERIA
No config.js, use:

mostrar: false

A seção desaparecerá automaticamente.

5. PARA USAR FOTO DE FUNCIONÁRIO
Coloque uma imagem dentro da pasta "imagens".

Exemplo:
imagens/joao.jpg

Depois, em config.js:

imagem: "imagens/joao.jpg"

6. PARA USAR FOTO NA GALERIA
Exemplo:

{ titulo: "DEGRADÊ", imagem: "imagens/corte1.jpg" }

7. WHATSAPP
Use somente números, incluindo:
55 + DDD + telefone

Exemplo:
5531999999999


ESTRUTURA
-------------------------------------
index.html   = estrutura do site
style.css    = aparência
config.js    = DADOS DO CLIENTE
script.js    = automação do site
imagens/     = fotos do cliente


DICA COMERCIAL
-------------------------------------
NUNCA altere sua cópia original do Master Template.

Para cada cliente:
1. copie a pasta;
2. renomeie;
3. altere config.js;
4. coloque as fotos;
5. teste no celular e computador;
6. publique.
