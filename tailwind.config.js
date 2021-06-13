module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend:{
      colors:{
        'u-yellow':'#febc58',
        'u-blue':' #004AAD',
        'u-red':' #FF5757',
        'u-lblue':'#00C2CB',
        'u-lgray':'#D9D9D9',
        'u-dgray':'#494949'
      },
    },
    container:{
      center: true,
      padding:{
      DEFAULT: '1rem',
        sm:'2rem',
        md:'3rem',
        lg:'4rem',
        xl:'7rem', 
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
