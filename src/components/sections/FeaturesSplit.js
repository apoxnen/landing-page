import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Kuinka se toimii',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />



          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Uusi sopimustyyppi
                  </div>
                <h3 className="mt-0 mb-12">
                   Kaksi kiinteää hintaa
                  </h3>
                <p className="m-0">
                Markkinoiden ehdottomasti halvinta sähköä saat kun tuulivoimalamme tuottavat sähköä. 
                Kalliimpaa hintaa maksat vain silloin, kun kulutat sähköä tuulettomina tunteina. 
                Mitä enemmän siirrät kulutusta tuulisille tunneille, sitä enemmän säästät ja pienennät hiilijalanjälkeäsi.                       
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/table1.PNG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Pienennä sähkölaskuasi ja hiilijalanjälkeäsi
                  </div>
                <h3 className="mt-0 mb-12">
                  Kulutuksen siirtäminen tuulisille tunneille
                  </h3>
                <p className="m-0">
                Tuotamme sinulle selkeitä kehotuksia milloin halpaa sähköä voi ja kannattaa kuluttaa. 
                Annamme sinulle joka päivä neljän seuraavan päivän ennusteet, joita voit käyttää tukena kulutuksesi suunnittelussa.
                Huomisen ja ylihuomisen ennusteissa tarjoamme tuntikohtaisen tiedon sähkösi lähteestä, muille päiville yleisemmän ennusteen tuulisuudesta.
                Laadukkaiden ennusteiden avulla kulutuksen siirtäminen tuulisille tunneille sujuu vaivattomasti.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/header-image-1.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;