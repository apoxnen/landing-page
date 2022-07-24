import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Mailchimp from 'react-mailchimp-form'

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Tilaa uutiskirjeemme
              </h3>
          </div>
          <div className="cta-action">
          <Mailchimp action="XXX"
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'sähköpostiosoitteesi',
                  type: 'email',
                  required: true
                }
              ]}
              // Change predetermined language
              messages={
              {
                  sending: "Lähetetään...",
                  success: "Kiitos tilauksesta!",
                  error: "Virhe järjestelmässä.",
                  empty: "Kirjoita sähköpostiosoite kenttään.",
                  duplicate: "Tämä sähköpostiosoite on jo tilaajalistalla",
                  button: "Tilaa"
              }
          }
              className="form-input"     
          />
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;