const styles = {
  icon: {
    departure: '#48BB78',
    return: '#d6204e',
  },
  text: {
    color: {
      primary: '#808080',
      error: '#d6204e',
    },
    fontSize: {
      xSmall: 'xs',
    },
  },
  input: {
    maxWidth: '80%',
  },
  logo: {
    color: '#319795',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 'md',
  },
  theme: {
    darkSecondary: '#15202b',
  },
  navLink: (isActive: boolean) => {
    return {
      color: isActive ? '#319795' : '#2980B9',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 'md',
    };
  },
};
export default styles;
