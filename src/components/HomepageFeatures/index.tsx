import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Scan',
    Svg: require('@site/static/img/undraw_photocopy_k0g7.svg').default,
    description: (
      <>
      <p className="subtitle"><strong><Translate>Zeskanuj. Rozpoznaj. Działaj.</Translate></strong></p>
      <p><Translate>Dodaj dokument ze skanera, e-maila lub integracji – SPUMA rozpoznaje treść (OCR) i przygotowuje go do dalszej pracy.</Translate></p>
      </>
    ),
  },
  {
    title: 'PUblish',
    Svg: require('@site/static/img/undraw_publish-post_7g2z.svg').default,
    description: (
      <>
        <p className="subtitle"><strong><Translate>Zatwierdzaj. Deleguj. Kontroluj.</Translate></strong></p>
      <p><Translate>Obsługuj procesy obiegu dokumentów – opisuj, deleguj i zatwierdzaj zgodnie z ustalonymi schematami.</Translate></p>
      </>
    ),
  },
  {
    title: 'MAnage',
    Svg: require('@site/static/img/undraw_file-manager_yics.svg').default,
    description: (
      <>
        <p className="subtitle"><strong><Translate>Znajdź. Komentuj. Raportuj.</Translate></strong></p>
      <p><Translate>Wyszukuj dokumenty po treści i atrybutach, dodawaj komentarze i twórz raporty zapewniające pełną kontrolę.</Translate></p>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
