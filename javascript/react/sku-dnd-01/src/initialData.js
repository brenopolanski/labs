import uuid from 'uuid/v4';

const initialData = {
  measuresData: [
    {
      id: uuid(),
      uniqueName: '[Measures].[Unit Sales]',
      name: 'Unit Sales',
      caption: 'Unit Sales',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: false,
      measureGroup: 'Sales'
    },
    {
      id: uuid(),
      uniqueName: '[Measures].[Store Cost]',
      name: 'Store Cost',
      caption: 'Store Cost',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: false,
      measureGroup: 'Sales'
    },
    {
      id: uuid(),
      uniqueName: '[Measures].[Store Sales]',
      name: 'Store Sales',
      caption: 'Store Sales',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: false,
      measureGroup: 'Sales'
    },
    {
      id: uuid(),
      uniqueName: '[Measures].[Sales Count]',
      name: 'Sales Count',
      caption: 'Sales Count',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: false,
      measureGroup: 'Sales'
    },
    {
      id: uuid(),
      uniqueName: '[Measures].[Customer Count]',
      name: 'Customer Count',
      caption: 'Customer Count',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: false,
      measureGroup: 'Sales'
    },
    {
      id: uuid(),
      uniqueName: '[Measures].[Promotion Sales]',
      name: 'Promotion Sales',
      caption: 'Promotion Sales',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: false,
      measureGroup: 'Sales'
    },
    {
      id: uuid(),
      uniqueName: '[Measures].[Profit]',
      name: 'Profit',
      caption: 'Profit',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: true,
      measureGroup: ''
    },
    {
      id: uuid(),
      uniqueName: '[Measures].[Profit Growth]',
      name: 'Profit Growth',
      caption: 'Gewinn-Wachstum',
      dimensionUniqueName: '[Measures]',
      description: null,
      levelUniqueName: '[Measures].[MeasuresLevel]',
      hierarchyUniqueName: '[Measures]',
      calculated: true,
      measureGroup: ''
    }
  ],
  axes: {
    'measures': {
      id: 'measures',
      title: 'Measures',
      items: []
    },
    'filters': {
      id: 'filters',
      title: 'Filters',
      items: []
    },
    'rows': {
      id: 'rows',
      title: 'Rows',
      items: []
    },
    'columns': {
      id: 'columns',
      title: 'Columns',
      items: []
    }
  },
  // axesOrder: ['measures', 'filters', 'rows', 'columns'],
  axesOrder: ['measures'],
};

export default initialData;
