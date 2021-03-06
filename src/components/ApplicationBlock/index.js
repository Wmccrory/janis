import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { callToAction as i18n } from 'js/i18n/definitions';

import Recollect from 'components/Recollect';
import ContactMap from 'components/Contact/ContactMap';
import SectionHeader from 'components/SectionHeader';

const ApplicationBlock = ({ content, intl }) => {
  const { type, value } = content;
  let app, title, id;
  switch (type) {
    case 'collection_schedule_block':
      app = <Recollect options={{ name: 'calendar' }} />;
      title = intl.formatMessage(i18n.enterAddress);
      id = 'HashLink-Recollect';
      break;
    case 'what_do_i_do_with_block':
      app = <Recollect options={{ name: 'wizard' }} />;
      title = intl.formatMessage(i18n.whatDoIDoWith);
      id = 'HashLink-Recollect';
      break;
    case 'recollect_block':
      app = <Recollect options={{ page: 'tabbed_widget', name: 'wizard' }} />;
      title = intl.formatMessage(i18n.whatDoIDoWith);
      id = 'HashLink-Recollect';
      break;
    case 'map_block':
      app = (
        <div>
          <ContactMap contact={value.contact} />
        </div>
      );
      title = value.description;
      id = `HashLink-Map-${content.id}`;
      break;
  }

  if (!app) return null;
  return (
    <div id={id} className="coa-ApplicationBlock">
      <SectionHeader>{title}</SectionHeader>
      {app}
    </div>
  );
};

ApplicationBlock.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.object,
  }).isRequired,
};

export default injectIntl(ApplicationBlock);
