import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Ecossistema Python',
    Svg: require('@site/static/img/python.svg').default,
    description: (
      <>
        Desenvolvimento de projetos e pesquisas matemáticas com o poder e a versatilidade do Python.
        Explore pacotes avançados e ferramentas como NumPy, SciPy, e TensorFlow para ampliar suas análises
        e modelagens.
      </>
    ),
  },
  {
    title: 'Foco no Essencial',
    Svg: require('@site/static/img/logo_.svg').default,
    description: (
      <>
        O HubCMat facilita o acesso às ferramentas essenciais de pesquisa, permitindo que você se concentre em explorar
          e criar. Disponibilize seus cálculos e análises em um ambiente unificado com JupyterHub e SageMath.
      </>
    ),
  },
  {
    title: 'Impulsionado por SageMath',
    Svg: require('@site/static/img/sagemath.svg').default,
    description: (
      <>
        Integração avançada com o SageMath, trazendo o melhor da computação matemática para suas pesquisas. Desenvolva e
        compartilhe seus projetos com uma interface moderna, baseada em Jupyter e com suporte a Python, R e muito mais.
      </>
    ),
  },

  //   {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/sage.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
