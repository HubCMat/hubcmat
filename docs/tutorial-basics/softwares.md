---
id: softwares
title: Softwares Instalados
sidebar_position: 1  # Você pode ajustar a posição na sidebar, se necessário
---

# Softwares Instalados

No **HubCMat**, oferecemos uma variedade de softwares para atender às necessidades dos pesquisadores. Os seguintes pacotes estão disponíveis para uso:

- **Python**: Uma das linguagens de programação mais populares, amplamente utilizada em ciência de dados, aprendizado de máquina e simulações matemáticas.
- **R**: Uma linguagem de programação voltada para estatísticas e análises de dados.
- **SageMath**: Um sistema de matemática computacional que integra várias ferramentas matemáticas.

### Kernel Python
#### Pacotes para Análise e Manipulação de Dados:
- **NumPy**: Biblioteca fundamental para computação numérica em Python, oferecendo suporte para arrays multidimensionais e diversas funções matemáticas de alto desempenho.
- **Pandas**: Fornece estruturas de dados como DataFrames para manipulação e análise de dados tabulares, facilitando operações de limpeza, filtragem e agregação de dados.
- **SciPy**: Extensão do NumPy que inclui funções avançadas de álgebra linear, otimização, integração, e estatística para cálculos científicos e engenharias.
- **Statsmodels**: Biblioteca para análise estatística em Python, permitindo a construção de modelos estatísticos, testes de hipóteses, regressão e análise de séries temporais.
- **SymPy**: Biblioteca para matemática simbólica, oferecendo recursos para cálculos algébricos, diferenciação, integração e resolução de equações.

#### Visualização de Dados:
- **Matplotlib**: Biblioteca para criação de gráficos estáticos e interativos em Python, sendo ideal para visualizações científicas em 2D e 3D.
- **Seaborn**: Complemento do Matplotlib que facilita a criação de gráficos estatísticos e visuais mais sofisticados e atraentes.
- **Plotly**: Ferramenta para visualização de gráficos interativos e dinâmicos, com suporte para gráficos 3D e visualizações complexas para análise de dados.

#### Machine Learning e Deep Learning:
- **TensorFlow**: Framework de aprendizado profundo desenvolvido pelo Google, usado para construção e treinamento de redes neurais complexas.
- **Keras**: Interface de alto nível para construção de redes neurais, que funciona como complemento ao TensorFlow, facilitando a prototipagem rápida de modelos de aprendizado profundo.
- **scikit-learn**: Uma biblioteca essencial para aprendizado de máquina em Python. Ela oferece uma ampla gama de ferramentas para classificação, regressão, agrupamento, redução de dimensionalidade e validação de modelos.
#### Pacotes para processamento de imagens
- **scikit-image**: Uma biblioteca que fornece algoritmos de processamento de imagens de alto desempenho. Ideal para análises científicas de imagens, ela inclui ferramentas para transformação de imagens, filtragem, segmentação, e muito mais. 

