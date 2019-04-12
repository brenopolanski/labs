const initData = {
  dimensions: [
    {
      uniqueName: '[Customer]',
      name: 'Customer',
      caption: 'Customer',
      description: null,
      visible: true,
      hierarchies: [
        {
          uniqueName: '[Customer].[Customers]',
          name: 'Customers',
          caption: 'Customers',
          dimensionUniqueName: '[Customer]',
          levels: [
            {
              uniqueName: '[Customer].[Customers].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Customer].[Customers]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Customers].[Country]',
              name: 'Country',
              annotations: null,
              levelType: null,
              caption: 'Country',
              hierarchyUniqueName: '[Customer].[Customers]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Customers].[State Province]',
              name: 'State Province',
              annotations: null,
              levelType: null,
              caption: 'State Province',
              hierarchyUniqueName: '[Customer].[Customers]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Customers].[City]',
              name: 'City',
              annotations: null,
              levelType: null,
              caption: 'City',
              hierarchyUniqueName: '[Customer].[Customers]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Customers].[Name]',
              name: 'Name',
              annotations: null,
              levelType: null,
              caption: 'Name',
              hierarchyUniqueName: '[Customer].[Customers]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Customer].[Customers].[All Customers]',
              name: 'All Customers',
              caption: 'All Customers',
              dimensionUniqueName: '[Customer]',
              description: null,
              levelUniqueName: '[Customer].[Customers].[(All)]',
              hierarchyUniqueName: '[Customer].[Customers]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Customer].[Education Level]',
          name: 'Education Level',
          caption: 'Education Level',
          dimensionUniqueName: '[Customer]',
          levels: [
            {
              uniqueName: '[Customer].[Education Level].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Customer].[Education Level]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Education Level].[Education Level]',
              name: 'Education Level',
              annotations: null,
              levelType: null,
              caption: 'Education Level',
              hierarchyUniqueName: '[Customer].[Education Level]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Customer].[Education Level].[All Education Levels]',
              name: 'All Education Levels',
              caption: 'All Education Levels',
              dimensionUniqueName: '[Customer]',
              description: null,
              levelUniqueName: '[Customer].[Education Level].[(All)]',
              hierarchyUniqueName: '[Customer].[Education Level]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Customer].[Gender]',
          name: 'Gender',
          caption: 'Customer - Gender',
          dimensionUniqueName: '[Customer]',
          levels: [
            {
              uniqueName: '[Customer].[Gender].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Customer].[Gender]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Gender].[Gender]',
              name: 'Gender',
              annotations: null,
              levelType: null,
              caption: 'Gender',
              hierarchyUniqueName: '[Customer].[Gender]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Customer].[Gender].[All Gender]',
              name: 'All Gender',
              caption: 'All Gender',
              dimensionUniqueName: '[Customer]',
              description: null,
              levelUniqueName: '[Customer].[Gender].[(All)]',
              hierarchyUniqueName: '[Customer].[Gender]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Customer].[Marital Status]',
          name: 'Marital Status',
          caption: 'Customer - Marital Status',
          dimensionUniqueName: '[Customer]',
          levels: [
            {
              uniqueName: '[Customer].[Marital Status].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Customer].[Marital Status]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Marital Status].[Marital Status]',
              name: 'Marital Status',
              annotations: null,
              levelType: null,
              caption: 'Marital Status',
              hierarchyUniqueName: '[Customer].[Marital Status]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Customer].[Marital Status].[All Marital Status]',
              name: 'All Marital Status',
              caption: 'All Marital Status',
              dimensionUniqueName: '[Customer]',
              description: null,
              levelUniqueName: '[Customer].[Marital Status].[(All)]',
              hierarchyUniqueName: '[Customer].[Marital Status]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Customer].[Yearly Income]',
          name: 'Yearly Income',
          caption: 'Customer - Yearly Income',
          dimensionUniqueName: '[Customer]',
          levels: [
            {
              uniqueName: '[Customer].[Yearly Income].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Customer].[Yearly Income]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Customer].[Yearly Income].[Yearly Income]',
              name: 'Yearly Income',
              annotations: null,
              levelType: null,
              caption: 'Yearly Income',
              hierarchyUniqueName: '[Customer].[Yearly Income]',
              dimensionUniqueName: '[Customer]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Customer].[Yearly Income].[All Yearly Incomes]',
              name: 'All Yearly Incomes',
              caption: 'All Yearly Incomes',
              dimensionUniqueName: '[Customer]',
              description: null,
              levelUniqueName: '[Customer].[Yearly Income].[(All)]',
              hierarchyUniqueName: '[Customer].[Yearly Income]',
              calculated: false
            }
          ]
        }
      ]
    },
    {
      uniqueName: '[Performance Season Day]',
      name: 'Performance Season Day',
      caption: 'Performance Season Day',
      description: null,
      visible: true,
      hierarchies: [
        {
          uniqueName: '[Performance Season Day].[Performance]',
          name: 'Performance',
          caption: 'Performance',
          dimensionUniqueName: '[Performance Season Day]',
          levels: [
            {
              uniqueName: '[Performance Season Day].[Performance].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Performance Season Day].[Performance]',
              dimensionUniqueName: '[Performance Season Day]',
              visible: true,
              description: null
            },
            {
              uniqueName:
                '[Performance Season Day].[Performance].[Performance Season Day]',
              name: 'Performance Season Day',
              annotations: null,
              levelType: null,
              caption: 'Performance Season Day',
              hierarchyUniqueName: '[Performance Season Day].[Performance]',
              dimensionUniqueName: '[Performance Season Day]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName:
                '[Performance Season Day].[Performance].[All Performances]',
              name: 'All Performances',
              caption: 'All Performances',
              dimensionUniqueName: '[Performance Season Day]',
              description: null,
              levelUniqueName: '[Performance Season Day].[Performance].[(All)]',
              hierarchyUniqueName: '[Performance Season Day].[Performance]',
              calculated: false
            }
          ]
        }
      ]
    },
    {
      uniqueName: '[Product]',
      name: 'Product',
      caption: 'Product',
      description: null,
      visible: true,
      hierarchies: [
        {
          uniqueName: '[Product].[Products]',
          name: 'Products',
          caption: 'Products',
          dimensionUniqueName: '[Product]',
          levels: [
            {
              uniqueName: '[Product].[Products].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Product].[Products]',
              dimensionUniqueName: '[Product]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Product].[Products].[Product Family]',
              name: 'Product Family',
              annotations: null,
              levelType: null,
              caption: 'Product Family',
              hierarchyUniqueName: '[Product].[Products]',
              dimensionUniqueName: '[Product]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Product].[Products].[Product Department]',
              name: 'Product Department',
              annotations: null,
              levelType: null,
              caption: 'Product Department',
              hierarchyUniqueName: '[Product].[Products]',
              dimensionUniqueName: '[Product]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Product].[Products].[Product Category]',
              name: 'Product Category',
              annotations: null,
              levelType: null,
              caption: 'Product Category',
              hierarchyUniqueName: '[Product].[Products]',
              dimensionUniqueName: '[Product]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Product].[Products].[Product Subcategory]',
              name: 'Product Subcategory',
              annotations: null,
              levelType: null,
              caption: 'Product Subcategory',
              hierarchyUniqueName: '[Product].[Products]',
              dimensionUniqueName: '[Product]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Product].[Products].[Brand Name]',
              name: 'Brand Name',
              annotations: null,
              levelType: null,
              caption: 'Brand Name',
              hierarchyUniqueName: '[Product].[Products]',
              dimensionUniqueName: '[Product]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Product].[Products].[Product Name]',
              name: 'Product Name',
              annotations: null,
              levelType: null,
              caption: 'Product Name',
              hierarchyUniqueName: '[Product].[Products]',
              dimensionUniqueName: '[Product]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Product].[Products].[All Products]',
              name: 'All Products',
              caption: 'All Products',
              dimensionUniqueName: '[Product]',
              description: null,
              levelUniqueName: '[Product].[Products].[(All)]',
              hierarchyUniqueName: '[Product].[Products]',
              calculated: false
            }
          ]
        }
      ]
    },
    {
      uniqueName: '[Promotion]',
      name: 'Promotion',
      caption: 'Promotion',
      description: null,
      visible: true,
      hierarchies: [
        {
          uniqueName: '[Promotion].[Media Type]',
          name: 'Media Type',
          caption: 'Media Type',
          dimensionUniqueName: '[Promotion]',
          levels: [
            {
              uniqueName: '[Promotion].[Media Type].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Promotion].[Media Type]',
              dimensionUniqueName: '[Promotion]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Promotion].[Media Type].[Media Type]',
              name: 'Media Type',
              annotations: null,
              levelType: null,
              caption: 'Media Type',
              hierarchyUniqueName: '[Promotion].[Media Type]',
              dimensionUniqueName: '[Promotion]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Promotion].[Media Type].[All Media]',
              name: 'All Media',
              caption: 'All Media',
              dimensionUniqueName: '[Promotion]',
              description: null,
              levelUniqueName: '[Promotion].[Media Type].[(All)]',
              hierarchyUniqueName: '[Promotion].[Media Type]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Promotion].[Promotions]',
          name: 'Promotions',
          caption: 'Promotions',
          dimensionUniqueName: '[Promotion]',
          levels: [
            {
              uniqueName: '[Promotion].[Promotions].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Promotion].[Promotions]',
              dimensionUniqueName: '[Promotion]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Promotion].[Promotions].[Promotion Name]',
              name: 'Promotion Name',
              annotations: null,
              levelType: null,
              caption: 'Promotion Name',
              hierarchyUniqueName: '[Promotion].[Promotions]',
              dimensionUniqueName: '[Promotion]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Promotion].[Promotions].[All Promotions]',
              name: 'All Promotions',
              caption: 'All Promotions',
              dimensionUniqueName: '[Promotion]',
              description: null,
              levelUniqueName: '[Promotion].[Promotions].[(All)]',
              hierarchyUniqueName: '[Promotion].[Promotions]',
              calculated: false
            }
          ]
        }
      ]
    },
    {
      uniqueName: '[Store]',
      name: 'Store',
      caption: 'Store',
      description: null,
      visible: true,
      hierarchies: [
        {
          uniqueName: '[Store].[Stores]',
          name: 'Stores',
          caption: 'Stores',
          dimensionUniqueName: '[Store]',
          levels: [
            {
              uniqueName: '[Store].[Stores].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Store].[Stores]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Store].[Stores].[Store Country]',
              name: 'Store Country',
              annotations: null,
              levelType: null,
              caption: 'Store Country',
              hierarchyUniqueName: '[Store].[Stores]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Store].[Stores].[Store State]',
              name: 'Store State',
              annotations: null,
              levelType: null,
              caption: 'Store State',
              hierarchyUniqueName: '[Store].[Stores]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Store].[Stores].[Store City]',
              name: 'Store City',
              annotations: null,
              levelType: null,
              caption: 'Store City',
              hierarchyUniqueName: '[Store].[Stores]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Store].[Stores].[Store Name]',
              name: 'Store Name',
              annotations: null,
              levelType: null,
              caption: 'Store Name',
              hierarchyUniqueName: '[Store].[Stores]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Store].[Stores].[All Stores]',
              name: 'All Stores',
              caption: 'All Stores',
              dimensionUniqueName: '[Store]',
              description: null,
              levelUniqueName: '[Store].[Stores].[(All)]',
              hierarchyUniqueName: '[Store].[Stores]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Store].[Store Size in SQFT]',
          name: 'Store Size in SQFT',
          caption: 'Store Size in SQFT',
          dimensionUniqueName: '[Store]',
          levels: [
            {
              uniqueName: '[Store].[Store Size in SQFT].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Store].[Store Size in SQFT]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Store].[Store Size in SQFT].[Store Sqft]',
              name: 'Store Sqft',
              annotations: null,
              levelType: null,
              caption: 'Store Sqft',
              hierarchyUniqueName: '[Store].[Store Size in SQFT]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName:
                '[Store].[Store Size in SQFT].[All Store Size in SQFTs]',
              name: 'All Store Size in SQFTs',
              caption: 'All Store Size in SQFTs',
              dimensionUniqueName: '[Store]',
              description: null,
              levelUniqueName: '[Store].[Store Size in SQFT].[(All)]',
              hierarchyUniqueName: '[Store].[Store Size in SQFT]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Store].[Store Type]',
          name: 'Store Type',
          caption: 'Store - Store Type',
          dimensionUniqueName: '[Store]',
          levels: [
            {
              uniqueName: '[Store].[Store Type].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Store].[Store Type]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Store].[Store Type].[Store Type]',
              name: 'Store Type',
              annotations: null,
              levelType: null,
              caption: 'Store Type',
              hierarchyUniqueName: '[Store].[Store Type]',
              dimensionUniqueName: '[Store]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Store].[Store Type].[All Store Types]',
              name: 'All Store Types',
              caption: 'All Store Types',
              dimensionUniqueName: '[Store]',
              description: null,
              levelUniqueName: '[Store].[Store Type].[(All)]',
              hierarchyUniqueName: '[Store].[Store Type]',
              calculated: false
            }
          ]
        }
      ]
    },
    {
      uniqueName: '[Time]',
      name: 'Time',
      caption: 'Time',
      description: null,
      visible: true,
      hierarchies: [
        {
          uniqueName: '[Time].[Time]',
          name: 'Time',
          caption: 'Time',
          dimensionUniqueName: '[Time]',
          levels: [
            {
              uniqueName: '[Time].[Time].[Year]',
              name: 'Year',
              annotations: null,
              levelType: null,
              caption: 'Year',
              hierarchyUniqueName: '[Time].[Time]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Time].[Time].[Quarter]',
              name: 'Quarter',
              annotations: null,
              levelType: null,
              caption: 'Quarter',
              hierarchyUniqueName: '[Time].[Time]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Time].[Time].[Month]',
              name: 'Month',
              annotations: null,
              levelType: null,
              caption: 'Month',
              hierarchyUniqueName: '[Time].[Time]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Time].[Time].[1997]',
              name: '1997',
              caption: '1997',
              dimensionUniqueName: '[Time]',
              description: null,
              levelUniqueName: '[Time].[Time].[Year]',
              hierarchyUniqueName: '[Time].[Time]',
              calculated: false
            },
            {
              uniqueName: '[Time].[Time].[1998]',
              name: '1998',
              caption: '1998',
              dimensionUniqueName: '[Time]',
              description: null,
              levelUniqueName: '[Time].[Time].[Year]',
              hierarchyUniqueName: '[Time].[Time]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Time].[Weekly]',
          name: 'Weekly',
          caption: 'Weekly',
          dimensionUniqueName: '[Time]',
          levels: [
            {
              uniqueName: '[Time].[Weekly].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Time].[Weekly]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Time].[Weekly].[Year]',
              name: 'Year',
              annotations: null,
              levelType: null,
              caption: 'Year',
              hierarchyUniqueName: '[Time].[Weekly]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Time].[Weekly].[Week]',
              name: 'Week',
              annotations: null,
              levelType: null,
              caption: 'Week',
              hierarchyUniqueName: '[Time].[Weekly]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Time].[Weekly].[Day]',
              name: 'Day',
              annotations: null,
              levelType: null,
              caption: 'Day',
              hierarchyUniqueName: '[Time].[Weekly]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Time].[Weekly].[All Weeklys]',
              name: 'All Weeklys',
              caption: 'All Weeklys',
              dimensionUniqueName: '[Time]',
              description: null,
              levelUniqueName: '[Time].[Weekly].[(All)]',
              hierarchyUniqueName: '[Time].[Weekly]',
              calculated: false
            }
          ]
        },
        {
          uniqueName: '[Time].[Date Only]',
          name: 'Date Only',
          caption: 'Date Only',
          dimensionUniqueName: '[Time]',
          levels: [
            {
              uniqueName: '[Time].[Date Only].[(All)]',
              name: '(All)',
              annotations: null,
              levelType: null,
              caption: '(All)',
              hierarchyUniqueName: '[Time].[Date Only]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            },
            {
              uniqueName: '[Time].[Date Only].[Date String]',
              name: 'Date String',
              annotations: null,
              levelType: null,
              caption: 'Date String',
              hierarchyUniqueName: '[Time].[Date Only]',
              dimensionUniqueName: '[Time]',
              visible: true,
              description: null
            }
          ],
          description: null,
          visible: true,
          rootMembers: [
            {
              uniqueName: '[Time].[Date Only].[All Date Onlys]',
              name: 'All Date Onlys',
              caption: 'All Date Onlys',
              dimensionUniqueName: '[Time]',
              description: null,
              levelUniqueName: '[Time].[Date Only].[(All)]',
              hierarchyUniqueName: '[Time].[Date Only]',
              calculated: false
            }
          ]
        }
      ]
    }
  ]
};

export default initData;
