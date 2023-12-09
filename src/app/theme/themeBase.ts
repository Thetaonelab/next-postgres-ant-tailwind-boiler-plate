import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: 'rgb(217,54,62)',
    fontSize: 16,
    wireframe: false,
    colorTextBase: '#000000e6',
    fontFamily: 'inherit',
  },
  components: {
    Button: {
      contentFontSize: 16,
      padding: 4,
      controlHeight: 36
    },
    Pagination: {
      itemSize: 26
    },
    Input: {
      fontFamily: 'inherit',
      controlHeight: 36
    },
    Checkbox: {
      controlInteractiveSize: 21
    },
    Form: {
      controlHeight: 36,
      fontFamily: 'inherit',
      labelFontSize: 14,
    },
    Radio: {
      controlHeight: 36
    },
    Select: {
      controlHeight: 36
    },
    Table: {
      cellPaddingBlockMD: 10,
      cellPaddingInline: 12,
      fontSize: 15,
      fontFamily:'inherit',
      fontFamilyCode: 'inherit'
    },
    Typography: {
      fontFamily:'inherit',
      fontFamilyCode: 'inherit'
    },
    Menu:{
      fontFamily:'inherit',
      fontFamilyCode: 'inherit'
    },
    Layout: {
      fontFamily:'inherit',
      fontFamilyCode:'inherit',
    },
    Spin:{
      fontFamily:'inherit',
      fontFamilyCode:'inherit',
    },
  }
};

export default theme;
