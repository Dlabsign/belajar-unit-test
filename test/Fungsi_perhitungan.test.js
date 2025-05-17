const { tambah, kurang } = require('../src/Fungsi_perhitungan');

test('menjumlahkan 2 + 3 = 5', () => {
  expect(tambah(2, 3)).toBe(5);
});

test('mengurangi 10 - 4 = 6', () => {
  expect(kurang(10, 4)).toBe(6);
});
