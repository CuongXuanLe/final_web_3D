import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
  decals: ['logo192', 'three2', 'pmndrs'],
  selectedColor: '#EFBD4E',
  selectedDecal: 'three2'
})

export { state }