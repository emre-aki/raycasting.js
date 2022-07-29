(function() {
  window.__map__ = {
    "N_ROWS": 24,
    "N_COLS": 22,
    "LEGEND": {
      "LENGTH": 15,
      "TYPE_TILE": 0,
      "TEX_WALL_N": 1,
      "TEX_WALL_E": 2,
      "TEX_WALL_S": 3,
      "TEX_WALL_W": 4,
      "TEX_G_FLOOR": 5,
      "TEX_G_CEIL": 6,
      "TEX_FFT_WALL": 7,
      "TEX_FFT_FLOOR": 8,
      "TEX_FFT_CEIL": 9,
      "FACE_DIAG": 7,
      "WOTYPE": 10,
      "WOH": 11,
      "MARGIN_FFT_X": 1,
      "MARGIN_FFT_Y": 2,
      "LEN_FFT_X": 3,
      "LEN_FFT_Y": 4,
      "H_FFT_UPPER_SLOPE_START": 10,
      "H_FFT_UPPER_SLOPE_END": 11,
      "H_FFT_LOWER_SLOPE_START": 12,
      "H_FFT_LOWER_SLOPE_END": 13,
      "FFT_SLOPE_DIR": 14
    },
    // TODO: make str like ["100000000"] or "100000000"
    "MAP": [
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,4,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,4,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,4,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,4,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,4,0,0,0,1,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[1,0,0,0,4,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,2,2,0,1,0,0,0,0,0,0,0,0],[1,3,3,3,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,3,10,0,0,0,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,3,3,3,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,4,0,2,10,0,1,0,1,3,5,0,5,0,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[6,0,0,0,0,3,1,0,0,0,0,10,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,9,3,1,4,0,1,5,0,2,1,1,0,0,0],[3,0,0,0,0,2,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,3,2,8,6,0,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,4,0,2,10,0,1,0,1,3,0,5,0,5,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,3,3,3,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,2,0,0,2,0,1,0,0,0,0,0,0,0,0],[1,3,3,3,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,0,3,2,1,7,8,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,4,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[7,0,0,10,10,4,0,0,0,3,1,1,0,0,0],[7,0,0,10,10,4,0,0,0,3,1,1,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[7,0,0,10,10,0,1,6,1,1,0,0,3,3,0],[7,0,0,10,10,0,1,6,1,3,1,1,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,4,0,0,0,3,2,1,0,0,1],[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],[7,0,0,10,10,4,0,0,0,3,2,1,0,0,1],[7,0,0,10,10,0,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,1,6,1,3,1,1,4,4,0],[7,0,0,10,10,0,1,6,1,1,0,0,3,3,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[7,0,0,10,10,0,1,6,1,1,0,0,3,3,0],[7,0,0,10,10,0,1,6,1,3,1,1,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,4,0,0,0,3,1,2,0,0,1],[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],[7,0,0,10,10,4,0,0,0,3,1,2,0,0,1],[7,0,0,10,10,0,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,1,6,1,3,1,1,4,4,0],[7,0,0,10,10,0,1,6,1,1,0,0,3,3,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[7,0,0,10,10,4,0,0,0,3,1,1,0,0,0],[7,0,0,10,10,4,0,0,0,3,1,1,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,6,1,1,0,0,2,2,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,4,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,8,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,5,1],[7,0,0,10,10,0,1,0,1,1,0,0,1,5,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,0,3,3,5,6,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[7,0,0,10,10,0,0,0,1,0,0,0,4,4,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,5,5,0],[7,0,0,10,10,0,1,0,1,1,0,0,5,5,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,5,3,1],[7,0,0,10,10,0,1,0,1,1,0,0,5,3,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,3,0,3,3,0,1,0,0,0,0,0,0,0,0],[1,0,2,2,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,3,1,1],[7,0,0,10,10,0,1,0,1,1,0,0,3,1,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,3,0,2,3,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[7,9,3,1,4,0,1,5,0,2,1,1,0,0,0],[3,0,0,0,0,2,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,1,3,0,0,0,0,0,0,0],[2,0,0,0,0,0,1,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,3,1],[7,0,0,10,10,0,1,0,1,1,0,0,1,3,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,7,10,3,0,1,0,0,2,1,1,3,3,0],[7,0,7,3,3,0,1,0,0,2,1,1,3,3,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,2,0,3,3,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,3,3,0],[7,0,0,10,10,0,1,0,1,1,0,0,3,3,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,2,2,6,6,0,1,7,0,2,2,2,6,6,0],[7,0,0,3,10,0,1,0,0,2,1,1,3,3,0],[7,0,0,10,10,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,3,0,3,3,0,1,0,0,0,0,0,0,0,0],[1,2,2,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[7,0,0,10,10,0,1,0,1,1,0,0,3,5,1],[7,0,0,10,10,0,1,0,1,1,0,0,3,5,1],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,4,0,0,0,1,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,1,3,0,0,0,0,0,0,0],[6,0,0,0,0,0,1,0,0,0,1,10,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,1,2,0,0,0,0,0,0,0],[1,0,0,0,4,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,4,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,4,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,4,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,4,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
    ]
  };
})();
