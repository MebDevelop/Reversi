import Player from '../lib/Player'

function getBackgroundImage(player) {
  if (player === Player.One) return 'url("img/red.png")'
  if (player === Player.Two) return 'url("img/blue.png")'

  return 'none'
}

export default function(player) {
  return {
    width: 40,
    height: 40
  }
}
