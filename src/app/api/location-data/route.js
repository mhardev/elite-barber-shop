import { NextResponse } from 'next/server'

// Replace this with your actual JSON data
const locationData = [
  {
    id: 'vwuwtwvutuuvuuvttv',
    zrange: [18, 18],
    layer: 'spotlit',
    base: [1795768128, 985013792],
    features: [
      {
        id: '10047131653876404204',
        a: [0, 0, 1795768128, 985013792],
        bb: [-14, -29, 13, 2],
        c: '{"1":{"title":"Celso V. Ureta, MD @ Novaliches Eye \\u0026 Ear Clinic"}}',
        io: [0, -13],
      },
      {
        id: '15209221006715066237',
        a: [-8448, -896, 1795759680, 985012896],
        bb: [-14, -29, 13, 2],
        c: '{"1":{"title":"Saints and Angels School"}}',
        io: [0, -13],
      },
    ],
  },
  {
    id: 'vwuwtwvutuuvuuvtuv',
    zrange: [18, 18],
    layer: 'spotlit',
    base: [1795762912, 985024960],
    features: [
      {
        id: '7921503358394224030',
        a: [0, 0, 1795762912, 985024960],
        bb: [-14, -29, 13, 2],
        c: '{"1":{"title":"SM City Novaliches"}}',
        io: [0, -13],
      },
      {
        id: '12889941143308604336',
        a: [5376, 2368, 1795768288, 985027328],
        bb: [-14, -29, 13, 2],
        c: '{"1":{"title":"Jollibee Novaliches San Bartolome"}}',
        io: [0, -13],
      },
    ],
  },
]

export async function GET() {
  return NextResponse.json(locationData)
}
