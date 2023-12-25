const totalLayers = 10
const gap = 1
const zIndex: { [key: number]: number } = {}

for (let i = 0; i < totalLayers; i++) {
  const layer = i * gap
  zIndex[layer] = layer
}

export default zIndex
