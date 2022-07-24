import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Tavoitteemme',
    paragraph: 'Me tarjoamme jokaiselle kotitaloudelle mahdollisuuden alentaa sähkölaskua \
    ja samalla tehdä ympäristöystävällisiä valintoja. Halpa ja vihreä sähkö kulkevat käsi kädessä.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Selkeää säästöä sähkölaskuun
                    </h4>
                  <p className="m-0 text-sm">
                    Tarjoamme uuden hinnoittelutavan sähköllesi, joka perustuu tuulivoiman saatavuuteen.
                    Kuluttamalla sähköä tuulisina tunteina saat alennettua sähkölaskuasi huomattavasti, ilman kulutusmuutoksiakin voit päästä halvemmalla kuin nykyään.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Aidosti puhtainta sähköä
                    </h4>
                  <p className="m-0 text-sm">
                  Sähkö on puhtainta silloin, kun kulutat sähköä samaan aikaan uusiutuvien tuotannon kanssa. Nykyiset alkuperätakuisiin perustuvat tuulisopimukset eivät ole niin puhtaita kuin olisi mahdollista.                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Hyödy uusiutuvista kuten isot yritykset ovat hyötyneet jo vuosia.
                    </h4>
                  <p className="m-0 text-sm">
                  Suuret sähkönkuluttajat ostavat sähköä suoraan tuulipuistoista, joka on halvempaa kuin kuluttajalle tarjottava sähkö. Enää tämä ei ole mahdollista vain isoille yrityksille!
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;