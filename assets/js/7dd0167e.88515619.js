"use strict";(self.webpackChunkhubcmat=self.webpackChunkhubcmat||[]).push([[7827],{1638:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>t,toc:()=>u});var s=a(4848),r=a(8453);const n={id:"jupyterhub",title:"Introdu\xe7\xe3o ao JupyterHub",sidebar_position:1},i="Introdu\xe7\xe3o ao JupyterHub",t={id:"tutorial-basics/jupyterhub",title:"Introdu\xe7\xe3o ao JupyterHub",description:"Bem-vindo \xe0 sess\xe3o de tutoriais do HubCMat.",source:"@site/docs/tutorial-basics/jupyterhub.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/jupyterhub",permalink:"/docs/tutorial-basics/jupyterhub",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"jupyterhub",title:"Introdu\xe7\xe3o ao JupyterHub",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Softwares Instalados",permalink:"/docs/tutorial-basics/softwares"}},d={},u=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Parte 1 - Acessando o JupyterHub",id:"parte-1---acessando-o-jupyterhub",level:2},{value:"O que \xe9 o JupyterHub?",id:"o-que-\xe9-o-jupyterhub",level:3},{value:"Como fazer login no SCI JupyterHub:",id:"como-fazer-login-no-sci-jupyterhub",level:4},{value:"Parte 2 - Introdu\xe7\xe3o ao Uso do JupyterLab",id:"parte-2---introdu\xe7\xe3o-ao-uso-do-jupyterlab",level:2},{value:"Criando um Notebook",id:"criando-um-notebook",level:3},{value:"Compreendendo o Sistema de Arquivos",id:"compreendendo-o-sistema-de-arquivos",level:3},{value:"O Terminal e o Editor de Texto",id:"o-terminal-e-o-editor-de-texto",level:3},{value:"Parte 3 - Baixando os Materiais e Arquivos do GitHub",id:"parte-3---baixando-os-materiais-e-arquivos-do-github",level:2},{value:"Parte 4 - Introdu\xe7\xe3o aos Notebooks Jupyter",id:"parte-4---introdu\xe7\xe3o-aos-notebooks-jupyter",level:2},{value:"C\xe9lulas",id:"c\xe9lulas",level:3}];function c(e){const o={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"introdu\xe7\xe3o-ao-jupyterhub",children:"Introdu\xe7\xe3o ao JupyterHub"})}),"\n",(0,s.jsx)(o.p,{children:"Bem-vindo \xe0 sess\xe3o de tutoriais do HubCMat."}),"\n",(0,s.jsx)(o.p,{children:"Mais especificamente, aqui est\xe3o as principais tecnologias que\nvoc\xea usar\xe1 no HubCMat:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Python"})," - Uma linguagem de programa\xe7\xe3o de prop\xf3sito geral que \xe9 f\xe1cil de aprender e muito poderosa."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"JupyterLab"})," - JupyterLab \xe9 um ambiente de desenvolvimento interativo baseado na web para notebooks Jupyter, c\xf3digo e dados."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Notebooks Jupyter"})," - O Notebook Jupyter \xe9 um padr\xe3o open-source que permite criar e compartilhar documentos que cont\xeam c\xf3digo ativo, equa\xe7\xf5es, visualiza\xe7\xf5es e texto narrativo."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"JupyterHub"})," - Uma vers\xe3o multiusu\xe1rio do Jupyter rodando em um servidor remoto."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"SageMath"})," -\nAqui vamos usar ",(0,s.jsx)(o.code,{children:"sage"})," para ilustrar o uso do ",(0,s.jsx)(o.em,{children:"JupyterLab"})," para criar, editar e executar ",(0,s.jsx)(o.em,{children:"Python"})," em ",(0,s.jsx)(o.em,{children:"Notebooks Jupyter"})," durante as sess\xf5es de laborat\xf3rio. Executaremos o JupyterLab na inst\xe2ncia do ",(0,s.jsx)(o.a,{href:"http://sci.pitt.edu",children:"School of Computing and Information"}),' do JupyterHub. Isso significa que voc\xea n\xe3o precisar\xe1 instalar nenhum software no seu pr\xf3prio computador, tudo funcionar\xe1 "na nuvem" e voc\xea s\xf3 precisar\xe1 de um navegador da web para acess\xe1-lo.']}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,s.jsx)(o.p,{children:"O tutotial contemplar\xe1 essas 5 partes:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Acessando o JupyterHub","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Fazendo login no JupyterHub na Rede UFRPE (Recomendado)"}),"\n",(0,s.jsx)(o.li,{children:"Fazendo login no JupyterHub usando VPN (pode n\xe3o ser inst\xe1vel)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.li,{children:"Usando o JupyterLab"}),"\n",(0,s.jsx)(o.li,{children:"Baixando os materiais do laborat\xf3rio"}),"\n",(0,s.jsx)(o.li,{children:"Introdu\xe7\xe3o aos Notebooks Jupyter"}),"\n",(0,s.jsx)(o.li,{children:"Enviando os laborat\xf3rios conclu\xeddos para o Canvas"}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"parte-1---acessando-o-jupyterhub",children:"Parte 1 - Acessando o JupyterHub"}),"\n",(0,s.jsx)(o.h3,{id:"o-que-\xe9-o-jupyterhub",children:"O que \xe9 o JupyterHub?"}),"\n",(0,s.jsx)(o.p,{children:"O HubCMat \xe9, na verdade, um computador com capacidade computacional avan\xe7ada somado a um sistema\nde gest\xe3o de multiusu\xe1rios do jupyter chamada Jupyterhub. Ele tem um sistema\ninstalado que simplifica o trabalho computacional remoto;\nelimina a necessidade de instalar todos os programas individuais para abrir e editar\nos notebooks Jupyter. Isso significa que, independentemente de voc\xea estar acessando o hub de um PC,\nMac ou tablet, voc\xea poder\xe1 escrever e executar tudo o que precisa no seu notebook.\nAl\xe9m disso, \xe9 muito conveniente ter tudo dispon\xedvel na nuvem; voc\xea poder\xe1 acess\xe1-lo de\nqualquer m\xe1quina, desde que tenha um navegador e uma conex\xe3o \xe0 internet."}),"\n",(0,s.jsx)(o.p,{children:"Outro ponto positivo do uso do JupyterHub \xe9 que ele opera em seu pr\xf3prio sistema de arquivos.\nIsso significa que todos t\xeam um sistema padr\xe3o para navegar, simplificando o processo de depura\xe7\xe3o\ne corre\xe7\xe3o de erros."}),"\n",(0,s.jsxs)(o.p,{children:["A desvantagem \xe9 que voc\xea precisar\xe1 estar conectado \xe0 VPN da UFRPE para acessar os seus arquivos e executar programas",(0,s.jsx)(o.br,{}),"\n","fora do campus. Felizmente, como muitos de voc\xeas s\xe3o docentes, basta solicitar o acesso \xe0 VPN ao ",(0,s.jsx)(o.a,{href:"https://digital.ufrpe.br/paginas/secretaria-de-tecnologias-digitais/",children:"STD UFRPE"}),"!"]}),"\n",(0,s.jsx)(o.h4,{id:"como-fazer-login-no-sci-jupyterhub",children:"Como fazer login no SCI JupyterHub:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Se voc\xea n\xe3o estiver no Wi-Fi (ou rede cabeada) da UFRPE, conecte-se \xe0 VPN. Se precisar de ajuda, as instru\xe7\xf5es est\xe3o ",(0,s.jsx)(o.a,{href:"https://drive.google.com/file/d/1Ir0VnsWClSSZAtqwfF1WBoNKhMr4KvHU/view",children:"aqui"})]}),"\n",(0,s.jsxs)(o.li,{children:["V\xe1 para ",(0,s.jsx)(o.a,{href:"http://10.9.0.154/",children:"http://10.9.0.154/"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Fa\xe7a login com suas credenciais fornecidas pelo administrador do HubCMat","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Nota: no primeiro acesso, voc\xea deve inserir uma senha (escolha pelo menos 8 caracteres). Guarde-a para uso posterior."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"4. Pronto, voc\xea est\xe1 dentro"}),"\n",(0,s.jsx)(o.p,{children:"Parab\xe9ns! Agora voc\xea est\xe1 logado no JupyterHub. Sua tela deve (esperan\xe7osamente) parecer algo assim:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Jupyterlab screenshot",src:a(3976).A+"",width:"1006",height:"757"})}),"\n",(0,s.jsx)(o.p,{children:"Bem-vindo ao Jupyter Lab!"}),"\n",(0,s.jsx)(o.h2,{id:"parte-2---introdu\xe7\xe3o-ao-uso-do-jupyterlab",children:"Parte 2 - Introdu\xe7\xe3o ao Uso do JupyterLab"}),"\n",(0,s.jsx)(o.h3,{id:"criando-um-notebook",children:"Criando um Notebook"}),"\n",(0,s.jsx)(o.p,{children:"Os seus c\xf3digos ser\xe3o, principalmente, feitos usando Notebooks Jupyter,\nque permitem que voc\xea escreva peda\xe7os de c\xf3digo e/ou markdown de maneira organizada."}),"\n",(0,s.jsx)(o.h3,{id:"compreendendo-o-sistema-de-arquivos",children:"Compreendendo o Sistema de Arquivos"}),"\n",(0,s.jsx)(o.p,{children:"Assim como seu computador tem um sistema de arquivos com uma ordem hier\xe1rquica, seus arquivos no JupyterLab s\xe3o organizados de forma semelhante. Voc\xea pode criar pastas para colocar materiais de laborat\xf3rio e palestras e, depois, colocar pastas dentro de pastas se desejar! Voc\xea pode navegar por essas pastas da mesma forma que faria em sua m\xe1quina local com o explorador do Windows ou Finder."}),"\n",(0,s.jsx)(o.p,{children:"Se estiver usando o Jupyterhub do HubCMat, esses arquivos n\xe3o est\xe3o na sua m\xe1quina local, eles ficam no JupyterHub. Voc\xea pode fazer upload e download de arquivos deste sistema\nde arquivos remoto usando a interface web do JupyterLab."}),"\n",(0,s.jsx)(o.h3,{id:"o-terminal-e-o-editor-de-texto",children:"O Terminal e o Editor de Texto"}),"\n",(0,s.jsx)(o.p,{children:"O terminal (ou prompt de comando) pode ser \xfatil para v\xe1rias coisas durante seu trabalho, mas, o principal \xe9 a execu\xe7\xe3o de arquivos .py, .sage ou .r.\nOutro bom uso \xe9 navegar pelos arquivos e fazer downloads de arquivos do GitHub.\nO editor de arquivos de texto \xe9 \xfatil para manter informa\xe7\xf5es, como listas e certos dados."}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h2,{id:"parte-3---baixando-os-materiais-e-arquivos-do-github",children:"Parte 3 - Baixando os Materiais e Arquivos do GitHub"}),"\n",(0,s.jsx)(o.p,{children:"Assumindo que voc\xea esteja logado no JupyterHub, fa\xe7a o seguinte:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Clique em Arquivo \u2192 Novo \u2192 Terminal.\n",(0,s.jsx)(o.img,{alt:"novo terminal",src:a(4379).A+"",width:"1038",height:"322"}),"\nDeve abrir uma janela parecida com esta\n",(0,s.jsx)(o.img,{alt:"janela de terminal",src:a(3014).A+"",width:"2022",height:"418"}),"\nVoc\xea deve ver um ret\xe2ngulo piscando - este \xe9 o cursor."]}),"\n",(0,s.jsx)(o.li,{children:"Copie e cole o seguinte comando:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"git clone https://github.com/ldsufrpe/intro-sage.git\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Sua janela do terminal deve parecer com esta\n",(0,s.jsx)(o.img,{alt:"comando clone",src:a(6561).A+"",width:"2030",height:"330"}),"\n3. Pressione enter e aguarde o comando terminar de executar. Depois que isso acontecer, olhe \xe0 sua esquerda. Voc\xea deve ver uma nova pasta chamada ",(0,s.jsx)(o.code,{children:"Intro-to-Jupyter"}),". Seu explorador de arquivos \xe0 direita deve parecer assim\n",(0,s.jsx)(o.img,{alt:"clone bem-sucedido",src:a(8244).A+"",width:"646",height:"640"})]}),"\n",(0,s.jsx)(o.p,{children:"Clique duas vezes na nova pasta. Agora voc\xea deve ser capaz de ver os seguintes materiais do laborat\xf3rio"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"README.md"})," - o arquivo README que voc\xea estava lendo para obter as instru\xe7\xf5es sobre como acessar o laborat\xf3rio"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"Lab-Lesson.ipynb"})," - o arquivo Jupyter Notebook com todos os exerc\xedcios que voc\xea precisa completar para este laborat\xf3rio."]}),"\n",(0,s.jsx)(o.li,{children:"Alguns outros arquivos que voc\xea pode ignorar"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Seu explorador de arquivos \xe0 esquerda deve parecer assim"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"materiais do laborat\xf3rio",src:a(6961).A+"",width:"634",height:"778"})}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h2,{id:"parte-4---introdu\xe7\xe3o-aos-notebooks-jupyter",children:"Parte 4 - Introdu\xe7\xe3o aos Notebooks Jupyter"}),"\n",(0,s.jsxs)(o.p,{children:["Um ",(0,s.jsx)(o.strong,{children:"notebook Jupyter"})," \xe9 uma combina\xe7\xe3o de c\xf3digo execut\xe1vel, texto formatado e dados brutos."]}),"\n",(0,s.jsxs)(o.p,{children:["Um notebook Jupyter \xe9, em sua ess\xeancia, um monte de ",(0,s.jsx)(o.em,{children:"c\xe9lulas"})," em cima de um ",(0,s.jsx)(o.em,{children:"kernel"})," interativo. Esta explica\xe7\xe3o necessariamente simplifica algumas coisas, mas voc\xea pode pensar em cada notebook como tendo seu pr\xf3prio kernel que todas as suas c\xe9lulas podem acessar e modificar. Por exemplo, se voc\xea definir ",(0,s.jsx)(o.code,{children:"a = 123"})," em ",(0,s.jsx)(o.code,{children:"Notebook1.ipynb"}),", qualquer c\xe9lula de c\xf3digo dentro de ",(0,s.jsx)(o.code,{children:"Notebook1.ipynb"})," pode ver o valor de ",(0,s.jsx)(o.code,{children:"a"}),", mas ",(0,s.jsx)(o.code,{children:"Notebook2.ipynb"})," n\xe3o tem conhecimento da exist\xeancia da vari\xe1vel ",(0,s.jsx)(o.code,{children:"a"}),'. (Para um contraexemplo, tente clicar em "Python 3" no canto superior direito de um notebook quando voc\xea estiver no JupyterHub. Divirta-se.)']}),"\n",(0,s.jsx)(o.p,{children:"O kernel espec\xedfico que estamos usando \xe9 uma vers\xe3o interativa do Python 3 chamada IPython. Essa conven\xe7\xe3o de nomenclatura se mant\xe9m; o kernel julia padr\xe3o para o Jupyter \xe9 chamado IJulia, por exemplo. Muitas linguagens de programa\xe7\xe3o (incluindo Java) t\xeam kernels interativos para criar notebooks, mas usaremos Python 3 para este tutorial."}),"\n",(0,s.jsx)(o.h3,{id:"c\xe9lulas",children:"C\xe9lulas"}),"\n",(0,s.jsx)(o.p,{children:"Dentro do notebook Jupyter, h\xe1 tr\xeas tipos de c\xe9lulas: c\xf3digo, Markdown e bruta. Essas c\xe9lulas podem existir em qualquer ordem dentro do notebook e podem ser misturadas e combinadas da maneira que voc\xea, o autor, desejar."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"C\xe9lulas de c\xf3digo"})," s\xe3o o n\xfacleo da computa\xe7\xe3o do notebook Jupyter. Elas cont\xeam c\xf3digo que \xe9 executado pelo kernel. Quando voc\xea executa uma c\xe9lula, quaisquer vari\xe1veis que voc\xea atribuir ser\xe3o atribu\xeddas para qualquer c\xe9lula de c\xf3digo no documento, e qualquer sa\xedda que seu c\xf3digo produzir ser\xe1 exibida diretamente abaixo da c\xe9lula."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"uma c\xe9lula de c\xf3digo de exemplo",src:a(5016).A+"",width:"900",height:"166"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"C\xe9lulas Markdown"})," s\xe3o a forma padr\xe3o de exibir texto rico, tabelas, imagens, GIFs, v\xeddeos e marca\xe7\xe3o matem\xe1tica. Markdown \xe9 um subconjunto de HTML otimizado para escrever texto rapidamente e, consequentemente, \xe9 bastante leve. Por exemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-markdown",children:"# Este \xc9 Um Cabe\xe7alho\n\nAqui est\xe1 um texto em **negrito**, e aqui est\xe1 em *it\xe1lico*. Posso fazer uma lista assim:\n\n* pontos\n* de\n* bala\n* usam\n* asteriscos\n\n1. e\n2. listas\n3. numeradas\n4. usam\n5. n\xfameros :)\n\nEu tamb\xe9m posso [linkar coisas](https://www.pitt.edu) com par\xeanteses e colchetes.\n\nAdicionar uma imagem \xe9 como um link:\n![descri\xe7\xe3o da imagem vai aqui](https://media.giphy.com/media/3d3woRW2rHwyDvFKNg/giphy.gif)\n"})}),"\n",(0,s.jsxs)(o.p,{children:["\xc9 f\xe1cil exibir ",(0,s.jsx)(o.code,{children:"c\xf3digo"})," com crases(`). Trechos de c\xf3digo mais longos ganham sua pr\xf3pria linha:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'print("Aqui est\xe1 um trecho de c\xf3digo mais longo.")\na = 2\nb = 3\nc = a + b\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Voc\xea pode ver um guia completo de Markdown ",(0,s.jsx)(o.a,{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",children:"aqui"}),", por enquanto, saiba apenas que voc\xea pode escrever textos bonitos em um notebook Jupyter usando c\xe9lulas Markdown."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"C\xe9lulas brutas"})," s\xe3o o tipo de c\xe9lula mais simples no Jupyter. Elas cont\xeam apenas dados brutos, n\xe3o formatados, que n\xe3o s\xe3o avaliados nem alterados de nenhuma maneira. Se voc\xea quiser incluir pontos de dados brutos ou texto que seja importante exibir como est\xe1, as c\xe9lulas brutas s\xe3o a melhor op\xe7\xe3o. N\xf3s raramente as usaremos neste curso."]})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6561:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/git-clone-command-919c0a9ae6c1b982e8029538ee943d09.png"},3976:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/hub-login-3-19dc6443efa5ef5e0d724552cf773a1e.png"},8244:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/lab-cloned-success-1d45404ef497e09426c3c1bb2101543a.png"},6961:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/lab-materials-bb71c5db1bbb1ac2bcb91450787091a3.png"},3014:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/new-terminal-window-cea9c80ac493d485f9b68076fb66a251.png"},4379:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/open-new-terminal-94e090fa353309d923adbc1927c419ba.png"},5016:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/scr1-f2894f85f8473307e06f63e290541932.png"},8453:(e,o,a)=>{a.d(o,{R:()=>i,x:()=>t});var s=a(6540);const r={},n=s.createContext(r);function i(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);