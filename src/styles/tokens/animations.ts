export const keyframes = {
  springWidth: {
    '0%, 100%': { width: '100%' },
    '33%': { width: '130%' },
    '66%': { width: '70%' },
    '99%': { width: '99%' },
  },
  springScale: {
    '0%, 100%': { transform: 'scale(1)' },
    '70%': { transform: 'scale(1.2)' },
  },
  bannerArrow: {
    '0%,100%': { transform: 'scaleY(1)' },
    '50%': { transform: 'scaleY(.8)' },
    '75%': { transform: 'scaleY(1.1)' },
    '87.5%': { transform: 'scaleY(.97)' },
    '99%': { transform: 'scaleY(1.005)' },
  },
  jump: {
    '0%,100%': { transform: 'translateY(0)' },
    '20%': { transform: 'translateY(-18%)' },
    '35%': { transform: 'translateY(-20%)' },
    '80%': { transform: 'translateY(5%)' },
  },
}

export const animation = {
  springWidth: 'springWidth 500ms',
  springScale: 'springScale 250ms forwards',
  bannerArrow: 'bannerArrow 250ms forwards',
  jump: 'jump 500ms forwards',
}