### Kernel SageMath 
#### Pacotes para Álgebra Computacional e Matemática:
- **SageMath**: Ambiente de software para matemática avançada, que integra várias bibliotecas 
de matemática e álgebra computacional em uma interface unificada, permitindo cálculos simbólicos e numéricos.
O SageMath pode também atuar como uma interface para outros softwares de código aberto, 
como **Singular** (para álgebra computacional, teoria dos números e álgebra comutativa) e
**GAP** (para teoria de grupos, álgebra e combinatória), proporcionando um ambiente robusto e
versátil para pesquisa matemática. Veja o tutorial [Interfaces](https://doc.sagemath.org/html/en/tutorial/interfaces.html) para mais detalhes.

### Kernel  R 
- **R**: Linguagem de programação e ambiente de software projetado para análise estatística, gráficos e relatórios. É amplamente utilizado em pesquisa científica e acadêmica devido à sua robustez em métodos estatísticos e à vasta gama de pacotes disponíveis.

#### Bibliotecas R para Análise de Dados e Estatística:
- **dplyr**: Pacote essencial para manipulação de dados, permitindo operações como filtragem, agrupamento e agregação de dados de forma simples e eficiente.
- **ggplot2**: Ferramenta poderosa para criação de gráficos complexos e personalizados em R, baseada na gramática de gráficos, ideal para visualização de dados científicos.
- **tidyverse**: Coleção de pacotes, incluindo `ggplot2`, `dplyr`, `tidyr`, entre outros, que facilita a importação, limpeza, manipulação e visualização de dados.
- **shiny**: Permite criar dashboards interativos e aplicativos web para visualização de dados diretamente em R, útil para compartilhar análises de forma dinâmica.
- **caret**: Framework para Machine Learning que unifica diversos métodos de pré-processamento, ajuste de modelos e avaliação de desempenho de modelos preditivos.
- **forecast**: Pacote especializado em análise de séries temporais e previsão, com suporte para diversos modelos, como ARIMA, ETS e mais.
- **lme4**: Utilizado para ajuste de modelos lineares e não-lineares mistos, é muito útil em análise de dados que apresentam estrutura hierárquica.



## Como Instalar Pacotes
Este guia mostra como instalar pacotes em seus ambientes JupyterHub, tanto no kernel Python quanto no kernel R, e também 
como fazer isso pelo terminal.

### Python

#### Opção 1: Usando um Notebook

1. **Abra um novo Notebook:**
   - Acesse o JupyterHub e crie um novo Notebook Python.

2. **Utilize o comando `pip`:**
   - Em uma célula do Notebook, use o seguinte comando para instalar um pacote:
     ```python
     !pip install nome-do-pacote
     ```
   - Por exemplo, para instalar o pacote `numpy`, escreva:
     ```python
     !pip install numpy
     ```

3. **Verifique a instalação:**
   - Após a instalação, você pode verificar se o pacote foi instalado corretamente usando:
     ```python
     import nome_do_pacote
     print(nome_do_pacote.__version__)
     ```

#### Opção 2: Usando o Terminal

1. **Acesse o terminal:**
   - No JupyterHub, clique em "New" e selecione "Terminal".

2. **Utilize o comando `pip`:**
   - No terminal, use o seguinte comando para instalar um pacote:
     ```bash
     pip install nome-do-pacote
     ```
   - Por exemplo, para instalar o pacote `numpy`, escreva:
     ```bash
     pip install numpy
     ```

3. **Verifique a instalação:**
   - Você pode verificar a instalação listando os pacotes instalados:
     ```bash
     pip list
     ```

###  R

#### Opção 1: Usando um Notebook

1. **Abra um novo Notebook:**
   - Acesse o JupyterHub e crie um novo Notebook R.

2. **Utilize o comando `install.packages`:**
   - Em uma célula do Notebook, use o seguinte comando para instalar um pacote:
     ```R
     install.packages("nome-do-pacote")
     ```
   - Por exemplo, para instalar o pacote `ggplot2`, escreva:
     ```R
     install.packages("ggplot2")
     ```

3. **Carregue o pacote:**
   - Após a instalação, você pode carregar o pacote usando:
     ```R
     library(nome_do_pacote)
     ```

#### Opção 2: Usando o Terminal

1. **Acesse o terminal:**
   - No JupyterHub, clique em "New" e selecione "Terminal".

2. **Utilize o comando `install.packages`:**
   - No terminal, inicie o R digitando:
     ```bash
     R
     ```
   - Em seguida, use o comando para instalar o pacote:
     ```R
     install.packages("nome-do-pacote")
     ```
   - Por exemplo, para instalar o pacote `ggplot2`, escreva:
     ```R
     install.packages("ggplot2")
     ```

3. **Carregue o pacote:**
   - Após a instalação, você pode carregar o pacote usando:
     ```R
     library(nome_do_pacote)
     ```

#### Observações

- **Permissões:** Como usuário comum, você pode instalar pacotes apenas para o seu ambiente. Não será possível instalar pacotes globalmente para todos os usuários.
- **Conexão com a Internet:** Certifique-se de que seu ambiente JupyterHub tem acesso à Internet para baixar os pacotes.

