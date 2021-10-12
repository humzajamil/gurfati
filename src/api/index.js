import React from 'react';
import axios from 'axios';

const propertyTypeUrl =
  'http://34.240.14.46:9999/web/property/propertyTypeList';

export const propertyTypes = async () => await axios.get(propertyTypeUrl);
